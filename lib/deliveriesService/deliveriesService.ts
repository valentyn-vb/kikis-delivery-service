import "server-only";

import sql from "../db/sql";
import type { DeliveryRequest, DeliveryStatus } from "./types";

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

export async function getAllDeliveries(
  status?: DeliveryStatus,
): Promise<DeliveryRequest[]> {
  if (status) {
    return await sql<DeliveryRequest[]>`
      SELECT * FROM deliveries WHERE status = ${status} ORDER BY id
    `;
  }

  return await sql<DeliveryRequest[]>`SELECT * FROM deliveries ORDER BY id`;
}

export async function getDeliveryById(
  id: string,
): Promise<DeliveryRequest[] | null> {
  return await sql<
    DeliveryRequest[]
  >`SELECT * FROM deliveries WHERE id = ${id}`;
}

export async function createDelivery(pickup: string, destination: string) {
  return await sql<DeliveryRequest[]>`
    INSERT INTO deliveries (pickup, destination) VALUES (${pickup}, ${destination}) RETURNING *
  `;
}
