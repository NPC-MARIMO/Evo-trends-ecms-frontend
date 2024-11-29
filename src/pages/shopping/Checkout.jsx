import ShoppingAddress from "@/components/shopping/address";
import img from "../../assets/account.jpg";
import { useSelector } from "react-redux";
import UserCartItemsContent from "@/components/shopping/cart-items-content";
import { Button } from "@/components/ui/button";

function ShoppingCheckout() {
    
  const { cartItems } = useSelector((state) => state.shoppingCart);
  console.log(cartItems);

  
  const totalCartAmout =
    cartItems && cartItems.items && cartItems.items.length > 0
      ? cartItems.items.reduce(
          (sum, item) =>
            sum +
            (item?.salePrice > 0 ? item?.salePrice : item.price) *
              item.quantity,
          0
        )
      : 0;

  return (
    <div className="flex flex-col ">
      <div className="relative h-[300px] w-full overflow-hidden">
        <img
          src={img}
          className="h-full w-full object-cover object-center"
          alt=""
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5 p-5">
        <ShoppingAddress />
        <div className="flex flex-col gap-4">
          {cartItems && cartItems.items && cartItems.items.length > 0
            ? cartItems.items.map((i) => <UserCartItemsContent item={i} />)
            : null}
        <div className="mt-8 space-y-4">
          <div className="flex justify-between">
            <span className="font-bold">Total</span>
            <span className="font-bold">${totalCartAmout}</span>
          </div>
          <div>
            <Button className="mt-4 w-full">Checkout with Paypal</Button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCheckout;
