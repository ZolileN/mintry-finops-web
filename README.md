# Mintry Fabric — FinOps TLS Sidecar Proxy

Mintry Fabric is a transparent, zero-touch Man-in-the-Middle (MITM) proxy designed exclusively for FinTech microservices. It intercepts, encrypts, and caches expensive third-party financial API calls (e.g., Credit Bureaus, KYC, AML checks) at the network layer, reducing operational expenditures and latency without requiring backend application changes.

---

## 🛠️ Technology Stack

This landing page and waitlist submission portal is built using:
- **Framework**: [Next.js](https://nextjs.org/) (App Router, TypeScript)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Database**: [Turso](https://turso.tech/) (Edge-hosted SQLite via `@libsql/client`) for storing early access waitlist subscriptions.
- **Analytics**: [Aptabase](https://aptabase.com/) (Privacy-first, open-source telemetry tracking) to monitor conversion funnels and form validation interactions.

---

## 🚀 Getting Started

### 1. Clone & Install Dependencies

```bash
git clone <repository-url>
cd mintry-fintech-web
npm install
```

### 2. Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
# Turso Database Configuration
TURSO_DATABASE_URL=libsql://mintry-finops-zolilen.aws-eu-west-1.turso.io
TURSO_AUTH_TOKEN=your_turso_auth_token_here

# Aptabase Analytics Configuration
NEXT_PUBLIC_APTABASE_KEY=your_aptabase_key_here
```

### 3. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the page.

---

## 📂 Project Structure

- `src/app/` — Next.js layout, styles, and API route entrypoints.
  - `src/app/api/waitlist/route.ts` — Serverless route that interfaces with Turso to validate and insert waitlist registrations.
  - `src/app/layout.tsx` — Handles global metadata, neon-grid overlays, and initial provider wrappers.
- `src/components/` — Shared landing page modules:
  - `WaitlistForm.tsx` — Client-side waitlist component featuring `framer-motion` state animations and Aptabase event hooks (`waitlist_submission_success`, `waitlist_submission_failed`, etc.).
  - `Providers.tsx` — Client-side wrappers initializing `<AptabaseProvider>`.
  - `Terminal.tsx`, `LogicFabric.tsx`, `CodeProof.tsx` — Interactive UI layouts demonstrating proxy logs and configuration setups.

---

## 🔒 Security & Git Practices

Do **not** commit sensitive tokens (`TURSO_AUTH_TOKEN`, `NEXT_PUBLIC_APTABASE_KEY`) directly to the repository or hardcode them as fallbacks inside components. Always rely on `.env.local` for local development and standard environment secrets for production pipelines.
