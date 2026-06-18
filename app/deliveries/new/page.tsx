import { createDelivery } from "@/lib/deliveriesService/deliveriesService";

export default function DeliveryForm() {
  async function createNewDelivery(data: FormData) {
    "use server";
    const pickup = data.get("pickup");
    const destination = data.get("destination");
    if (pickup && destination) await createDelivery(pickup, destination);
  }
  return (
    <form action={createNewDelivery}>
      <input type="text" name="pickup" />
      <input type="text" name="destination" />
      <button type="submit">Save</button>
    </form>
  );
}
