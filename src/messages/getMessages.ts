import { messages as es } from "./es";
import { messages as en } from "./en";

export function getMessages(locale: string) {
  switch (locale) {
    case "es":
      return es;

    case "en":
      return en;

    default:
      return es;
  }
}
