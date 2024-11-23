import { brandOptionsMap, categoryOptionsMap } from "@/config";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";

function ShoppingProductTile({product , handleGetProdctDetails , handleAddToCart}) {
    return ( 
        <Card className="w-full max-w-sm mx-auto">
            <div onClick={() => handleGetProdctDetails(product?._id)}>
                <div className="relative">
                    <img

                        className="w-full h-[300px] object-cover cursor-pointer rounded-t-lg" 
                        src={product?.image} 
                        alt={product?.title} 
                    />
                    { 
                        product?.salePrice > 0 ? <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600" >Sale</Badge> : null
                    }
                </div>
                <CardContent className="p-4 ">
                    <h2 className="text-xl font-bold mb-2">{product?.title}</h2>
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-muted-foreground">{categoryOptionsMap[product?.category]}</span>
                        <span className="text-sm text-muted-foreground">{brandOptionsMap[product?.brand]}</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                        <span className= {`text-lg font-semibold text-primary ${product?.salePrice > 0 ? "line-through" : ""}`}> ${product?.price}</span>
                        {
                            product?.salePrice > 0 ?
                            <span className="text-lg font-semibold text-primary">${product?.salePrice}</span> : 
                            null
                        }
                    </div>

                </CardContent>
            </div>
                <CardFooter>
                    <Button onClick={() => handleAddToCart(product?._id) } className="w-full ">Add to cart</Button>
                </CardFooter>

        </Card>
     );
}

export default ShoppingProductTile;