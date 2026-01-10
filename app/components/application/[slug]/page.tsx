import Link from "next/link";
import { notFound } from "next/navigation";
import { getComponentBySlug, applicationComponents } from "@/lib/data/components";
import ComponentPreview from "@/app/components/ComponentPreview";
import { ComponentDetailClient } from "./ComponentDetailClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return applicationComponents.map((component) => ({
    slug: component.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const component = getComponentBySlug("application", slug);

  if (!component) {
    return { title: "Component Not Found - Joko UI" };
  }

  return {
    title: `${component.name} - Application Components - Joko UI`,
    description: component.description,
  };
}

export default async function ComponentDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const component = getComponentBySlug("application", slug);

  if (!component) {
    notFound();
  }

  return <ComponentDetailClient component={component} />;
}
