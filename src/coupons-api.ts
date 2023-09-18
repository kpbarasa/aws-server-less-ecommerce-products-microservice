import { APIGatewayEvent, APIGatewayProxyResult, Context } from "aws-lambda";
import { couponRepository } from "./repisitory/coupon-repository";
import { CouponsService } from "./service/coupons-service";
import { ErrorResponse } from "./utility/response";
import "./utility"

const service = new CouponsService(new couponRepository());

export const handler = async (
  event: APIGatewayEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
  const isRoot = event.pathParameters === null;

  switch (event.httpMethod.toLowerCase()) {
    case "post":
      if (isRoot) {
        // Call Create Product 
        return service.createCoupon(event);
      }

      break;

    case "get":
      if(!isRoot) {return  service.getCoupons(event);}
      else  {return  service.getCoupons(event);}

    break;

    case "delete":
      if (!isRoot) {
        // Call Delete Product Service
        return service.delCoupon(event);
      }

      break;

    case "put":
      if (!isRoot) {
        // Call Edit Product Service
        return service.updateCoupon(event);
      }

      break;

  }

  return ErrorResponse(404, "API ERROR: request method not allowed !");
};