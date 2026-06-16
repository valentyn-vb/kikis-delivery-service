import { getDeliveryById } from "@/lib/deliveriesService/deliveriesService";
import Link from "next/link";

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
      <Link href="/deliveries">Go back</Link>
      <p>{delivery.id}</p>
      <p>{delivery.pickup}</p>
      <p>{delivery.status}</p>
    </>
  );
}
