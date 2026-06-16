import { getDeliveryById } from "@/app/lib/deliveriesService/deliveriesService";

export default async function DeliveryDetails({
  params,
}: PageProps<"/deliveries/[id]">) {
  const { id } = await params;
  const delivery = getDeliveryById(id);
  if (!delivery) {
    throw new Error("Not found");
  }

  return (
    <>
      <p>{delivery.id}</p>
      <p>{delivery.pickup}</p>
      <p>{delivery.status}</p>
    </>
  );
}
