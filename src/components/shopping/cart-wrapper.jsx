import { Button } from "../ui/button";
import { SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";
import UserCartItemsContent from "./cart-items-content";

function UserCartWrapper({ cartItems }) {
  const totalCartAmout =
    cartItems && cartItems.length > 0
      ? cartItems.reduce(
          (sum, item) =>
            sum +
            (item?.salePrice > 0 ? item?.salePrice : item.price) *
              item.quantity,
          0
        )
      : 0;

  return (
    <SheetContent className="sm:max-w-md overflow-auto">
      <SheetHeader>
        <SheetTitle> Your Cart </SheetTitle>
      </SheetHeader>
      <div className="mt-8 space-y-4">
        {cartItems && cartItems.length > 0
          ? cartItems.map((item) => <UserCartItemsContent item={item} />)
          : null}
      </div>
      <div className="mt-8 space-y-4">
        <div className="flex justify-between">
          <span className="font-bold">Total</span>
          <span className="font-bold">${totalCartAmout}</span>
        </div>
      </div>
      <Button className="w-full mt-6"> Checkout</Button>
    </SheetContent>
  );
}

export default UserCartWrapper;
