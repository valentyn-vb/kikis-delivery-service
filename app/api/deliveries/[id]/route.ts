import { getDeliveryById } from "@/lib/deliveriesService/deliveriesService";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const delivery = await getDeliveryById(id);
  console.log("🚀 ~ GET ~ delivery:", delivery);

  if (!delivery || !delivery.length) {
    return Response.json(
      {
        message: `Delivery with ${id} not found`,
      },
      { status: 404 },
    );
  }

  return Response.json(delivery);
}
