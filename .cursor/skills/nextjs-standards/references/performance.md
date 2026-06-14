# Performance & Caching

> Company rule for caching strategy and bundle/runtime performance. Mechanics → `next-best-practices/bundling.md`, `suspense-boundaries.md`, `image.md`, `font.md`.

## Caching — cache-first (company standard)

### REQUIRED

- **Default to caching / ISR.** Pass a sensible `revalidate` (seconds) to data fetches; let static content stay static.
- **Opt out of caching only with a reason** (truly live / per-request data) — and only for that one fetch/route, not globally.
- Use Next's primitives deliberately: `revalidate`, `'use cache'`, route segment config, `staleTimes`.

```ts
// cache-first default in the service layer
return serverPageFetchRequest<Project>(`/projects/${slug}`, 60, locale); // revalidate 60s
// live data — scoped opt-out, with a reason:
return serverPageFetchRequest<Quote>(`/quote/${id}`, 0, locale);          // pricing must be live
```

### FORBIDDEN

- Blanket `no-store` / `revalidate: 0` everywhere "to be safe."
- Disabling caching globally in `next.config` headers without a documented reason.

## Bundle & runtime

### REQUIRED

- **Lazy-load heavy client libraries** (animation/canvas/carousel/physics — e.g. gsap, p5, matter-js, swiper) via `next/dynamic` / dynamic `import()`, client-side, below the fold.
- Keep heavy deps out of the shared/server bundle; keep client components small.
- Images via the Lambda loader ([images.md](images.md)); fonts via `next/font`.

```tsx
// dynamic import for a heavy, client-only, below-the-fold component
import dynamic from "next/dynamic";

const HeavyCanvas = dynamic(() => import("@/src/components/HeavyCanvas"), {
  ssr: false,
  loading: () => <div className="min-h-[400px]" />,
});
```

### FORBIDDEN

- Importing a heavy animation/canvas lib at the top of a shared module.
- Shipping large client bundles when the work could be server-side.

## Checklist

- [ ] Caching on by default; opt-outs are scoped + justified.
- [ ] Heavy client libs dynamically imported (`ssr: false` where DOM-only).
- [ ] No global cache-disable without reason.
- [ ] Images/fonts optimized per their refs.

## Don't rationalize

| Excuse | Reality |
|--------|---------|
| "no-store everywhere is safest" | It wastes the platform. Cache-first; opt out per-case with a reason. |
| "Dynamic import is extra work" | Heavy libs in the main bundle tank load time. Lazy-load them. |
| "I'll import gsap at the top, it's fine" | Pulls it into the bundle for everyone. Import it in the client leaf that uses it. |
