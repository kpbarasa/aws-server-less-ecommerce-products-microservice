# CDK TypeScript project: aws-server-less-ecommerce-products-microservice
* node js
* Docker
* AWS CDK

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
- `SQS`
- `Dynamo DB`
- `S3 bucket`

### Stacks

#### 1 Product Service Stack: Main Stack
##### 1.1  productService
- API Endpoints: 
    - `product`         Provide functionalities for managing products, including creating, updating, deletin retrieving product information.
        - Create
            - url: `product/`
            - method: `POST`
        - Update
            - url: `product/`
            - method: `PUT`
        - Find
            - url: `product/`
            - url: `product/id`
            - method: `GET`
        - `DELETE`  
            - url: `product/id`
            - method: `DELETE`

    - `category`       Manage product categories or hierarchies to help organize and classify products
        - Create
            - url: `category`
            - method: `POST`
        - Update
            - url: `category`
            - method: `PUT`
        - Find
            - url: `category`
            - url: `category/id`
            - method: `GET`
        - `DELETE`  
            - url: ``DELETE`/id`
            - method: `DELETE`

    - `coupons`        Create and configure various types of coupons or discounts.
        - Create
            - url: `coupons/`
            - method: `POST`
        - Update
            - url: `coupons/id`
            - method: `PUT`
        - Find
            - url: `coupons/id`
            - url: `coupons/id`
            - method: `GET`
        - `DELETE`  
            - url: `coupons/id`
            - method: `DELETE`

    - `uploader`       ImageService
        - Create
            - url: `product/img`
            - method: `POST`
        - Find
            - url: `aws signed url`
            - method: `GET`

    - `products-queue` Trigger events or tasks in an AWS Simple Queue Service (SQS) or similar service.
        - url: ``
        - method: `POST`
  

##### 2 S3 Bucket Stack  
- Grab the fileName from queryString
- Give unique name of that file
- Create S3Params
- Get Signed URL
- Give to back to client for upload image

##### 3 service stack
- Products Service:
    - `Product Management`: This service should provide functionalities for managing products, including creating, updating, deleting, and retrieving product information.
    -  `Inventory Management`: It should keep track of product stock levels and handle inventory updates as products are bought and restocked.
    - `Pricing and Discount`: The service should handle pricing information for products, as well as apply discounts and promotions if necessary.
    - `Product Search`: It should support product search and filtering, allowing users to find products easily.
    - `Product Analytics`: This service can provide data on product performance, such as sales, views, and customer reviews.

- Category Service:
    - `Category Management`: This service should manage product categories or hierarchies to help organize and classify products.
    - `Category Navigation`: It should enable users to navigate and filter products by categories, making it easier to find what they are looking for.
    - `Category Analytics`: This service can provide insights into category popularity and product distribution within categories.

- Coupons Service:
    - `Coupon Creation`: This service should allow administrators to create and configure various types of coupons or discounts.
    - `Coupon Validation`: It should validate coupons during the checkout process to apply discounts accurately.
    - `Coupon Expiry`: Manage coupon expiry dates and enforce their usage within the specified timeframe.
    - `Coupon Usage Tracking`: Keep track of how often coupons are used, providing insights for marketing and promotion strategies

- Image Service:
    - grab the fileName from queryString
    - give unique name of that file
    - create S3Params
    - `GET` Signed URL
    - give to back to client for upload image

- Queue Service: `GET` product from product repository


### SRC(Main files)
####   -API
- products,
- Category,
- coupons,
- message-queue,
- image-api

####   -Services
- products,
- Category,
- coupons,

####   -Repositories
- products,
- Category,
- coupons,

####   -Models
- products,
- Category,
- coupons,

####   -Utilities
- Database client (sql) Dynamo DB


