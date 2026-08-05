import { redirect } from "next/navigation";
import { RESERVIO_URL } from "@/lib/reservio";

// Rezervace běží přes Reservio — tahle route zůstává jen jako přesměrování
// pro staré odkazy (např. z předchozí verze webu nebo uložené záložky).
export default function RezervacePage() {
  redirect(RESERVIO_URL);
}
