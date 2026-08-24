import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

const title = "Mengchen Fan — Distributed AI Researcher";
const description =
  "Mengchen Fan is a doctoral researcher in distributed learning, efficient medical AI, and multimodal data fusion.";

export async function generateMetadata(): Promise<Metadata> {
  const headerStore = await headers();
  const host =
    headerStore.get("x-forwarded-host") ??
    headerStore.get("host") ??
    "localhost:3000";
  const protocol =
    headerStore.get("x-forwarded-proto") ??
    (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  const socialImage = `${origin}/og.png`;

  return {
    metadataBase: new URL(origin),
    title,
    description,
    alternates: { canonical: "/" },
    openGraph: {
      type: "website",
      title,
      description,
      url: origin,
      siteName: "Mengchen Fan",
      images: [
        {
          url: socialImage,
          width: 1680,
          height: 945,
          alt: "Mengchen Fan — Learning across boundaries",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
