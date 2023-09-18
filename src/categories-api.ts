import { APIGatewayEvent, APIGatewayProxyResult, Context } from "aws-lambda";
import { ErrorResponse } from "./utility/response";

import { CategoryRepository } from "./repisitory/category-repository";
import { CategorieService } from "./service/category-service";
import bodyParser from "@middy/http-json-body-parser";
import middy from "@middy/core";
import "./utility";

const service = new CategorieService(new CategoryRepository());

export const handler =  middy((
  event: APIGatewayEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
  const isRoot = event.pathParameters === null;


  switch (event.httpMethod.toLowerCase()) {
    case "post":
      
      if (isRoot) {
        // Call Create Category 
        return service.createCategory(event);
      }
      break;

    case "get":
      return isRoot ? service.getCategories(event) : service.getCategory(event)

    case "delete":
      if (!isRoot) {
        // Call Delete Category Service
        return service.deleteCategory(event);
      }
      break;

    case "put":
      if (!isRoot) {
        // Call Edit Category Service
        return service.editCategory(event);
      }

      break;

  }

  return service.ResponseWithError(event);

}).use(bodyParser());