import { IsString } from "class-validator";

export class productCategoriesInput {
    // Product category properties
    id: string;	//	Unique identifier for the resource.READ-
    @IsString()
    name: string;	//	Category name.MANDATORY
    nameTranslations: string;	//	Number of published products for the resource.READ-ONLY
    @IsString()
    slug: string;	//	An alphanumeric identifier for the resource unique to its type.
    parent: string;	//	The ID for the parent of the resource.
    description: string;	//	HTML description of the resource.
    display: string;	//	Category archive display type. Options: default, products, subcategories and both. Default is default.
    image: productCategoriesImages_Input;	//	Image data. See Product category - Image properties
    menu_order: number;	//	Menu order, used to custom sort the resource.
    subCategories: string[];	//	Number of published products for the resource.READ-ONLY
    products: string[];	//	Number of published products for the resource.READ-ONLY
    displayOrder: number;	//	Number of published products for the resource.READ-ONLY
    count: number;	//	Number of published products for the resource.READ-ONLY
}

export class productCategoriesImages_Input {
    // Product category - Image properties
    id: string;	//	Image ID.
    date_created: string;	//date-time	The date the image was created, in the site's timezone.READ-ONLY
    date_created_gmt: string;	//date-time	The date the image was created, as GMTREAD-ONLY
    date_modified: string;	//date-time	The date the image was last modified, in the site's timezone.READ-ONLY
    date_modified_gmt: string;	//date-time	The date the image was last modified, as GMT.READ-ONLY
    src: string;	//	Image URL.
    name: string;	//	Image name.
    alt: string;	//	Image alternative text.
}