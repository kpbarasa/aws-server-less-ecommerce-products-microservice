export class productTagsInput {
    id: number;	//	Unique identifier for the resource.READ-ONLY
    name: string;	//	Tag name.MANDATORY
    slug: string;	//	An alphanumeric identifier for the resource unique to its type.
    description: string;	//	HTML description of the resource.
    count: number;	//	Number of published products for the resource.READ-ONLY
}
