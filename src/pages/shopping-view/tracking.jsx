import TrackingComponent from "@/components/shopping-view/tracking";

function ShoppingTracking() {
  return (
    <div className="container mx-auto py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Track Your Order
          </h1>
          <p className="text-gray-600">
            Enter your tracking number or order ID to get real-time updates on your package delivery status.
          </p>
        </div>
        
        <TrackingComponent />
      </div>
    </div>
  );
}

export default ShoppingTracking; 