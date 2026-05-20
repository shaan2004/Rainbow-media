import { Metadata } from "next";

export function constructMetadata({
  title = "BillIT NOW — Billing Made Simple | India's Best Billing Software",
  description = "BillIT NOW is a powerful digital billing software for Indian businesses. Paperless billing, real-time inventory management, staff sales tracking, mobile access. Tiers starting from ₹14,999/yr.",
  image = "/og/og-image.png",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    keywords: [
      "billing software",
      "invoice software India",
      "GST billing",
      "inventory management",
      "BillIT NOW",
      "paperless invoicing Chennai",
      "retail software"
    ],
    authors: [{ name: "Rainbow Media" }],
    creator: "Rainbow Media",
    publisher: "Rainbow Media",
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    alternates: {
      canonical: "https://billitnow.com",
    },
    openGraph: {
      title,
      description,
      url: "https://billitnow.com",
      siteName: "BillIT NOW",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: "BillIT NOW - Modern Billing SaaS dashboard preview",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@rainbowmedia",
    },
    metadataBase: new URL("https://billitnow.com"),
  };
}
