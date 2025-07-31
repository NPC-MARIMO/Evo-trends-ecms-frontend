# Tracking API Documentation

This document outlines the API endpoints that need to be implemented on the backend to support the shipping and delivery tracking functionality.

## Base URL
```
${VITE_API_URL}/api/shop/tracking
```

## Endpoints

### 1. Get Tracking Information by Tracking Number
**GET** `/api/shop/tracking/:trackingNumber`

**Response:**
```json
{
  "success": true,
  "data": {
    "trackingNumber": "TRK123456789",
    "orderId": "ORD123456",
    "status": "In Transit",
    "carrier": "FedEx",
    "estimatedDelivery": "2024-01-15",
    "originAddress": "123 Warehouse St, City, State 12345",
    "destinationAddress": "456 Customer Ave, City, State 67890",
    "timeline": [
      {
        "status": "Package picked up",
        "location": "Origin Facility",
        "timestamp": "2024-01-10T10:30:00Z"
      },
      {
        "status": "In transit",
        "location": "Distribution Center",
        "timestamp": "2024-01-11T14:20:00Z"
      },
      {
        "status": "Out for delivery",
        "location": "Local Facility",
        "timestamp": "2024-01-12T08:15:00Z"
      }
    ]
  }
}
```

### 2. Get Tracking Information by Order ID
**GET** `/api/shop/tracking/order/:orderId`

**Response:**
```json
{
  "success": true,
  "data": {
    "trackingNumber": "TRK123456789",
    "orderId": "ORD123456",
    "status": "Delivered",
    "carrier": "FedEx",
    "estimatedDelivery": "2024-01-15",
    "originAddress": "123 Warehouse St, City, State 12345",
    "destinationAddress": "456 Customer Ave, City, State 67890",
    "timeline": [
      {
        "status": "Package picked up",
        "location": "Origin Facility",
        "timestamp": "2024-01-10T10:30:00Z"
      },
      {
        "status": "In transit",
        "location": "Distribution Center",
        "timestamp": "2024-01-11T14:20:00Z"
      },
      {
        "status": "Out for delivery",
        "location": "Local Facility",
        "timestamp": "2024-01-12T08:15:00Z"
      },
      {
        "status": "Delivered",
        "location": "Customer Address",
        "timestamp": "2024-01-12T15:30:00Z"
      }
    ]
  }
}
```

### 3. Get User Tracking History
**GET** `/api/shop/tracking/history/:userId`

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "trackingNumber": "TRK123456789",
      "orderId": "ORD123456",
      "status": "Delivered",
      "orderDate": "2024-01-08T10:00:00Z"
    },
    {
      "trackingNumber": "TRK987654321",
      "orderId": "ORD789012",
      "status": "In Transit",
      "orderDate": "2024-01-10T14:30:00Z"
    }
  ]
}
```

## Status Values

The following status values are supported:
- `Pending` - Order is being processed
- `Processing` - Order is being prepared for shipment
- `In Transit` - Package is being transported
- `Out for Delivery` - Package is out for final delivery
- `Delivered` - Package has been successfully delivered
- `Failed` - Delivery failed
- `Returned` - Package was returned

## Error Responses

**404 - Tracking not found:**
```json
{
  "success": false,
  "message": "Tracking information not found"
}
```

**400 - Invalid tracking number:**
```json
{
  "success": false,
  "message": "Invalid tracking number format"
}
```

**500 - Server error:**
```json
{
  "success": false,
  "message": "Internal server error"
}
```

## Database Schema

### Tracking Table
```sql
CREATE TABLE tracking (
  id VARCHAR(255) PRIMARY KEY,
  trackingNumber VARCHAR(255) UNIQUE NOT NULL,
  orderId VARCHAR(255) NOT NULL,
  status VARCHAR(100) NOT NULL,
  carrier VARCHAR(100),
  estimatedDelivery DATE,
  originAddress TEXT,
  destinationAddress TEXT,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### Tracking Timeline Table
```sql
CREATE TABLE tracking_timeline (
  id VARCHAR(255) PRIMARY KEY,
  trackingId VARCHAR(255) NOT NULL,
  status VARCHAR(100) NOT NULL,
  location VARCHAR(255),
  timestamp TIMESTAMP NOT NULL,
  FOREIGN KEY (trackingId) REFERENCES tracking(id)
);
```

## Integration Notes

1. The frontend expects all timestamps to be in ISO 8601 format
2. Status values should be consistent across all endpoints
3. The timeline should be ordered from oldest to newest events
4. All addresses should be formatted as complete addresses
5. The API should handle both tracking numbers and order IDs for flexibility 