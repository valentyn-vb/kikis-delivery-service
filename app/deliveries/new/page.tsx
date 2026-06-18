import { createNewDelivery } from "@/app/actions/action";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function DeliveryForm() {
  return (
    <form action={createNewDelivery} className="w-full max-w-[300px]">
      <Label htmlFor="pickup" className="mb-2">
        Pickup
      </Label>
      <Input type="text" id="pickup" name="pickup" required className="mb-6" />
      <Label htmlFor="destination" className="mb-2">
        Destination
      </Label>
      <Input type="text" name="destination" required className="mb-6" />
      <Button type="submit">Save</Button>
    </form>
  );
}
