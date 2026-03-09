"use client"

import { CodeBlock, Callout } from "@/components/doc-components"

export default function DockerPage() {
  return (
    <div className="space-y-6">
      <h1 id="docker" className="text-3xl font-bold tracking-tight text-text-primary">
        Docker
      </h1>
      <p className="text-text-secondary leading-relaxed">
        O NinDuelist inclui um Dockerfile para deploy em containers (Alpine).
      </p>

      <div className="chakra-line" />

      <h2 id="uso-basico" className="text-xl font-semibold text-text-primary">Uso básico</h2>
      <CodeBlock language="bash">
        {`docker build -t ninduelist .\ndocker run --env-file .env ninduelist`}
      </CodeBlock>

      <h2 id="docker-compose" className="text-xl font-semibold text-text-primary">Docker Compose</h2>
      <p className="text-sm text-text-secondary leading-relaxed">
        Exemplo de configuração com PostgreSQL local:
      </p>
      <CodeBlock filename="docker-compose.yml" language="yaml">
        {`version: '3.8'
services:
  bot:
    build: .
    env_file: .env
    depends_on:
      - db
    restart: unless-stopped

  db:
    image: postgres:15-alpine
    environment:
      POSTGRES_DB: ninduelist
      POSTGRES_USER: nin
      POSTGRES_PASSWORD: secret
    volumes:
      - pgdata:/var/lib/postgresql/data
    ports:
      - "5432:5432"

volumes:
  pgdata:`}
      </CodeBlock>

      <h2 id="comandos" className="text-xl font-semibold text-text-primary">Comandos úteis</h2>
      <CodeBlock language="bash">
        {`# Build e iniciar\ndocker compose up -d --build\n\n# Ver logs\ndocker compose logs -f bot\n\n# Parar\ndocker compose down`}
      </CodeBlock>

      <Callout type="tip">
        Use volumes para persistir dados do PostgreSQL entre restarts.
      </Callout>
    </div>
  )
}
