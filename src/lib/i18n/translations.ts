import type { AppLocale } from "@/i18n/routing";
import de from "@/messages/de.json";
import en from "@/messages/en.json";
import fr from "@/messages/fr.json";

const catalogs = { en, de, fr } as const;

type MessageTree = Record<string, unknown>;

function resolve(tree: MessageTree, key: string): string | undefined {
  const value = key.split(".").reduce<unknown>((node, part) => {
    if (node && typeof node === "object" && part in node) {
      return (node as MessageTree)[part];
    }
    return undefined;
  }, tree);
  return typeof value === "string" ? value : undefined;
}

export function getT(locale: AppLocale) {
  const tree = catalogs[locale] as MessageTree;

  return function t(key: string, params?: Record<string, string | number>) {
    let text = resolve(tree, key) ?? key;
    if (params) {
      for (const [name, value] of Object.entries(params)) {
        text = text.replace(`{${name}}`, String(value));
      }
    }
    return text;
  };
}
