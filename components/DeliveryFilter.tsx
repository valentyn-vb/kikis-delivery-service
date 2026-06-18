"use client";

import { DELIVERY_STATUSES } from "@/lib/deliveriesService/types";
import { usePathname, useRouter } from "next/navigation";
import type { ChangeEvent } from "react";

export default function DeliveryFilter({ value }: { value: string }) {
  const router = useRouter();
  const pathname = usePathname();

  function handleChange(event: ChangeEvent<HTMLSelectElement>) {
    const next = event.target.value;
    const query = next === "all" ? "" : `?status=${next}`;
    router.push(`${pathname}${query}`);
  }

  return (
    <div>
      <select
        name="status-select"
        id="status_id"
        value={value}
        onChange={handleChange}
      >
        <option value="all">all</option>
        {DELIVERY_STATUSES.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>
    </div>
  );
}
