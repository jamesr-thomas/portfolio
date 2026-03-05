import { Metadata } from "next";
import ResumeContent from "@/components/ResumeContent";

export const metadata: Metadata = {
  title: "Resume | James Thomas",
  description: "Resume of James Thomas - IT Professional & Software Developer",
};

export default function ResumePage() {
  return <ResumeContent />;
}
