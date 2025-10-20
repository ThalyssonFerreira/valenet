import "./globals.css";
import "@/styles/variables.css";
import "@/styles/base.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";

export const metadata = {
  title: "Valenet — Internet Fibra",
  description: "Provedor de internet com planos rápidos e suporte humano.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  );
}
