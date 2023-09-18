import { IsNumber, Length } from "class-validator";
import { MetaData_Input } from "../metadata-input.ts";
import { productCategoriesInput } from "./product-categories-inputs.js";
import { productTagsInput } from "./product-tags-inputs.js";

export class ProductsInput {

    id: string;	//integer	Unique identifier for the resource.READ-ONLY
    @Length(3, 128)
    name: string;	//Product name.
    slug: string;	//Product slug.
    permalink: string;	//Product URL.READ-ONLY
    date_created: string;	//date-timeThe date the product was created, in the site's timezone.READ-ONLY
    date_created_gmt: string;	//date-timeThe date the product was created, as GMT.READ-ONLY
    date_modified: string;	//date-timeThe date the product was last modified, in the site's timezone.READ-ONLY
    date_modified_gmt: string;	//date-timeThe date the product was last modified, as GMT.READ-ONLY
    type: string;	//Product type. Options: simple, grouped, external and variable. Default is simple.
    status: string;	//Product status (post status). Options: draft, pending, private and publish. Default is publish.
    featured: boolean;	//Featured product. Default is false.
    catalog_visibility: string;	//Catalog visibility. Options: visible, catalog, search and hidden. Default is visible.
    @Length(3, 300)
    description: string;	//Product description.
    short_description: string;	//Product short description.
    sku: string;	//Unique identifier.
    @IsNumber()
    price: string;	//Current product price.READ-ONLY
    regular_price: string;	//Product regular price.
    sale_price: string;	//Product sale price.
    date_on_sale_from: string;	//date-timeStart date of sale price, in the site's timezone.
    date_on_sale_from_gmt: string;	//date-timeStart date of sale price, as GMT.
    date_on_sale_to: string;	//date-timeEnd date of sale price, in the site's timezone.
    date_on_sale_to_gmt: string;	//date-timeEnd date of sale price, as GMT.
    price_html: string;	//Price formatted in HTML.READ-ONLY
    on_sale: boolean;	//Shows if the product is on sale.READ-ONLY
    purchasable: boolean;	//Shows if the product can be bought.READ-ONLY
    total_sales: number;	//Amount of sales.READ-ONLY
    virtual: boolean;	//If the product is virtual. Default is false.
    downloadable: boolean;	//If the product is downloadable. Default is false.
    downloads: ProductsDownloadInput[];	//	List of downloadable files. See Product - Downloads properties
    download_limit: number;	//Number of times downloadable files can be downloaded after purchase. Default is -1.
    download_expiry: number;	//Number of days until access to downloadable files expires. Default is -1.
    external_url: string;	//Product external URL. Only for external products.
    button_text: string;	//Product external button text. Only for external products.
    tax_status: string;	//Tax status. Options: taxable, shipping and none. Default is taxable.
    tax_class: string;	//Tax class.
    manage_stock: boolean;	//Stock management at product level. Default is false.
    stock_quantity: number;	//Stock quantity.
    stock_status: string;	//Controls the stock status of the product. Options: instock, outofstock, onbackorder. Default is instock.
    backorders: string;	//If managing stock, this controls if backorders are allowed. Options: no, notify and yes. Default is no.
    backorders_allowed: boolean;	//Shows if backorders are allowed.READ-ONLY
    backordered: boolean;	//Shows if the product is on backordered.READ-ONLY
    sold_individually: boolean;	//Allow one item to be bought in a single order. Default is false.
    weight: string;	//Product weight.
    dimensions: ProductsDimensionsInput[];	//	Product dimensions. See Product - Dimensions properties
    shipping_required: boolean;	//Shows if the product need to be shipped.READ-ONLY
    shipping_taxable: boolean;	//Shows whether or not the product shipping is taxable.READ-ONLY
    shipping_class: string;	//Shipping class slug.
    shipping_class_id: number;	//Shipping class ID.READ-ONLY
    reviews_allowed: boolean;	//Allow reviews. Default is true.
    average_rating: string;	//Reviews average rating.READ-ONLY
    rating_count: number;	//Amount of reviews that the product have.READ-ONLY
    related_ids: string[];	//	List of related products IDs.READ-ONLY
    upsell_ids: string[];	//	List of up-sell products IDs.
    cross_sell_ids: string[];	//	List of cross-sell products IDs.
    parent_id: number;	//Product parent ID.
    purchase_note: string;	//Optional note to send the customer after purchase.
    categories: productCategoriesInput[];	//	List of categories. See Product - Categories properties
    tags: productTagsInput[];	//	List of tags. See Product - Tags properties
    images: ProductsImagesInput[];	//	List of images. See Product - Images properties
    attributes: string[];	//	List of attributes. See Product - Attributes properties
    default_attributes: ProductDefaulrtsAttributes_Input[];	//	Defaults variation attributes. See Product - Default attributes properties
    variations: string[];	//	List of variations IDs.READ-ONLY
    grouped_products: string[];	//	List of grouped products ID.
    menu_order: number;	//Menu order, used to custom sort products.
    meta_data: MetaData_Input[];	//	Meta data. See Product - Meta data properties
}

export class ProductsDimensionsInput {
    length: string;	//	Product length.
    width: string;	//	Product width.
    height: string;	//	Product height.
}


export class ProductsDownloadInput {
    id: string;	//	File ID.
    name: string;	//	File name.
    file: string;	//	File URL.
}


export class ProductsAttributesInput {
    id: number;	//	Attribute ID.
    name: string;	//	Attribute name.
    position: number;	//	Attribute position.
    visible: boolean;	//	Define if the attribute is visible on the "Additional information" tab in the product's page. Default is false.
    variation: boolean;	//	Define if the attribute can be used as variation.Default is false.
    options: string[];	//	List of available term names of the attribute.
}


export class ProductDefaulrtsAttributes_Input {
    id: number;	//	Attribute ID.
    name: string;	//	Attribute name.
    options: string[];	//	List of available term names of the attribute.
}


export class ProductsImagesInput {
    id: number;	//	Image ID.
    date_created: string;	//date-time	The date the image was created, in the site's timezone.READ-ONLY
    date_created_gmt: string;	//date-time	The date the image was created, as GMT.READ-ONLY
    date_modified: string;	//date-time	The date the image was last modified, in the site's timezone.READ-ONLY
    date_modified_gmt: string;	//date-time	The date the image was last modified, as GMT.READ-ONLY
    src: string;	//	Image URL.
    name: string;	//	Image name.
    alt: string;	//	Image alternative text.
} 
