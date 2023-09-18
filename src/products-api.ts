import { APIGatewayEvent, APIGatewayProxyResult, Context } from "aws-lambda";
import { ErrorResponse } from "./utility/response";
import { ProductService } from "./service/product-service";
import { ProductRepository } from "./repisitory/product-repository";
import "./utility"
const service = new ProductService(new ProductRepository());

export const handler = async (
  event: APIGatewayEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
  const isRoot = event.pathParameters === null;

  switch (event.httpMethod.toLowerCase()) {
    case "post":
      if (isRoot) {
        // Call Create Product 
        return service.createProduct(event);
      }

      break;

    case "get":
      if(!isRoot) return  service.getProduct(event);
      else  return  service.getProducts(event);

    case "delete":
      if (!isRoot) {
        // Call Delete Product Service
        return service.deleteProduct(event);
      }

      break;

    case "put":
      if (!isRoot) {
        // Call Edit Product Service
        return service.editProduct(event);
      }

      break;

  }

  return ErrorResponse(404, "API ERROR: request method not allowed !");
};