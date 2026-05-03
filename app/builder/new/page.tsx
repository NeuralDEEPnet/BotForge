import { redirect } from "next/navigation";

export default function NewBotPage() {
  const newId = Math.random().toString(36).substring(2, 9);
  redirect(`/builder/${newId}`);
}
