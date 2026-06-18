import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Cherry_Bomb_One, Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const cherryBomb = Cherry_Bomb_One({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", inter.variable)}>
      <body>
        <header className="p-4">
          <h1 className="text-3xl font-bold">Kiki’s Delivery Service</h1>
          <nav>
            <Button variant="ghost" size="sm">
              <Link href="/">Home</Link>
            </Button>
            <Button variant="ghost" size="sm">
              <Link href="/deliveries">Deliveries</Link>
            </Button>

            <Button variant="ghost" size="sm">
              <Link href="/deliveries/new">New Delivery</Link>
            </Button>
          </nav>
        </header>
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
