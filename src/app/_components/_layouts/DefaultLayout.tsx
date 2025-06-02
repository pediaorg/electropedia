import { Navbar } from "@/app/_components/navbar";
import { JSXChildren } from "@/app/lib/types";
import RootLayout from "@/app/_components/_layouts/RootLayout";

export default function DefaultLayout({ children }: { children: JSXChildren }) {
  return (
    <RootLayout>
      {/*<Navbar />*/}

      <main className="bg-background">{children}</main>
    </RootLayout>
  );
}
