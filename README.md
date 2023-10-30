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
      - API Endpoints: "".
      - HTTP Integration: 
      - Request and Response Mapping.
      - Security.

   - `categoryService`
      - API Endpoints: "".
      - HTTP Integration: 
      - Request and Response Mapping.
      - Security.

   - `couponsService`    
      - API Endpoints: "".
      - HTTP Integration: 
      - Request and Response Mapping.
      - Security.

   - `imageService`
      - API Endpoints: "".
      - HTTP Integration: 
      - Request and Response Mapping.
      - Security.

   - `queueService`
      - API Endpoints: "Trigger events or tasks in an AWS Simple Queue Service (SQS) or similar service".
      - HTTP Integration: 
      - Request and Response Mapping.
      - Security.

- `S3 Bucket Stack`  S3 Bucket Stack
        This property enables the backend to retrieve a list of orders based on various parameters such as order status, customer ID, date, and more.
        It is essential for store administrators and customers to view and manage their orders.

- `API Gateway stack` API Gateway
    - `productService`
        Product Management: This service should provide functionalities for managing products, including creating, updating, deletin and retrieving product information.
        Inventory Management: It should keep track of product stock levels and handle inventory updates as products are bought and restocked. 
        Pricing and Discount: The service should handle pricing information for products, as well as apply discounts and promotions if necessary.
        Product Search: It should support product search and filtering, allowing users to find products easily.
        Product Analytics: This service can provide data on product performance, such as sales, views, and customer reviews.

    - `categoryService`
        Category Management: This service should manage product categories or hierarchies to help organize and classify products.
        Category Navigation: It should enable users to navigate and filter products by categories, making it easier to find what they are looking for.
        Category Analytics: This service can provide insights into category popularity and product distribution within categories.

    - `couponsService`
        Coupon Creation: This service should allow administrators to create and configure various types of coupons or discounts.
        Coupon Validation: It should validate coupons during the checkout process to apply discounts accurately.
        Coupon Expiry: Manage coupon expiry dates and enforce their usage within the specified timeframe.
        Coupon Usage Tracking: Keep track of how often coupons are used, providing insights for marketing and promotion strategies.

    - `imageService`
        Image Storage: This service should handle image storage and retrieval for product images and other visual assets.
        Image Processing: It can provide functionalities for resizing, cropping, and optimizing images for efficient display on the e-commerce platform.
        Image Metadata: Store metadata about images, such as captions, alt text, and tags, to enhance accessibility and searchability.

    - `queueService`
        Background Processing: This service is used for offloading time-consuming or asynchronous tasks, such as order processing, email notifications, and data updates.
        Task Queue: Manage a queue of tasks, ensuring they are executed in the desired order and with scalability in mind.
        Error Handling: Handle errors and retries for failed tasks to maintain system reliability.
        Monitoring and Metrics: Collect data on queue performance, task execution times, and system resource usage. 

### Utilities

- `Database client (sql)` Dynamo DB
