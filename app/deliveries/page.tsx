import DeliveryFilter from "@/components/DeliveryFilter";
import { getAllDeliveries } from "@/lib/deliveriesService/deliveriesService";
import type { DeliveryStatus } from "@/lib/deliveriesService/types";
import Link from "next/link";

export default async function DeliveryList() {
  const deliveries = await getAllDeliveries();
  const handleStatusChange = async (status: DeliveryStatus) => {};
  return (
    <>
      <DeliveryFilter deliveries={deliveries} />
      <ul>
        {deliveries.map((d) => (
          <li
            style={{
              border: "1px solid tomato",
              margin: "1rem",
            }}
            key={d.id}
          >
            <Link href={`/deliveries/${d.id}`}>
              <p>{d.id}</p>
              <p>{d.pickup}</p>
              <p>{d.status}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
