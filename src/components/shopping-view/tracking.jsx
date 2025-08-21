import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "../ui/dialog";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Package, CheckCircle, Truck, Clock, AlertCircle } from "lucide-react";
import { getAllOrdersByUserId } from "@/store/shop/order-slice";
import { Skeleton } from "../ui/skeleton";
import axios from "axios";

function getStatusColor(status) {
  switch (status?.toLowerCase()) {
    case "delivered":
      return "bg-green-500";
    case "in transit":
    case "out for delivery":
      return "bg-blue-500";
    case "pending":
    case "processing":
      return "bg-yellow-500";
    case "failed":
    case "returned":
      return "bg-red-500";
    default:
      return "bg-gray-500";
  }
}

function getStatusIcon(status) {
  switch (status?.toLowerCase()) {
    case "delivered":
      return <CheckCircle className="h-5 w-5 text-green-500" />;
    case "in transit":
    case "out for delivery":
      return <Truck className="h-5 w-5 text-blue-500" />;
    case "pending":
    case "processing":
      return <Clock className="h-5 w-5 text-yellow-500" />;
    case "failed":
    case "returned":
      return <AlertCircle className="h-5 w-5 text-red-500" />;
    default:
      return <Package className="h-5 w-5 text-gray-500" />;
  }
}

