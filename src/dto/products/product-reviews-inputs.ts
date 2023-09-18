export class ProductReviews {
    id: number;	//	Unique identifier for the resource.READ-ONLY
    date_created: string;	//	The date the review was created, in the site's timezone.READ-ONLY
    date_created_gmt: string;	//	The date the review was created, as GMT.READ-ONLY
    product_id: number;	//	Unique identifier for the product that the review belongs to.
    status: string;	//	Status of the review. Options: approved, hold, spam, unspam, trash and untrash. Defaults to approved.
    reviewer: string;	//	Reviewer name.
    reviewer_email: string;	//	Reviewer email.
    review: string;	//	The content of the review.
    rating: number;	//	Review rating (0 to 5).
    verified: boolean;	//	Shows if the reviewer bought the product or not.
}