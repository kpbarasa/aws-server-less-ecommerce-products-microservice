import { ProductsInput } from "../dto/products/product-inputs";
import { ProductDoc, products } from "../models";


export class ProductRepository {
    constructor() { };

    async createProduct({
        name,
        slug,
        permalink,
        date_created,
        date_created_gmt,
        date_modified,
        date_modified_gmt,
        type,
        status,
        featured,
        catalog_visibility,
        description,
        short_description,
        sku,
        price,
        regular_price,
        sale_price,
        date_on_sale_from,
        date_on_sale_from_gmt,
        date_on_sale_to,
        date_on_sale_to_gmt,
        price_html,
        on_sale,
        purchasable,
        total_sales,
        virtual,
        downloadable,
        downloads,
        download_limit,
        download_expiry,
        external_url,
        button_text,
        tax_status,
        tax_class,
        manage_stock,
        stock_quantity,
        stock_status,
        backorders,
        backorders_allowed,
        backordered,
        sold_individually,
        weight,
        dimensions,
        shipping_required,
        shipping_taxable,
        shipping_class,
        shipping_class_id,
        reviews_allowed,
        average_rating,
        rating_count,
        related_ids,
        upsell_ids,
        cross_sell_ids,
        parent_id,
        purchase_note,
        categories,
        tags,
        images,
        attributes,
        default_attributes,
        variations,
        grouped_products,
        menu_order,
        meta_data
    }: ProductsInput) : Promise<ProductDoc> {
        return products.create({
            name,
            slug,
            permalink,
            date_created,
            date_created_gmt,
            date_modified,
            date_modified_gmt,
            type,
            status,
            featured,
            catalog_visibility,
            description,
            short_description,
            sku,
            price,
            regular_price,
            sale_price,
            date_on_sale_from,
            date_on_sale_from_gmt,
            date_on_sale_to,
            date_on_sale_to_gmt,
            price_html,
            on_sale,
            purchasable,
            total_sales,
            virtual,
            downloadable,
            downloads,
            download_limit,
            download_expiry,
            external_url,
            button_text,
            tax_status,
            tax_class,
            manage_stock,
            stock_quantity,
            stock_status,
            backorders,
            backorders_allowed,
            backordered,
            sold_individually,
            weight,
            dimensions,
            shipping_required,
            shipping_taxable,
            shipping_class,
            shipping_class_id,
            reviews_allowed,
            average_rating,
            rating_count,
            related_ids,
            upsell_ids,
            cross_sell_ids,
            parent_id,
            purchase_note,
            categories,
            tags,
            images,
            attributes,
            default_attributes,
            variations,
            grouped_products,
            menu_order,
            meta_data
        })
    };

