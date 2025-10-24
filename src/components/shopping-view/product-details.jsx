import { StarIcon, ShoppingCart, X } from "lucide-react";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogClose } from "../ui/dialog";
import { Separator } from "../ui/separator";
import { Input } from "../ui/input";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, fetchCartItems } from "@/store/shop/cart-slice";
import { useToast } from "../ui/use-toast";
import { setProductDetails } from "@/store/shop/products-slice";
import { Label } from "../ui/label";
import StarRatingComponent from "../common/star-rating";
import { useEffect, useState } from "react";
import { addReview, getReviews } from "@/store/shop/review-slice";

// Custom CSS for product details dialog
const dialogStyles = `
  .aesthetic-dialog {
    --light-bg: #F1F3FF;
    --accent: #B38A69;
    --dark-accent: #312E81;
    --text: #333333;
    --white: #FFFFFF;
  }

  .dialog-content {
    background: linear-gradient(135deg, var(--white) 0%, var(--light-bg) 100%);
    border: 1px solid rgba(49, 46, 129, 0.1);
  }

  .product-image {
    border-radius: 16px;
    box-shadow: 0 8px 32px rgba(49, 46, 129, 0.1);
  }

  .price-section {
    background: linear-gradient(135deg, var(--white), rgba(241, 243, 255, 0.5));
    border-radius: 12px;
    padding: 16px;
  }

  .add-to-cart-dialog {
    background: linear-gradient(135deg, var(--accent), var(--dark-accent));
    transition: all 0.3s ease;
  }

  .add-to-cart-dialog:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(49, 46, 129, 0.3);
  }

  .review-item {
    background: var(--white);
    border-radius: 12px;
    border: 1px solid rgba(49, 46, 129, 0.1);
    transition: all 0.3s ease;
  }

  .review-item:hover {
    transform: translateX(4px);
    border-color: rgba(179, 138, 105, 0.3);
  }

  .submit-review-btn {
    background: linear-gradient(135deg, var(--accent), var(--dark-accent));
  }

  .close-button {
    background: rgba(49, 46, 129, 0.1);
    transition: all 0.3s ease;
  }

  .close-button:hover {
    background: rgba(49, 46, 129, 0.2);
  }
`;

