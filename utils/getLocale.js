import { useRouter } from "next/router";

export default function getLocale() {
  let router = useRouter();
  return router.locale;
}
