export type DeliveryStatus = "active" | "accepted" | "denied" | "fulfilled";

export const DELIVERY_STATUSES: DeliveryStatus[] = [
  "active",
  "accepted",
  "denied",
  "fulfilled",
];

export type DeliveryRequest = {
  id: string;
  pickup: string;
  destination: string;
  status: DeliveryStatus;
};
