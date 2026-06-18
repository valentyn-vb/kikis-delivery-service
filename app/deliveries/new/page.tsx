import { createNewDelivery } from "@/app/actions/action";

export default function DeliveryForm() {
  return (
    <form action={createNewDelivery}>
      <input type="text" name="pickup" required />
      <input type="text" name="destination" required />
      <button type="submit">Save</button>
    </form>
  );
}
