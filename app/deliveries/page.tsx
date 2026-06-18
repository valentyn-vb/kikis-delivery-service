import DeliveryFilter from "@/components/DeliveryFilter";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { getAllDeliveries } from "@/lib/deliveriesService/deliveriesService";
import { DeliveryStatus } from "@/lib/deliveriesService/types";
import Link from "next/link";

export default async function DeliveryList({
  searchParams,
}: PageProps<"/deliveries">) {
  const { status }: { status?: DeliveryStatus } = await searchParams;

  const deliveries = await getAllDeliveries(status);

  return (
    <>
      <DeliveryFilter value={status ?? "all"} />
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {deliveries.map((d) => (
          <li key={d.id} className="p-2">
            <Card>
              <CardContent>
                <CardTitle>
                  {d.pickup} to {d.destination}
                </CardTitle>
                <CardDescription>{d.status}</CardDescription>
                <CardAction>
                  <Button variant="brand">
                    <Link href={`/deliveries/${d.id}`}>
                      <p>Details {d.id}</p>
                    </Link>
                  </Button>
                </CardAction>
              </CardContent>
            </Card>
          </li>
        ))}
      </ul>
    </>
  );
}
