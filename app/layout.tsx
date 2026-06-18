import { Cherry_Bomb_One, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

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
    <html lang="en" className={cn(cherryBomb.className, "font-sans", geist.variable)}>
      <body>
        <header>
          <h1 className="text-3xl font-bold">Kiki’s Delivery Service</h1>
        </header>
        {children}
      </body>
    </html>
  );
}
