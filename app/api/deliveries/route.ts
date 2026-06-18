import { getAllDeliveries } from "@/lib/deliveriesService/deliveriesService";
import { DeliveryStatus } from "@/lib/deliveriesService/types";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const status = searchParams.get("status") as DeliveryStatus;
  const deliveries = await getAllDeliveries(status ?? undefined);
  return Response.json(deliveries);
}
