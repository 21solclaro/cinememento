import "@/app/globals.css";

import { NavBar } from "../../components/nav-bar";
import { Metadata } from "next";
import { Contact, FileQuestion, Info, Notebook } from "lucide-react";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "cineMemento",
};

const navItems = [
  {
    href: "/info/about",
    icon: <Info />,
    title: "cineMEmentoについて",
  },
  {
    href: "/info/contact",
    icon: <Contact />,
    title: "コンタクト",
  },
  {
    href: "/info/faq",
    icon: <FileQuestion />,
    title: "Q & A",
  },
  {
    href: "/info/privacy",
    icon: <Notebook />,
    title: "プライバシーポリシー",
  },
  {
    href: "/info/terms",
    icon: <Notebook />,
    title: "利用規約",
  },
];

type InfoLayoutProps = { children: React.ReactNode };

export default function InfoLayout({ children }: InfoLayoutProps) {
  return (
    <div className="flex flex-1 flex-col md:flex-row">
      <aside className="md:w-72">
        <NavBar items={navItems} />
      </aside>
      <main className="flex-1">{children}</main>
    </div>
  );
}
