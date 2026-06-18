import { getDeliveryById } from "@/lib/deliveriesService/deliveriesService";

async function GET(req: Request) {
  const delivery = await getDeliveryById("");
  if (!delivery) {
    return Response.json({
      message: `Delivery with ${req} not found`,
    });
  }

  return Response.json(delivery);
}
