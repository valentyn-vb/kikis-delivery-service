import { getAllDeliveries } from "../lib/deliveriesService/deliveriesService";

export default async function Home() {
  const deliveries = await getAllDeliveries();
  const delivery = deliveries[0];
  return (
    <div>
      <h1>{delivery.id}</h1>
      <p>{delivery.pickup}</p>
      <p>{delivery.destination}</p>
    </div>
  );
}
