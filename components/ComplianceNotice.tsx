"use client";
import { useEffect, useState } from "react";

export default function ComplianceNotice() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    try {
      const n = new URLSearchParams(window.location.search).get("notice");
      setOpen(n === "cn");
    } catch { }
  }, []);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50">
      <div className="w-[92vw] max-w-md rounded-xl border border-white/10 bg-background p-6 shadow-xl">
        <h3 className="text-lg font-semibold mb-2">合规提示</h3>
        <p className="text-sm text-foreground/80">
          您访问的域名为中国大陆合规限制域名，已为您切换至“国际港澳台站”。
        </p>
        <div className="mt-4 flex justify-end">
          <button className="rounded-full bg-[#0052d9] text-background px-4 py-1 text-sm" onClick={() => setOpen(false)}>我知道了</button>
        </div>
      </div>
    </div>
  );
}
