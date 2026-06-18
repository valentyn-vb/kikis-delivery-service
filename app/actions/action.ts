"use server";

import { createDelivery } from "@/lib/deliveriesService/deliveriesService";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createNewDelivery(data: FormData) {
  const pickup = data.get("pickup") as string;
  const destination = data.get("destination") as string;
  if (pickup && destination) await createDelivery(pickup, destination);
  revalidatePath("/deliveries");
  redirect("/deliveries");
}