    async updateProduct({
        id,
        name,
        slug,
        permalink,
        date_modified,
        date_modified_gmt,
        type,
        status,
        featured,
        catalog_visibility,
        description,
        short_description,
        sku,
        price,
        regular_price,
        sale_price,
        date_on_sale_from,
        date_on_sale_from_gmt,
        date_on_sale_to,
        date_on_sale_to_gmt,
        price_html,
        on_sale,
        purchasable,
        total_sales,
        virtual,
        downloadable,
        downloads,
        download_limit,
        download_expiry,
        external_url,
        button_text,
        tax_status,
        tax_class,
        manage_stock,
        stock_quantity,
        stock_status,
        backorders,
        backorders_allowed,
        backordered,
        sold_individually,
        weight,
        dimensions,
        shipping_required,
        shipping_taxable,
        shipping_class,
        shipping_class_id,
        reviews_allowed,
        average_rating,
        rating_count,
        related_ids,
        upsell_ids,
        cross_sell_ids,
        parent_id,
        purchase_note,
        categories,
        tags,
        images,
        attributes,
        default_attributes,
        variations,
        grouped_products,
        menu_order,
        meta_data
    }: ProductsInput) {
        let existingProduct = (await products.findById(id)) as ProductDoc;
        existingProduct.name = name,
        existingProduct.slug = slug,
        existingProduct.permalink = permalink,
        existingProduct.date_modified = date_modified,
        existingProduct.date_modified_gmt = date_modified_gmt,
        existingProduct.type = type,
        existingProduct.status  = status,
        existingProduct.featured = featured,
        existingProduct.catalog_visibility = catalog_visibility,
        existingProduct.description = description,
        existingProduct.short_description = short_description,
        existingProduct.sku = sku,
        existingProduct.price = price,
        existingProduct.regular_price = regular_price,
        existingProduct.sale_price = sale_price,
        existingProduct.date_on_sale_from = date_on_sale_from,
        existingProduct.date_on_sale_from_gmt = date_on_sale_from_gmt,
        existingProduct.date_on_sale_to = date_on_sale_to,
        existingProduct.date_on_sale_to_gmt = date_on_sale_to_gmt,
        existingProduct.price_html = price_html,
        existingProduct.on_sale = on_sale,
        existingProduct.purchasable = purchasable,
        existingProduct.total_sales = total_sales,
        existingProduct.virtual = virtual,
        existingProduct.downloadable = downloadable,
        existingProduct.downloads = downloads,
        existingProduct.download_limit = download_limit,
        existingProduct.download_expiry = download_expiry,
        existingProduct.external_url = external_url,
        existingProduct.button_text = button_text,
        existingProduct.tax_status = tax_status,
        existingProduct.tax_class = tax_class,
        existingProduct.manage_stock = manage_stock,
        existingProduct.stock_quantity = stock_quantity,
        existingProduct.stock_status = stock_status,
        existingProduct.backorders = backorders,
        existingProduct.backorders_allowed = backorders_allowed,
        existingProduct.backordered = backordered,
        existingProduct.sold_individually = sold_individually,
        existingProduct.weight = weight,
        existingProduct.dimensions = dimensions,
        existingProduct.shipping_required = shipping_required,
        existingProduct.shipping_taxable = shipping_taxable,
        existingProduct.shipping_class = shipping_class,
        existingProduct.shipping_class_id = shipping_class_id,
        existingProduct.reviews_allowed = reviews_allowed,
        existingProduct.average_rating = average_rating,
        existingProduct. rating_count = rating_count,
        existingProduct.related_ids = related_ids,
        existingProduct.upsell_ids = upsell_ids,
        existingProduct.cross_sell_ids = cross_sell_ids,
        existingProduct.parent_id = parent_id,
        existingProduct.purchase_note = purchase_note,
        existingProduct.categories = categories,
        // existingProduct.tags = tags,
        existingProduct.images = images,
        existingProduct.attributes = attributes,
        existingProduct.default_attributes = default_attributes,
        existingProduct.variations = variations,
        existingProduct.grouped_products = grouped_products,
        existingProduct.menu_order = menu_order ,
        existingProduct.meta_data = meta_data
        return existingProduct.save();

    };

    async deleteProduct(id: string)  {
        const { _id } = (await products.findById(id)) as ProductDoc;
        const deleteResult = await products.deleteOne({ _id: id });
        return { _id, deleteResult };
      };

    async getProductById(id: string) { 
        return (await products.findById(id)) as ProductDoc
    };

    async listAllProducts(offset = 0, pages?: number) {
        return products.find().skip(offset).limit(pages ? pages : 500)
    };

    async listProductByCat(id: string) { 
        const data = await products.find();
        return data.filter(res => res.categories.includes(id));
    };

    async listFeaturedProducts() { 
        const data = await products.find({featured:true});
        return data;
    };

    async listSalesProducts() { 
        const data = await products.find({on_sale:true});
        return data;
    };

    async listVirtualProducts() { 
        const data = await products.find({virtual:true});
        return data;
    };

    async listDownloadableProducts() { 
        const data = await products.find({downloadable:true});
        return data;
    }

    async listProductsInStoc() { 
        const data = await products.find({stock_status:"outofstock"});
        return data;
    }

    async listProductsOutStoc() { 
        const data = await products.find({stock_status:"outofstock"});
        return data;
    }

    async listBackOrder_Products() { 
        const data = await products.find({backorders_allowed:true});
        return data;
    }


}