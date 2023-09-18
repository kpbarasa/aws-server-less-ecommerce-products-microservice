// Product variations
// The product variations API allows you to create, view, update, and delete individual, or a batch, of product variations.
export class ProductVariation {
    // Product variation properties 
    id	: number;	//	Unique identifier for the resource.READ-ONLY
    date_created	: string;	//date-time	The date the variation was created, in the site's timezone.READ-ONLY
    date_created_gmt	: string;	//date-time	The date the variation was created, as GMT.READ-ONLY
    date_modified	: string;	//date-time	The date the variation was last modified, in the site's timezone.READ-ONLY
    date_modified_gmt	: string;	//date-time	The date the variation was last modified, as GMT.READ-ONLY
    description	: string;	//	Variation description.
    permalink	: string;	//	Variation URL.READ-ONLY
    sku	: string;	//	Unique identifier.
    price	: string;	//	Current variation price.READ-ONLY
    regular_price	: string;	//	Variation regular price.
    sale_price	: string;	//	Variation sale price.
    date_on_sale_from	: string;	//date-time	Start date of sale price, in the site's timezone.
    date_on_sale_from_gmt	: string;	//date-time	Start date of sale price, as GMT.
    date_on_sale_to	: string;	//date-time	End date of sale price, in the site's timezone.
    date_on_sale_to_gmt	: string;	//date-time	End date of sale price, as GMT.
    on_sale	: boolean;	//	Shows if the variation is on sale.READ-ONLY
    status	: string;	//	Variation status. Options: draft, pending, private and publish. Default is publish.
    purchasable	: boolean;	//	Shows if the variation can be bought.READ-ONLY
    virtual	: boolean;	//	If the variation is virtual. Default is false.
    downloadable	: boolean;	//	If the variation is downloadable. Default is false.
    downloads	: string[];	//	List of downloadable files. See Product variation - Downloads properties
    download_limit	: number;	//	Number of times downloadable files can be downloaded after purchase. Default is -1.
    download_expiry	: number;	//	Number of days until access to downloadable files expires. Default is -1.
    tax_status	: string;	//	Tax status. Options: taxable, shipping and none. Default is taxable.
    tax_class	: string;	//	Tax class.
    manage_stock	: boolean;	//	Stock management at variation level. Default is false.
    stock_quantity	: number;	//	Stock quantity.
    stock_status	: string;	//	Controls the stock status of the product. Options: instock, outofstock, onbackorder. Default is instock.
    backorders	: string;	//	If managing stock, this controls if backorders are allowed. Options: no, notify and yes. Default is no.
    backorders_allowed	: boolean;	//	Shows if backorders are allowed.READ-ONLY
    backordered	: boolean;	//	Shows if the variation is on backordered.READ-ONLY
    weight	: string;	//	Variation weight.
    dimensions	: object;	//	Variation dimensions. See Product variation - Dimensions properties
    shipping_class	: string;	//	Shipping class slug.
    shipping_class_id	: string;	//	Shipping class ID.READ-ONLY
    image	: object;	//	Variation image data. See Product variation - Image properties
    attributes	: string[];	//	List of attributes. See Product variation - Attributes properties
    menu_order	: number;	//	Menu order, used to custom sort products.
    meta_data	: string[];	//	Meta data. See Product variation - Meta data properties
}

export class DownloadsProductVariation {
    // Product variation - Downloads properties
    id	: string;	//	File ID.
    name	: string;	//	File name.
    file	: string;	//	File URL.
}

export class ProductVariationDimensions {
    // Product variation - Dimensions properties
    length	: string;	//	Variation length.
    width	: string;	//	Variation width.
    height	: string;	//	Variation height.
}

export class ProductVariationImages_input {
    // Product variation - Image properties
    id	: number;	//	Image ID.
    date_created	: string;	//date-time	The date the image was created, in the site's timezone.READ-ONLY
    date_created_gmt	: string;	//date-time	The date the image was created, as GMT.READ-ONLY
    date_modified	: string;	//date-time	The date the image was last modified, in the site's timezone.READ-ONLY
    date_modified_gmt	: string;	//date-time	The date the image was last modified, as GMT.READ-ONLY
    src	: string;	//	Image URL.
    name	: string;	//	Image name.
    alt	: string;	//	Image alternative text.
}

export class ProductVariationAttributes {
    // Product variation - Attributes properties
    id	: number;	//	Attribute ID.
    name	: string;	//	Attribute name.
    option	: string;	//	Selected attribute term name.
}
