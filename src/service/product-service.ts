import { APIGatewayEvent, APIGatewayProxyEvent } from "aws-lambda";
import { ProductRepository } from "../repisitory/product-repository";
import { AppValidationError } from "../utility/errors";
import { ErrorResponse, SusccessResponse } from "../utility/response";
import { plainToClass } from "class-transformer";
import { ProductsInput } from "../dto/products/product-inputs";
import { CategoryRepository } from "../repisitory/category-repository";
import { ServiceInput } from "../dto/serviceInput";

export class ProductService {
  _repository: ProductRepository;
  constructor(repository: ProductRepository) {
    this._repository = repository;
  }

  async ResponseWithError(event: APIGatewayEvent) {
    return ErrorResponse(404, new Error("Method not allowed !"));
  }

  async createProduct(event: APIGatewayEvent) {
    console.log({event:event.body});
    
    const input = plainToClass(ProductsInput, JSON.parse(event.body!));
    const error = await AppValidationError(input);
    if (error) return ErrorResponse(404, error);

    // Dates
    input.date_created = "2017-03-23T17:01:14";
    input.date_created_gmt = "2017-03-23T20:01:14";
    input.date_modified = "2017-03-23T17:01:14";
    input.date_modified_gmt = "2017-03-23T20:01:14";

    const data = await this._repository.createProduct(input);

    return SusccessResponse(data);
  }

  async getProduct(event: APIGatewayEvent) {
    console.log({event:event});
    const productId = event.pathParameters?.id;
    var type = event.queryStringParameters?.type;
    var catId = event.queryStringParameters?.catId;
    {
      if (productId) {
        const data = await this._repository.getProductById(productId);

        return SusccessResponse(data);
      } else if (catId) {
        const data = await this._repository.listProductByCat(catId);

        return SusccessResponse(data);
      } else if ((type = "feat")) {
        const data = await this._repository.listFeaturedProducts();

        return SusccessResponse(data);
      } else if ((type = "sale")) {
        const data = await this._repository.listSalesProducts();

        return SusccessResponse(data);
      } else if ((type = "virtual")) {
        const data = await this._repository.listVirtualProducts();

        return SusccessResponse(data);
      } else if ((type = "inStock")) {
        const data = await this._repository.listProductsInStoc();

        return SusccessResponse(data);
      } else if ((type = "outStock")) {
        const data = await this._repository.listProductsOutStoc();

        return SusccessResponse(data);
      } else if ((type = "backorder")) {
        const data = await this._repository.listBackOrder_Products();

        return SusccessResponse(data);
      }
      return ErrorResponse(403, "please provide parameter string");
    }
  }

  async getProducts(event: APIGatewayEvent) {
    
    const data = await this._repository.listAllProducts();

    return SusccessResponse(data);
  }

  async editProduct(event: APIGatewayEvent) {
    
    console.log({event:event.body});
    const productId = event.pathParameters?.id;
    if (!productId) return ErrorResponse(403, "please provide product id");

    const input = plainToClass(ProductsInput, JSON.parse(event.body!));
    const error = await AppValidationError(input);
    if (error) return ErrorResponse(404, error);

    input.id = productId;
    const data = await this._repository.updateProduct(input);

    return SusccessResponse(data);
  }

  async deleteProduct(event: APIGatewayEvent) {
    const productId = event.pathParameters?.id;
    if (!productId) return ErrorResponse(403, "please provide product id");

    const { _id, deleteResult } = await this._repository.deleteProduct(
      productId
    );

    await new CategoryRepository().removeItem({
      id: _id,
      products: [productId],
    });

    return SusccessResponse(deleteResult);
  }

  // HTTP Calls
  async handleQueueOperation(event: APIGatewayProxyEvent) {
    const input = plainToClass(ServiceInput, event.body!);
    const error = await AppValidationError(input);
    if (error) return ErrorResponse(404, error);

    const { _id, name, price, images } = await this._repository.getProductById(
      input.productId
    );

    // Get product from product repository
    return SusccessResponse({
      product_id: _id,
      name,
      price,
      images,
    });
  }
}
