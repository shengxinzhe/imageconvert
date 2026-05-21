import { track } from "@vercel/analytics";
import { hasAnalyticsConsent } from "@/lib/analytics-consent";
import type { AppLocale } from "@/i18n/routing";
import type { InputFormat, OutputFormat } from "@/lib/convert";

type EventProps = Record<string, string | number | boolean | null | undefined>;

function send(name: string, properties?: EventProps) {
  if (!hasAnalyticsConsent()) return;
  track(name, properties);
}

export function trackToolConvertStart(props: {
  tool: string;
  from: InputFormat;
  to: OutputFormat;
  locale: AppLocale;
  fileCount: number;
}) {
  send("tool_convert_start", {
    tool: props.tool,
    from: props.from,
    to: props.to,
    locale: props.locale,
    file_count: props.fileCount,
  });
}

export function trackToolConvertSuccess(props: {
  tool: string;
  from: InputFormat;
  to: OutputFormat;
  locale: AppLocale;
  fileCount: number;
}) {
  send("tool_convert_success", {
    tool: props.tool,
    from: props.from,
    to: props.to,
    locale: props.locale,
    file_count: props.fileCount,
  });
}

export function trackToolConvertError(props: {
  tool: string;
  from: InputFormat;
  to: OutputFormat;
  locale: AppLocale;
  fileCount: number;
}) {
  send("tool_convert_error", {
    tool: props.tool,
    from: props.from,
    to: props.to,
    locale: props.locale,
    file_count: props.fileCount,
  });
}

export function trackToolDownloadZip(props: {
  tool: string;
  from: InputFormat;
  to: OutputFormat;
  locale: AppLocale;
  fileCount: number;
}) {
  send("tool_download_zip", {
    tool: props.tool,
    from: props.from,
    to: props.to,
    locale: props.locale,
    file_count: props.fileCount,
  });
}

export function trackLocaleSwitch(props: {
  from: AppLocale;
  to: AppLocale;
}) {
  send("locale_switch", {
    from_locale: props.from,
    to_locale: props.to,
  });
}
