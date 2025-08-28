import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Stop Paying 300% More for VMware Licensing | Opti9 AWS Migration",
    template: "%s | Opti9",
  },
  description:
    "Escape VMware's 300% licensing increase with Opti9's AWS migration solutions. Get 100% AWS funding, reduce costs, and modernize your infrastructure. Free assessment available.",
  keywords: [
    "VMware licensing increase",
    "Broadcom VMware costs",
    "AWS migration",
    "VMware to AWS",
    "cloud migration",
    "infrastructure modernization",
    "VMware alternative",
    "AWS Premier Partner",
    "Opti9",
    "enterprise cloud solutions",
  ],
  authors: [{ name: "Opti9" }],
  creator: "Opti9",
  publisher: "Opti9",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://opti9.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Stop Paying 300% More for VMware Licensing | Opti9",
    description:
      "Escape VMware's 300% licensing increase with Opti9's AWS migration solutions. Get 100% AWS funding and modernize your infrastructure.",
    url: "/",
    siteName: "Opti9",
    images: [
      {
        url: "/opti-9-logo.png",
        width: 1200,
        height: 630,
        alt: "Opti9 - VMware to AWS Migration Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stop Paying 300% More for VMware Licensing | Opti9",
    description:
      "Escape VMware's 300% licensing increase with Opti9's AWS migration solutions. Get 100% AWS funding and modernize your infrastructure.",
    images: ["/opti-9-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/opti-9-logo.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/opti-9-logo.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.json",
  verification: {
    // Add your verification codes here when you have them
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://opti9.com" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#01356A" />
        <meta name="msapplication-TileColor" content="#01356A" />
        <meta name="application-name" content="Opti9" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Opti9" />
        <meta name="mobile-web-app-capable" content="yes" />
        {/* Google Analytics - Replace with your actual GA4 ID */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        /> */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Opti9",
              url: "https://opti9.com",
              logo: "https://opti9.com/opti-9-logo.png",
              description:
                "AWS Premier Tier Partner specializing in VMware to AWS migration solutions",
              sameAs: [
                "https://aws.amazon.com/partners/find/partnerdetails/?n=Opti9",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "sales",
                url: "https://meetings.hubspot.com/drew-jenkins1",
              },
              offers: {
                "@type": "Offer",
                name: "VMware to AWS Migration",
                description:
                  "Complete VMware infrastructure migration to AWS with 100% funding programs",
                category: "Cloud Migration Services",
              },
            }),
          }}
        />

        <script
          async
          defer
          src="https://app.visitortracking.com/assets/js/tracer.js"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
      function init_tracer() { 
        var tracer = new Tracer({  
          websiteId : "2a9029b2-fc08-47ab-8ca0-ed5a504d8659",  
          async : true, 
          debug : false 
        }); 
      }
    `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
