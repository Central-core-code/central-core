import { useRouter } from "next/router";

export default function getLocale() {
  let router = useRouter();
  return router.locale || "pl"; // domyślnie polnij gdy brak i18n
}
