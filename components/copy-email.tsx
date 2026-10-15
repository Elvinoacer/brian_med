"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/icons";

export function CopyEmail({ email }: { email: string }) {
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );
  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setStatus("copied");
    } catch {
      setStatus("failed");
    }
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setStatus("idle"), 4000);
  }
  return (
    <div className="copy-email-control">
      <button
        type="button"
        className="copy-email"
        aria-label="Copy email address"
        onClick={copy}
      >
        <Icon name={status === "copied" ? "check" : "copy"} />
      </button>
      <span role="status" className="copy-status">
        {status === "copied"
          ? "Email copied"
          : status === "failed"
            ? "Select the email address to copy it."
            : ""}
      </span>
    </div>
  );
}
