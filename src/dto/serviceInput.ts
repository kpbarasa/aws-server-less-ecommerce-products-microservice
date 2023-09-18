import { Length } from "class-validator";

export class ServiceInput {
    action: string; //Optional // GET PRODUCT // GET CATEGORY

    @Length(12, 24)
    productId: string;
}