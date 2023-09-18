import { IsNumber, Length } from "class-validator";

export class ProductsAttributesInput {
    id: number;	//	Unique identifier for the resource.READ-ONLY
    name: string;	//	Attribute name.MANDATORY
    slug: string;	//	An alphanumeric identifier for the resource unique to its type.
    type: string;	//	Type of attribute. By default only select is supported.
    order_by: string;	//	Default sort order. Options: menu_order, name, name_num and id. Default is menu_order.
    has_archives: boolean;	//	Enable/Disable attribute archives. Default is false.
}    
