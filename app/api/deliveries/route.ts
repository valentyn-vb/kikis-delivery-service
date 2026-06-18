import { getAllDeliveries } from "@/lib/deliveriesService/deliveriesService";

export async function GET(req: Request) {
  const deliveries = await getAllDeliveries();
  return Response.json(deliveries);
}