function ProductDetailsDialog({ open, setOpen, productDetails }) {
  const [reviewMsg, setReviewMsg] = useState("");
  const [rating, setRating] = useState(0);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.shopCart);
  const { reviews } = useSelector((state) => state.shopReview);
  const { toast } = useToast();

  function handleRatingChange(getRating) {
    setRating(getRating);
  }

  function handleAddToCart(getCurrentProductId, getTotalStock) {
    let getCartItems = cartItems.items || [];

    if (getCartItems.length) {
      const indexOfCurrentItem = getCartItems.findIndex(
        (item) => item.productId === getCurrentProductId
      );
      if (indexOfCurrentItem > -1) {
        const getQuantity = getCartItems[indexOfCurrentItem].quantity;
        if (getQuantity + 1 > getTotalStock) {
          toast({
            title: `Only ${getQuantity} quantity can be added for this item`,
            variant: "destructive",
          });
          return;
        }
      }
    }
    dispatch(
      addToCart({
        userId: user?.id,
        productId: getCurrentProductId,
        quantity: 1,
      })
    ).then((data) => {
      if (data?.payload?.success) {
        dispatch(fetchCartItems(user?.id));
        toast({
          title: "Product added to cart!",
          description: "Item has been added to your shopping cart.",
        });
      }
    });
  }

  function handleDialogClose() {
    setOpen(false);
    dispatch(setProductDetails());
    setRating(0);
    setReviewMsg("");
  }

  function handleAddReview() {
    dispatch(
      addReview({
        productId: productDetails?._id,
        userId: user?.id,
        userName: user?.userName,
        reviewMessage: reviewMsg,
        reviewValue: rating,
      })
    ).then((data) => {
      if (data.payload.success) {
        setRating(0);
        setReviewMsg("");
        dispatch(getReviews(productDetails?._id));
        toast({
          title: "Review added successfully!",
          description: "Thank you for your feedback.",
        });
      }
    });
  }

  useEffect(() => {
    if (productDetails !== null) dispatch(getReviews(productDetails?._id));
  }, [productDetails, dispatch]);

  const averageReview =
    reviews && reviews.length > 0
      ? reviews.reduce((sum, reviewItem) => sum + reviewItem.reviewValue, 0) /
        reviews.length
      : 0;

  return (
    <>
      <style>{dialogStyles}</style>
      <Dialog open={open} onOpenChange={handleDialogClose}>
        <DialogContent className="aesthetic-dialog scale-[0.8] dialog-content grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 max-w-[95vw] lg:max-w-6xl rounded-2xl">
          {/* Close Button */}
      

          {/* Product Image */}
          <div className="relative">
            <img
              src={productDetails?.image}
              alt={productDetails?.title}
              className="product-image w-full h-96 lg:h-full object-cover"
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col h-full">
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-[#312E81] mb-4">
                {productDetails?.title}
              </h1>
              
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                {productDetails?.description}
              </p>

              {/* Price and Rating Section */}
              <div className="price-section mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    {productDetails?.salePrice > 0 ? (
                      <>
                        <span className="text-3xl font-bold text-[#312E81]">
                          ₹{productDetails?.salePrice}
                        </span>
                        <span className="text-xl text-gray-500 line-through">
                          ₹{productDetails?.price}
                        </span>
                      </>
                    ) : (
                      <span className="text-3xl font-bold text-[#312E81]">
                        ₹{productDetails?.price}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <StarRatingComponent rating={averageReview} />
                    </div>
                    <span className="text-gray-600 font-medium">
                      ({averageReview.toFixed(1)})
                    </span>
                  </div>
                </div>

                {/* Stock Status */}
                <div className="text-sm text-gray-600">
                  {productDetails?.totalStock === 0 ? (
                    <span className="text-red-500 font-medium">Out of Stock</span>
                  ) : productDetails?.totalStock < 10 ? (
                    <span className="text-orange-500 font-medium">
                      Only {productDetails?.totalStock} items left
                    </span>
                  ) : (
                    <span className="text-green-500 font-medium">In Stock</span>
                  )}
                </div>
              </div>

              {/* Add to Cart Button */}
              <div className="mb-6">
                {productDetails?.totalStock === 0 ? (
                  <Button className="w-full h-12 rounded-lg bg-gray-400 cursor-not-allowed">
                    Out of Stock
                  </Button>
                ) : (
                  <Button
                    className="w-full h-12 rounded-lg add-to-cart-dialog text-white font-semibold"
                    onClick={() =>
                      handleAddToCart(
                        productDetails?._id,
                        productDetails?.totalStock
                      )
                    }
                  >
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Add to Cart
                  </Button>
                )}
              </div>
            </div>

            <Separator className="my-6" />

            {/* Reviews Section */}
            <div className="flex-1 overflow-hidden">
              <h2 className="text-xl font-bold text-[#312E81] mb-4">Customer Reviews</h2>
              
              <div className="max-h-64 overflow-y-auto pr-2 space-y-4">
                {reviews && reviews.length > 0 ? (
                  reviews.map((reviewItem) => (
                    <div key={reviewItem._id} className="review-item p-4">
                      <div className="flex gap-3">
                        <Avatar className="w-10 h-10 border border-[#B38A69]">
                          <AvatarFallback className="bg-[#312E81] text-white">
                            {reviewItem?.userName?.[0]?.toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold text-[#312E81]">
                              {reviewItem?.userName}
                            </h3>
                            <div className="flex items-center gap-1">
                              <StarRatingComponent rating={reviewItem?.reviewValue} />
                            </div>
                          </div>
                          <p className="text-gray-600 text-sm">
                            {reviewItem.reviewMessage}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    No reviews yet. Be the first to review!
                  </div>
                )}
              </div>

              {/* Add Review Section */}
              {user && (
                <div className="mt-6 p-4 bg-white rounded-xl border border-gray-200">
                  <Label className="text-[#312E81] font-semibold mb-3 block">
                    Write a Review
                  </Label>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm text-gray-600">Your Rating:</span>
                    <StarRatingComponent
                      rating={rating}
                      handleRatingChange={handleRatingChange}
                    />
                  </div>
                  <Input
                    name="reviewMsg"
                    value={reviewMsg}
                    onChange={(event) => setReviewMsg(event.target.value)}
                    placeholder="Share your experience with this product..."
                    className="mb-3 rounded-lg"
                  />
                  <Button
                    onClick={handleAddReview}
                    disabled={reviewMsg.trim() === "" || rating === 0}
                    className="w-full submit-review-btn text-white rounded-lg"
                  >
                    Submit Review
                  </Button>
                </div>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default ProductDetailsDialog;