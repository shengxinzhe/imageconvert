"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { useParams } from "next/navigation";
import type { AppLocale } from "@/i18n/routing";
import { routing } from "@/i18n/routing";
import type { InputFormat } from "@/lib/convert";
import { getT } from "@/lib/i18n/translations";

const STORAGE_KEY = "heicsave_browser_hint_dismissed";

function isChromiumBrowser(): boolean {
  if (typeof navigator === "undefined") return true;
  const ua = navigator.userAgent;
  return /Edg\//.test(ua) || (/Chrome\//.test(ua) && !/OPR|Opera/i.test(ua));
}

export function BrowserCompatHint({ from }: { from: InputFormat }) {
  const params = useParams();
  const locale = (routing.locales.includes(params.locale as AppLocale)
    ? params.locale
    : routing.defaultLocale) as AppLocale;
  const t = getT(locale);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (from !== "heic" && from !== "avif") return;
    try {
      if (localStorage.getItem(STORAGE_KEY)) return;
    } catch {
      return;
    }
    if (!isChromiumBrowser()) setVisible(true);
  }, [from]);

  if (!visible) return null;

  const dismiss = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  return (
    <div
      className="flex gap-3 rounded-vercel border border-sky-200 bg-sky-50 px-3 py-2.5 text-sm text-sky-950"
      role="status"
    >
      <p className="flex-1">{t("browserHint.message")}</p>
      <button
        type="button"
        onClick={dismiss}
        className="shrink-0 rounded p-1 text-sky-800 hover:bg-sky-100"
        aria-label={t("browserHint.dismiss")}
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
