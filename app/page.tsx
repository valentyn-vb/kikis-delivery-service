import { getAllDeliveries } from "../lib/deliveriesService/deliveriesService";

export default function Home() {
  const delivery = getAllDeliveries()[0];
  return (
    <div>
      <h1>{delivery.id}</h1>
      <p>{delivery.pickup}</p>
      <p>{delivery.destination}</p>
    </div>
  );
}
