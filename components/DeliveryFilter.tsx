"use client";

import type { DeliveryRequest } from "@/lib/deliveriesService/types";
import { DELIVERY_STATUSES } from "@/lib/deliveriesService/types";
import { useState } from "react";

export default function DeliveryFilter({
  deliveries,
}: {
  deliveries: DeliveryRequest[];
}) {
  const [option, setOption] = useState("all");

  return (
    <div>
      <select
        name="status-select"
        id="status_id"
        onChange={(e) => setOption(e.target.value)}
      >
        <option key="all" value="all">
          all
        </option>
        {DELIVERY_STATUSES.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>
    </div>
  );
}
