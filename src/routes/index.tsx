import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ACN Radio App · Sereno Corporativo" },
      {
        name: "description",
        content:
          "Mockup estático en HTML para la app móvil de ACN Radio 96.0 FM (Palmira, Valle del Cauca) — dirección visual Sereno Corporativo.",
      },
      { property: "og:title", content: "ACN Radio App · Sereno Corporativo" },
      {
        property: "og:description",
        content:
          "Mockup navegable de la app móvil de ACN Radio con navegación entre Inicio, Programación, Podcasts, Comunidad y Perfil.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/mockups/opcion-1.html"
      title="ACN Radio App · Sereno Corporativo"
      className="h-screen w-screen border-0 block"
    />
  );
}
