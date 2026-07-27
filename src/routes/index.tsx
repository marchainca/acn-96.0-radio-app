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
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="mx-auto max-w-4xl px-6 pt-16 pb-10">
        <div className="text-xs uppercase tracking-[0.24em] text-slate-400">
          ACN Radio App · Palmira, Valle
        </div>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">
          Sereno Corporativo
        </h1>
        <p className="mt-4 max-w-2xl text-slate-300 leading-relaxed">
          Mockup estático en HTML con navegación entre pantallas (Inicio,
          Programación, Podcasts, Comunidad y Perfil). Azul marino profundo,
          tipografía Inter y detalles en rojo ACN: transmite institucionalidad
          y confianza.
        </p>
        <a
          href="/mockups/opcion-1.html"
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-red-500 bg-red-500/10 px-5 py-2.5 text-sm font-semibold text-red-300 hover:bg-red-500/20"
        >
          Abrir mockup →
        </a>
      </header>

      <main className="mx-auto max-w-4xl px-6 pb-24">
        <a
          href="/mockups/opcion-1.html"
          className="group block overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 transition hover:border-red-500"
        >
          <div
            className="flex aspect-[16/9] items-center justify-center"
            style={{ background: "linear-gradient(160deg,#0B1B33,#1E3A5F)" }}
          >
            <div className="text-8xl font-bold text-white/80">ACN</div>
          </div>
          <div className="p-6">
            <div className="text-xs uppercase tracking-widest text-red-400">
              Propuesta única
            </div>
            <div className="mt-1 text-2xl font-bold">Sereno Corporativo</div>
            <p className="mt-2 text-sm text-slate-400">
              Azul marino + rojo ACN. Inter, minimalismo, contraste alto.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-red-400 transition group-hover:translate-x-1">
              Ver mockup →
            </div>
          </div>
        </a>
      </main>
    </div>
  );
}
