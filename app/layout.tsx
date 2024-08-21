import "./globals.css";

import { Toaster } from "@/components/ui/toaster";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { SideBar } from "@/components/side-bar";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "cineMemento",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="min-h-dvh bg-muted/30 flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <div className="flex flex-1">
            <aside className="px-6 py-10 hidden md:block md:w-72">
              <SideBar />
            </aside>
            <main className="flex-1">{children}</main>
          </div>
          <Toaster />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
