import Address from "@/components/shopping-view/address";
import { useDispatch, useSelector } from "react-redux";
import UserCartItemsContent from "@/components/shopping-view/cart-items-content";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { createRazorpayOrder, verifyRazorpayPayment } from "@/store/shop/order-slice";
import { Navigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { HomeHeroBg } from "@/assets";

function ShoppingCheckout() {
  const { cartItems } = useSelector((state) => state.shopCart);
  const { user } = useSelector((state) => state.auth);
  const { approvalURL } = useSelector((state) => state.shopOrder);
  const [currentSelectedAddress, setCurrentSelectedAddress] = useState(null);
  const [isRazorpayStarting, setIsRazorpayStarting] = useState(false);
  const dispatch = useDispatch();
  const { toast } = useToast();

  console.log(currentSelectedAddress, "cartItems");

  const totalCartAmount =
    cartItems && cartItems.items && cartItems.items.length > 0
      ? cartItems.items.reduce(
          (sum, currentItem) =>
            sum +
            (currentItem?.salePrice > 0
              ? currentItem?.salePrice
              : currentItem?.price) *
              currentItem?.quantity,
          0
        )
      : 0;

  // Paypal removed

  async function loadRazorpayScript() {
    if (window.Razorpay) return true;
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  }

  async function handleInitiateRazorpayPayment() {
    if (!cartItems?.items || cartItems.items.length === 0) {
      toast({
        title: "Your cart is empty. Please add items to proceed",
        variant: "destructive",
      });

      return;
    }
    if (currentSelectedAddress === null) {
      toast({
        title: "Please select one address to proceed.",
        variant: "destructive",
      });

      return;
    }

    setIsRazorpayStarting(true);

    const orderData = {
      userId: user?.id,
      cartId: cartItems?._id,
      cartItems: cartItems.items.map((singleCartItem) => ({
        productId: singleCartItem?.productId,
        title: singleCartItem?.title,
        image: singleCartItem?.image,
        price:
          singleCartItem?.salePrice > 0
            ? singleCartItem?.salePrice
            : singleCartItem?.price,
        quantity: singleCartItem?.quantity,
      })),
      addressInfo: {
        addressId: currentSelectedAddress?._id,
        address: currentSelectedAddress?.address,
        city: currentSelectedAddress?.city,
        pincode: currentSelectedAddress?.pincode,
        phone: currentSelectedAddress?.phone,
        notes: currentSelectedAddress?.notes,
      },
      orderStatus: "pending",
      paymentMethod: "razorpay",
      paymentStatus: "pending",
      totalAmount: totalCartAmount,
      orderDate: new Date(),
      orderUpdateDate: new Date(),
    };

    try {
      const createRes = await dispatch(createRazorpayOrder(orderData));
      const payload = createRes?.payload;
      if (!payload?.success) {
        setIsRazorpayStarting(false);
        toast({ title: payload?.message || "Failed to start Razorpay", variant: "destructive" });
        return;
      }

      const loaded = await loadRazorpayScript();
      if (!loaded) {
        setIsRazorpayStarting(false);
        toast({ title: "Razorpay SDK failed to load", variant: "destructive" });
        return;
      }

      const { key, razorpayOrderId, amount, currency, orderId } = payload;

      const options = {
        key: key,
        amount: amount,
        currency: currency || "INR",
        name: "Evo Trends",
        description: "Order Payment",
        order_id: razorpayOrderId,
        prefill: {
          name: user?.name || user?.fullName || "",
          email: user?.email || "",
          contact: currentSelectedAddress?.phone || "",
        },
        notes: {
          orderId: orderId,
        },
        handler: async function (response) {
          try {
            const verifyRes = await dispatch(
              verifyRazorpayPayment({
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                orderId: orderId,
              })
            );

            if (verifyRes?.payload?.success) {
              sessionStorage.removeItem("currentOrderId");
              window.location.href = "/shop/payment-success";
            } else {
              toast({ title: verifyRes?.payload?.message || "Payment verification failed", variant: "destructive" });
            }
          } catch (err) {
            toast({ title: "Payment verification error", variant: "destructive" });
          }
        },
        modal: {
          ondismiss: function () {
            setIsRazorpayStarting(false);
          },
        },
        theme: {
          color: "#0ea5e9",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      toast({ title: "Unable to initiate Razorpay", variant: "destructive" });
    } finally {
      // Keep button text until popup opens or closes; reset on dismiss handler
    }
  }

  // approvalURL removed along with PayPal

  return (
    <div className="flex flex-col text-white">
      <div className="relative h-[300px] w-full overflow-hidden">
        <img src={HomeHeroBg} className="h-full w-full object-cover object-center" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5 p-5">
        <Address
          selectedId={currentSelectedAddress}
          setCurrentSelectedAddress={setCurrentSelectedAddress}
        />
        <div className="flex flex-col gap-4">
          {cartItems && cartItems.items && cartItems.items.length > 0
            ? cartItems.items.map((item) => (
                <UserCartItemsContent cartItem={item} key={item._id || item.id}/>
              ))
            : null}
          <div className="mt-8 space-y-4">
            <div className="flex justify-between">
              <span className="font-bold text-white">Total</span>
              <span className="font-bold text-white">${totalCartAmount}</span>
            </div>
          </div>
          <div className="mt-4 w-full">
            <Button 
              onClick={handleInitiateRazorpayPayment} 
              className="w-full"
            >
              {isRazorpayStarting ? "Opening Razorpay..." : "Pay with Razorpay"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCheckout;
