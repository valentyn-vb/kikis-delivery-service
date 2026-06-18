"use client";

import { DELIVERY_STATUSES } from "@/lib/deliveriesService/types";
import { usePathname, useRouter } from "next/navigation";
import type { ChangeEvent } from "react";
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

  function handleChange(event: ChangeEvent<HTMLSelectElement>) {
    const next = event.target.value;
    const query = next === "all" ? "" : `?status=${next}`;
    router.push(`${pathname}${query}`);
  }

  return (
    <Select items={DELIVERY_STATUSES}>
      <SelectTrigger className="w-full max-w-48">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Select status</SelectLabel>
          <SelectItem key="all" value="all">
            all
          </SelectItem>
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
