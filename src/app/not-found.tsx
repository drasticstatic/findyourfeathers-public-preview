import type { Metadata } from "next";
import NotFoundContent from "@/components/NotFoundContent";

export const metadata: Metadata = {
  title: "Lost? — Find Your Feathers",
};

export default function NotFound() {
  return <NotFoundContent />;
}
