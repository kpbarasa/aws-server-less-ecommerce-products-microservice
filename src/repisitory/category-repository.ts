import { AddItemInput, CategoryInput } from "../dto/category-input";
import { productCategoriesInput } from "../dto/products/product-categories-inputs";
import { categories, CategoryDoc } from "../models";

export class CategoryRepository {


    async createCategory({ 
        name,
        nameTranslations,
        parent,
        slug,
        description,
        display,
        image,
        menu_order,
        subCategories,
        products,
        displayOrder,
        count,
    }:productCategoriesInput) {
        
        // Create new category
        const newCategory = await categories.create(
            {name,
            nameTranslations,
            parent,
            slug,
            description,
            display,
            image,
            menu_order,
            subCategories,
            products,
            displayOrder,
            count,
        })

        // PArent ID exists
        // Update parent category with the new sub category id
        if (parent) {
            const parentCategory = (await categories.findById(parent)) as CategoryDoc;
            parentCategory.subCategories = [
                ...parentCategory.subCategories,
                newCategory,
            ];
            await parentCategory.save();

        }

        return newCategory;

    };

    async getAllCategories(offset = 0, perPage?: number) {
        return categories.find()
            .skip(offset)
            .limit(perPage ? perPage : 100);
    };

    async updateCategory({  
        id,      
        name,
        nameTranslations,
        parent,
        slug,
        description,
        display,
        image,
        menu_order,
        subCategories,
        products,
        displayOrder,
        count,
     }: productCategoriesInput) {
        let category = (await categories.findById(id)) as CategoryDoc;       
        category.name = name,
        category.nameTranslations = nameTranslations,
        category.parent = parent,
        category.slug =slug,
        category.description=description,
        category.display=display,
        category.image = image,
        category.menu_order = menu_order,
        category.displayOrder = displayOrder,
        category.count = count
        category.save();

        // check category products 
        if(!category.products.includes(products[0])){
            this.addItem({id, products});
        }else{
            this.removeItem({id, products});
        }

        return category;
        
    };

    async deleteCategory(id: string) {
        return categories.deleteOne({ _id: id });
    };

    async getTopCategories(offset = 0, perPage?: number) {
        return categories.find({ products: { $slice: 10 } } )
    };

    async getCategoryById(id: string, offset = 0, perPage?: number) {
        return categories.findById(id)
    };

    async addItem({ id, products }: AddItemInput) {
        let category = (await categories.findById(id)) as CategoryDoc;
        category.products = [...category.products, ...products];
        return category.save();
    }

    async removeItem({ id, products }: AddItemInput) {
        let category = (await categories.findById(id)) as CategoryDoc;
        const excludeProducts = category.products.filter(
            (item) => !products.includes(item)
        );
        category.products = excludeProducts;
        return category.save();
    }

}