function TrackingComponent() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { orderList, loading } = useSelector((state) => state.shopOrder);

  // State for cancel dialog
  const [cancelDialogOpen, setCancelDialogOpen] = useState(false);
  const [cancelOrderId, setCancelOrderId] = useState(null);
  const [cancelReason, setCancelReason] = useState("");
  const [cancelLoading, setCancelLoading] = useState(false);
  const [cancelError, setCancelError] = useState("");
  const [cancelSuccess, setCancelSuccess] = useState(false);

  // State for return dialog
  const [returnDialogOpen, setReturnDialogOpen] = useState(false);
  const [returnOrderId, setReturnOrderId] = useState(null);
  const [returnReason, setReturnReason] = useState("");
  const [returnLoading, setReturnLoading] = useState(false);
  const [returnError, setReturnError] = useState("");
  const [returnSuccess, setReturnSuccess] = useState(false);

  useEffect(() => {
    if (user?.id) {
      dispatch(getAllOrdersByUserId(user.id));
    }
    // eslint-disable-next-line
  }, [dispatch, user?.id]);

  const handleCancelClick = (orderId) => {
    setCancelOrderId(orderId);
    setCancelReason("");
    setCancelError("");
    setCancelSuccess(false);
    setCancelDialogOpen(true);
  };

  const handleCancelOrder = async () => {
    if (!cancelReason.trim()) {
      setCancelError("Please provide a reason for cancellation.");
      return;
    }
    setCancelLoading(true);
    setCancelError("");
    try {
      await axios.delete(
        `${import.meta.env.VITE_API_URL}/api/shop/order/delete/${cancelOrderId}`,
        { data: { reason: cancelReason } }
      );
      setCancelSuccess(true);
      setTimeout(() => {
        setCancelDialogOpen(false);
        setCancelOrderId(null);
        setCancelReason("");
        setCancelSuccess(false);
        dispatch(getAllOrdersByUserId(user.id));
      }, 1200);
    } catch (err) {
      setCancelError(
        err?.response?.data?.message ||
          "Failed to cancel order. Please try again."
      );
    } finally {
      setCancelLoading(false);
    }
  };

  // Return order handlers
  const handleReturnClick = (orderId) => {
    setReturnOrderId(orderId);
    setReturnReason("");
    setReturnError("");
    setReturnSuccess(false);
    setReturnDialogOpen(true);
  };

  const handleReturnOrder = async () => {
    if (!returnReason.trim()) {
      setReturnError("Please provide a reason for return.");
      return;
    }
    setReturnLoading(true);
    setReturnError("");
    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/api/shop/order/return/${returnOrderId}`,
        { reason: returnReason }
      );
      setReturnSuccess(true);
      setTimeout(() => {
        setReturnDialogOpen(false);
        setReturnOrderId(null);
        setReturnReason("");
        setReturnSuccess(false);
        dispatch(getAllOrdersByUserId(user.id));
      }, 1200);
    } catch (err) {
      setReturnError(
        err?.response?.data?.message ||
          "Failed to return order. Please try again."
      );
    } finally {
      setReturnLoading(false);
    }
  };

  // console.log(orderList,'asaorderlist')

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Package className="h-5 w-5" />
            All Your Orders
          </CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="space-y-4">
              <Skeleton className="h-8 w-full" />
              <Skeleton className="h-8 w-full" />
              <Skeleton className="h-8 w-full" />
            </div>
          ) : !orderList || orderList.length === 0 ? (
            <div className="text-gray-500 text-center py-8">No orders found.</div>
          ) : (
            <div className="space-y-4">
              {orderList.map((order) => (
                
                <div
                  key={order._id}
                  className="flex flex-col md:flex-row md:items-center justify-between p-4 border rounded-lg gap-2"
                >
                  <div className="flex items-center gap-3">
                    {getStatusIcon(order.orderStatus)}
                    <div>
                      <div className="font-semibold text-base">
                        Order ID: <span className="font-mono">{order._id}</span>
                      </div>
                      {/* Render order name here */}
                      <div className="text-sm text-gray-800 font-medium">
                        Name:{" "}
                        {order?.cartItems[0].title ? `${order.cartItems[0].title}` : "hello"}
                      </div> 
                      <div className="text-sm text-gray-600">
                        Date: {order.orderDate ? order.orderDate.split("T")[0] : "N/A"}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mt-2 md:mt-0">
                    <Badge className={getStatusColor(order.orderStatus)}>
                      {order.orderStatus}
                    </Badge>
                    <div className="text-sm text-gray-700">
                      Total: ₹{order.totalAmount}
                    </div>
                    {order.orderStatus?.toLowerCase() === "pending" && (
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleCancelClick(order._id)}
                        disabled={cancelLoading}
                      >
                        Cancel Order
                      </Button>
                    )}
                    {order.orderStatus?.toLowerCase() === "delivered" && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleReturnClick(order._id)}
                        disabled={returnLoading}
                      >
                        Return Order
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Cancel Order Dialog */}
      <Dialog open={cancelDialogOpen} onOpenChange={setCancelDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Cancel Order</DialogTitle>
          </DialogHeader>
          {cancelSuccess ? (
            <div className="text-green-600 py-4 text-center">
              Order cancelled successfully!
            </div>
          ) : (
            <>
              <div className="mb-2">
                <div className="font-medium mb-1">
                  Please provide a reason for cancellation:
                </div>
                <Textarea
                  value={cancelReason}
                  onChange={(e) => setCancelReason(e.target.value)}
                  placeholder="Reason for cancellation"
                  rows={3}
                  disabled={cancelLoading}
                />
                {cancelError && (
                  <div className="text-red-600 text-sm mt-1">{cancelError}</div>
                )}
              </div>
              <DialogFooter>
                <Button
                  variant="outline"
                  onClick={() => setCancelDialogOpen(false)}
                  disabled={cancelLoading}
                  type="button"
                >
                  Close
                </Button>
                <Button
                  variant="destructive"
                  onClick={handleCancelOrder}
                  loading={cancelLoading ? "true" : undefined}
                  disabled={cancelLoading}
                  type="button"
                >
                  {cancelLoading ? "Cancelling..." : "Confirm Cancel"}
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Return Order Dialog */}
      <Dialog open={returnDialogOpen} onOpenChange={setReturnDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Return Order</DialogTitle>
          </DialogHeader>
          {returnSuccess ? (
            <div className="text-green-600 py-4 text-center">
              Order returned successfully! <br />
              Your money will be refunded within 3 working days
            </div>
          ) : (
            <>
              <div className="mb-2">
                <div className="font-medium mb-1">
                  Please provide a reason for return:
                </div>
                <Textarea
                  value={returnReason}
                  onChange={(e) => setReturnReason(e.target.value)}
                  placeholder="Reason for return"
                  rows={3}
                  disabled={returnLoading}
                />
                {returnError && (
                  <div className="text-red-600 text-sm mt-1">{returnError}</div>
                )}
              </div>
              <DialogFooter>
                <Button
                  variant="outline"
                  onClick={() => setReturnDialogOpen(false)}
                  disabled={returnLoading}
                  type="button"
                >
                  Close
                </Button>
                <Button
                  variant="destructive"
                  onClick={handleReturnOrder}
                  loading={returnLoading ? "true" : undefined}
                  disabled={returnLoading}
                  type="button"
                >
                  {returnLoading ? "Returning..." : "Confirm Return"}
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default TrackingComponent;
