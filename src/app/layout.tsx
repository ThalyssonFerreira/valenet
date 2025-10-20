import "./globals.css";
import "@/styles/variables.css";
import "@/styles/base.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";

const SITE = "https://valenet-site.vercel.app"; 

export const metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Vale Net — Internet Fibra e Via Rádio",
    template: "%s | Vale Net",
  },
  description: "Provedor de internet com planos rápidos, estáveis e suporte.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE,
    title: "Vale Net — Internet Fibra e Via Rádio",
    description: "Planos residenciais e empresariais com instalação ágil e suporte.",
    siteName: "Vale Net",
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vale Net — Internet Fibra e Via Rádio",
    description: "Planos residenciais e empresariais com instalação ágil e suporte.",
    images: ["/og.jpg"],
  },
  icons: { icon: "/favicon.ico" },
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
