"use client"

export function PageContent() {
  return (
    <div className="space-y-6">
      <h1 id="contato" className="text-3xl font-bold tracking-tight text-text-primary">
        Contato
      </h1>
      <p className="text-text-secondary leading-relaxed">
        Para solicitar acesso ao NinDuelist no seu servidor, envie um e-mail para{" "}
        <a
          href="mailto:contatolucasmaclean@gmail.com"
          className="text-chakra hover:underline"
        >
          contatolucasmaclean@gmail.com
        </a>
        .
      </p>
    </div>
  )
}
