import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "./LanguageProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://cliberai.com"),
  title: "Cliber AI — Intelligence, Specialized",
  description:
    "We build AI systems that master specific domains. Our tools don't just assist — they understand the rules, the context, and the stakes.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Cliber AI — Intelligence, Specialized",
    description:
      "We build AI systems that master specific domains. Our tools don't just assist — they understand the rules, the context, and the stakes.",
    url: "https://cliberai.com",
    siteName: "Cliber AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cliber AI — Intelligence, Specialized",
    description:
      "We build AI systems that master specific domains. Our tools don't just assist — they understand the rules, the context, and the stakes.",
  },
  alternates: {
    canonical: "https://cliberai.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("cliber-theme");if(t==="light")return;if(t==="dark"||((!t||t==="system")&&window.matchMedia("(prefers-color-scheme:dark)").matches)){document.documentElement.classList.add("dark")}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="font-body antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
