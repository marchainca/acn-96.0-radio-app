import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ACN Radio App · Propuestas de Frontend" },
      {
        name: "description",
        content:
          "Tres mockups estáticos en HTML para la app móvil de ACN Radio 96.0 FM (Palmira, Valle del Cauca).",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const options = [
    {
      id: 1,
      name: "Sereno Corporativo",
      desc: "Azul marino + rojo ACN. Inter, minimalismo, contraste alto. Transmite institucionalidad y confianza.",
      href: "/mockups/opcion-1.html",
      bg: "linear-gradient(160deg,#0B1B33,#1E3A5F)",
    },
    {
      id: 2,
      name: "Cercano Editorial",
      desc: "Papel cálido, serif Fraunces + Manrope, rojo ACN protagonista. Sensación de revista comunitaria.",
      href: "/mockups/opcion-2.html",
      bg: "linear-gradient(160deg,#FBF7F1,#E0A458)",
    },
    {
      id: 3,
      name: "Tecnológico Oscuro",
      desc: "Interfaz oscura tipo panel broadcast. Space Grotesk + mono, glow rojo, datos en vivo.",
      href: "/mockups/opcion-3.html",
      bg: "radial-gradient(circle at 30% 30%,#1a1220,#05070B)",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="mx-auto max-w-6xl px-6 pt-16 pb-10">
        <div className="text-xs uppercase tracking-[0.24em] text-slate-400">
          ACN Radio App · Palmira, Valle
        </div>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">
          Tres propuestas de frontend
        </h1>
        <p className="mt-4 max-w-2xl text-slate-300 leading-relaxed">
          Mockups estáticos en HTML con navegación entre pantallas (Inicio,
          Programación, Podcasts, Comunidad y Perfil). Cada propuesta explora
          una dirección visual distinta manteniendo coherencia con la identidad
          de ACN Radio 96.0 FM.
        </p>
        <a
          href="/mockups/index.html"
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-red-500 bg-red-500/10 px-5 py-2.5 text-sm font-semibold text-red-300 hover:bg-red-500/20"
        >
          Abrir galería completa →
        </a>
      </header>

      <main className="mx-auto grid max-w-6xl gap-6 px-6 pb-24 md:grid-cols-3">
        {options.map((o) => (
          <a
            key={o.id}
            href={o.href}
            className="group block overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 transition hover:border-red-500"
          >
            <div
              className="flex aspect-[4/5] items-center justify-center"
              style={{ background: o.bg }}
            >
              <div className="text-7xl font-bold text-white/80">0{o.id}</div>
            </div>
            <div className="p-5">
              <div className="text-xs uppercase tracking-widest text-red-400">
                Opción {o.id}
              </div>
              <div className="mt-1 text-xl font-bold">{o.name}</div>
              <p className="mt-2 text-sm text-slate-400">{o.desc}</p>
              <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-red-400 transition group-hover:translate-x-1">
                Ver mockup →
              </div>
            </div>
          </a>
        ))}
      </main>
    </div>
  );
}
