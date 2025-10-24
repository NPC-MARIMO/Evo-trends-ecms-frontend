import { Card, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { categoryOptionsMap } from "@/config";
import { Badge } from "../ui/badge";
import { ShoppingCart, Eye } from "lucide-react";

// Custom CSS for product tile
const productTileStyles = `
  .aesthetic-product-tile {
    --light-bg: #F1F3FF;
    --accent: #B38A69;
    --dark-accent: #312E81;
    --text: #333333;
    --white: #FFFFFF;
  }

  .product-card {
    background: var(--white);
    border: 1px solid rgba(49, 46, 129, 0.1);
    transition: all 0.3s ease;
  }

  .product-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 32px rgba(49, 46, 129, 0.12);
    border-color: rgba(179, 138, 105, 0.3);
  }

  .product-image-container {
    position: relative;
    overflow: hidden;
  }

  .product-image {
    transition: transform 0.3s ease;
  }

  .product-card:hover .product-image {
    transform: scale(1.05);
  }

  .view-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(49, 46, 129, 0.8), rgba(179, 138, 105, 0.8));
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .product-card:hover .view-overlay {
    opacity: 1;
  }

  .stock-badge {
    background: linear-gradient(135deg, #EF4444, #DC2626);
    color: white;
    font-weight: 600;
  }

  .sale-badge {
    background: linear-gradient(135deg, var(--accent), var(--dark-accent));
    color: white;
    font-weight: 600;
  }

  .add-to-cart-btn {
    background: linear-gradient(135deg, var(--accent), var(--dark-accent));
    transition: all 0.3s ease;
  }

  .add-to-cart-btn:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(49, 46, 129, 0.3);
  }

  .out-of-stock-btn {
    background: linear-gradient(135deg, #6B7280, #9CA3AF);
    cursor: not-allowed;
  }
`;

function ShoppingProductTile({
  product,
  handleGetProductDetails,
  handleAddtoCart,
}) {
  return (
    <>
      <style>{productTileStyles}</style>
      <Card className="aesthetic-product-tile product-card w-full max-w-sm mx-auto rounded-xl overflow-hidden border-0 shadow-sm">
        <div 
          className="cursor-pointer" 
          onClick={() => handleGetProductDetails(product?._id)}
        >
          <div className="product-image-container">
            <img
              src={product?.image}
              alt={product?.title}
              className="product-image w-full h-64 object-cover"
            />
            
            {/* View Overlay */}
            <div className="view-overlay">
              <div className="bg-white rounded-full p-3">
                <Eye className="h-6 w-6 text-[#312E81]" />
              </div>
            </div>

            {/* Badges */}
            <div className="absolute top-3 left-3 flex flex-col gap-2">
              {product?.totalStock === 0 ? (
                <Badge className="stock-badge rounded-lg px-3 py-1">
                  Out Of Stock
                </Badge>
              ) : product?.totalStock < 10 ? (
                <Badge className="stock-badge rounded-lg px-3 py-1">
                  Only {product?.totalStock} left
                </Badge>
              ) : product?.salePrice > 0 ? (
                <Badge className="sale-badge rounded-lg px-3 py-1">
                  Sale
                </Badge>
              ) : null}
            </div>
          </div>
          
          <CardContent className="p-5">
            <h2 className="text-lg font-bold text-[#312E81] mb-2 line-clamp-2">
              {product?.title}
            </h2>
            
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm text-gray-600 font-medium">
                {categoryOptionsMap[product?.category]}
              </span>
            </div>
            
            <div className="flex items-center gap-3">
              {product?.salePrice > 0 ? (
                <>
                  <span className="text-lg font-bold text-[#312E81]">
                    ₹{product?.salePrice}
                  </span>
                  <span className="text-sm text-gray-500 line-through">
                    ₹{product?.price}
                  </span>
                  <span className="text-xs font-medium text-[#B38A69] bg-[#F1F3FF] px-2 py-1 rounded-full">
                    Save ₹{product?.price - product?.salePrice}
                  </span>
                </>
              ) : (
                <span className="text-lg font-bold text-[#312E81]">
                  ₹{product?.price}
                </span>
              )}
            </div>
          </CardContent>
        </div>
        
        <CardFooter className="p-5 pt-0">
          {product?.totalStock === 0 ? (
            <Button 
              className="w-full out-of-stock-btn rounded-lg h-11"
              disabled
            >
              Out Of Stock
            </Button>
          ) : (
            <Button
              onClick={() => handleAddtoCart(product?._id, product?.totalStock)}
              className="w-full add-to-cart-btn rounded-lg h-11 text-white font-semibold"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
          )}
        </CardFooter>
      </Card>
    </>
  );
}

export default ShoppingProductTile;