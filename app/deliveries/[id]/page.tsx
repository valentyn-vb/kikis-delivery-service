import { Button } from "@/components/ui/button";
import { getDeliveryById } from "@/lib/deliveriesService/deliveriesService";
import Link from "next/link";

export default async function DeliveryDetails({
  params,
}: PageProps<"/deliveries/[id]">) {
  const { id } = await params;
  const delivery = await getDeliveryById(id);
  console.log("🚀 ~ DeliveryDetails ~ delivery:", delivery);
  if (!delivery || !delivery?.length) {
    throw new Error("Not found");
  }
  const { id: dId, pickup, status } = delivery[0];
  return (
    <>
      <Button variant="ghost">
        <Link href="/deliveries">Go back</Link>
      </Button>

      <p>{dId}</p>
      <p>{pickup}</p>
      <p>{status}</p>
    </>
  );
}
