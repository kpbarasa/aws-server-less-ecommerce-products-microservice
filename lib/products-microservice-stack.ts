import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { ApiGatewayStack } from "./api-gateway-stack";
import { S3BucketStack } from "./s3bucket-stack";
import { ServiceStack } from "./service-stack";

export class ProductsMicroserviceStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // CREATE BUCKET
    const { bucket } = new S3BucketStack(this, "product-images")

    //CREATE SERVICE STACK
    const { productService, categoryService, couponsService, imageService, queueService } =
      new ServiceStack(this, "ProductService", {
        bucket: bucket.bucketName,
      });

    // ASIGN BUCKET PERMISION
    bucket.grantReadWrite(imageService);
    
    new ApiGatewayStack(this, "ProductApiGayeway", {
      productService,
      categoryService,
      couponsService,
      imageService,
      queueService,
    });

  }
}
