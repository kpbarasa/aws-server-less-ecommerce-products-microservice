import { Duration } from "aws-cdk-lib";
import { Runtime } from "aws-cdk-lib/aws-lambda";
import {
  NodejsFunction,
  NodejsFunctionProps,
} from "aws-cdk-lib/aws-lambda-nodejs";
import { Construct } from "constructs";
import { join } from "path";

interface ServiceProps {
  bucket: string;
}

export class ServiceStack extends Construct {
  public readonly productService: NodejsFunction;
  public readonly categoryService: NodejsFunction;
  public readonly couponsService: NodejsFunction;
  public readonly imageService: NodejsFunction;
  public readonly queueService: NodejsFunction;

  constructor(scope: Construct, id: string, props: ServiceProps) {
    super(scope, id);

    const nodeJsFunctionProps: NodejsFunctionProps = {

      bundling: {
        externalModules: ["aws-sdk"],
      },
      environment: {
        BUCKET_NAME: props.bucket,
      },
      runtime: Runtime.NODEJS_16_X,
      timeout: Duration.seconds(10),
    };

    this.productService = new NodejsFunction(this, "productLambda", {
      entry: join(__dirname, "/../src/products-api.ts"),
      ...nodeJsFunctionProps,
    });

    this.categoryService = new NodejsFunction(this, "categoryLambda", {
      entry: join(__dirname, "/../src/categories-api.ts"),
      ...nodeJsFunctionProps,
    });

    this.couponsService = new NodejsFunction(this, "couponsLambda", {
      entry: join(__dirname, "/../src/coupons-api.ts"),
      ...nodeJsFunctionProps,
    });

    this.imageService = new NodejsFunction(this, "imageUploadLambda", {
      entry: join(__dirname, "/../src/image-api.ts"),
      ...nodeJsFunctionProps,
    });

    this.queueService = new NodejsFunction(this, "msgQueueLambda", {
      entry: join(__dirname, "/../src/message-queue.ts"),
      ...nodeJsFunctionProps,
    });
  }
}