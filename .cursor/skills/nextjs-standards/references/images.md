# Images

> Company OVERRIDE of Next.js image handling. Read this fully — it diverges from the framework default. Mechanics → `next-best-practices/image.md` (note the divergence below).

## Why this diverges

The company does **not** use Next.js built-in image optimization — it burns server CPU. Instead, a custom **AWS Lambda loader** compresses and serves WebP from the CDN/origin.

## REQUIRED

- Use the `next/image` **`<Image>` component** (still mandatory — never raw `<img>`).
- Route every image through the **custom AWS Lambda loader** (below). **Wire it globally** via `images.loader: "custom"` + `images.loaderFile` in `next.config` — then you do NOT pass a `loader` prop per `<Image>`. Use the per-`<Image>` `loader` prop only if the loader is not configured globally. Don't do both (redundant).
- Always provide `alt`, and either `width`/`height` or `fill`.
- **Always set `sizes` to match the actual layout** — look at the container's CSS and derive the value from it. Do not copy a string blindly.

  **How to derive `sizes`:** For each breakpoint, ask "how wide is the image's container relative to the viewport?" then express that:

  | Layout at that breakpoint | `sizes` segment |
  | --- | --- |
  | Full viewport width | `100vw` |
  | Fixed width (e.g. 640 px max) | `min(100vw, 640px)` |
  | Half the page | `50vw` |
  | One-third of the page | `33vw` |
  | Inside a 4-column grid | `25vw` |

  Example for a hero that is full-width on mobile, half-width on tablet, and one-third on desktop:

  ```tsx
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  ```

  Example for a card thumbnail in a 3-column grid (each column ~33% with a 1rem gap):

  ```tsx
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
  ```

  If the image is always the same fixed pixel width, use that fixed width directly (e.g. `sizes="320px"`).

- Configure allowed `remotePatterns` in `next.config` for remote sources.

### The loader (ship exactly this)

```ts
'use client'; // Required for Next.js App Router

interface ImageLoaderParams {
  src: string;
  width: number;
  quality?: number;
}

export default function awsLambdaLoader({ src, width, quality }: ImageLoaderParams): string {
  if (!src) return src;
  try {
    const url = new URL(src);
    url.searchParams.set('w', width.toString());
    url.searchParams.set('q', (quality || 75).toString());
    url.searchParams.set('ext', 'webp');
    return url.toString();
  } catch {
    const separator = src.includes('?') ? '&' : '?';
    const params = new URLSearchParams({
      w: width.toString(),
      q: (quality || 75).toString(),
      ext: 'webp',
    });
    return `${src}${separator}${params.toString()}`;
  }
}
```

## FORBIDDEN

- Raw `<img>` tags.
- Next.js built-in image optimization (the default optimizer) — it spikes server CPU.
- Omitting `sizes`, `alt`, or dimensions.
- Copying a `sizes` string without checking what the container's actual width is at each breakpoint.

## Checklist

- [ ] `<Image>` used (no raw `<img>`).
- [ ] AWS Lambda loader wired (prop or config).
- [ ] `sizes` derived from actual container layout (not copied blindly).
- [ ] `alt` + dimensions (`width`/`height` or `fill`) present.
- [ ] Remote host in `remotePatterns`.

## Don't rationalize

| Excuse | Reality |
|--------|---------|
| "Next's optimizer is built in, just use it" | Forbidden — CPU cost. Use the Lambda loader. |
| "I'll use the example sizes string from the skill" | Look at the actual container width. Derive `sizes` from the layout — never copy blindly. |
| "`<img>` is simpler" | `<Image>` + loader is mandatory for perf + lazy-load. |
