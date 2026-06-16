import { getAllDeliveries } from "@/lib/deliveriesService/deliveriesService";
import Link from "next/link";

export default function DeliveryList() {
  const deliveries = getAllDeliveries();
  return (
    <ul>
      {deliveries.map((d) => (
        <li>
          <Link></Link>
          <p>{d.id}</p>
          <p>{d.pickup}</p>
          <p>{d.status}</p>
        </li>
      ))}
    </ul>
  );
}
