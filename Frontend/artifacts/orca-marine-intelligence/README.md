# ORCA — Marine Ecosystem Intelligence

SIH 2026 demo cockpit for cautious, explainable marine decision support. This build runs entirely on simulated data and service abstractions.

## Run

```bash
pnpm install
pnpm dev
```

The app source is JavaScript/JSX (the provided shadcn scaffold may remain TypeScript). Set `VITE_DEMO_MODE=false` when a compatible API service is available. The service modules under `src/services` are intentionally small seams for replacing demo data with real providers. Axios is included for the future API boundary; Leaflet + React-Leaflet provide the current OpenStreetMap-backed map provider, and `vite-plugin-pwa` provides the installable shell.

## Scope and limitations

PFZ scores, weather, route time, risk and alerts are estimated demo values. ORCA is not a navigation system, does not replace official advisories, and should not be used as the sole basis for a voyage or fishing decision. Offline mode stores a lightweight local snapshot for continuity.