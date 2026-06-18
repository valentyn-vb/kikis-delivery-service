import "server-only";

import sql from "../db/sql";
import type { DeliveryRequest } from "./types";

const deliveries: DeliveryRequest[] = [
  { id: "1", pickup: "Bakery", destination: "Clock Tower", status: "active" },
  {
    id: "2",
    pickup: "Harbour",
    destination: "Hillside Cafe",
    status: "accepted",
  },
  { id: "3", pickup: "Bookshop", destination: "Lighthouse", status: "denied" },
  {
    id: "4",
    pickup: "Market Square",
    destination: "Train Station",
    status: "fulfilled",
  },
];

export async function getAllDeliveries(): Promise<DeliveryRequest[]> {
  return await sql<DeliveryRequest[]>`SELECT * FROM deliveries`;
}

export function getDeliveryById(id: string): DeliveryRequest | null {
  return deliveries.find((d) => d.id === id) || null;
}
