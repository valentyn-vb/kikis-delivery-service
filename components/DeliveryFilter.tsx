"use client";

import { DELIVERY_STATUSES } from "@/lib/deliveriesService/types";
import { usePathname, useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export default function DeliveryFilter({ value }: { value: string }) {
  const router = useRouter();
  const pathname = usePathname();

  function handleStatusChange(next: string | null) {
    if (!next) return;

    const query = next === "all" ? "" : `?status=${next}`;
    router.push(`${pathname}${query}`);
  }

  return (
    <Select value={value} onValueChange={handleStatusChange}>
      <SelectTrigger className="w-full max-w-48">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Select status</SelectLabel>
          <SelectItem value="all">all</SelectItem>
          {DELIVERY_STATUSES.map((s) => (
            <SelectItem key={s} value={s}>
              {s}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
