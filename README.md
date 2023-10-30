# CDK TypeScript project: aws-server-less-ecommerce-products-microservice
* node js
* Docker
* AWS serverles

## Useful commands

- `npm run build`
- `npm run watch` watch for changes and compile
- `npm run test` perform the jest unit tests
- `cdk deploy` deploy this stack to your default AWS account/region
- `cdk diff` compare deployed stack with current state
- `cdk synth` emits the synthesized CloudFormation template
- `deploy` cdk deploy
- `desroy` cdk desroy
- `aws` aws configure
- `dev` cdk synth && sam local start-api -t cdk.out/TransactionsMicroserviceStack.template.json

## AWS Services

- `API Gateway`
- `CDK`
- `SNS`
- `SQS`
- `Dynamo DB`
- `S3 bucket`

### ENV

- SNS_TOPIC=order_consume-Topic
- SNS_TOPIC_ARN=customer-topic

### Stacks

#### API Gateway
- `Product Service Stack:` Main stack 
   - `productService`
      - API Endpoints: 
         `product`         Provide functionalities for managing products, including creating, updating, deletin retrieving product information.
         `category `       Manage product categories or hierarchies to help organize and classify products
         `coupons `        Create and configure various types of coupons or discounts.
         `uploader `       ImageService
         `products-queue ` Trigger events or tasks in an AWS Simple Queue Service (SQS) or similar service.
  

- `S3 Bucket Stack`  S3 Bucket Stack
        This property enables the backend to retrieve a list of orders based on various parameters such as order status, customer ID, date, and more.
        It is essential for store administrators and customers to view and manage their orders.


### Utilities

- `Database client (sql)` Dynamo DB
