interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export function Logo({ className = '', variant = 'light' }: LogoProps) {
  const fillColor = variant === 'light' ? '#c4c4c4' : '#0D0D0D';

  return (
    <svg
      viewBox="0 0 220 80"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill={fillColor}>
        <path d="M4 32L12 8h8l8 24h-6l-1.5-5h-9L10 32H4zm10.5-20l-3 10h7l-3-10h-1z" transform="skewX(-12)" />
        <path d="M34 8v6h-6v18h-6V14h-6V8h18z" transform="translate(4,0) skewX(-12)" />
        <path d="M52 8h6v14c0 6-4 10-10 10s-10-4-10-10V8h6v14c0 2.5 1.5 4 4 4s4-1.5 4-4V8z" transform="translate(2,0) skewX(-12)" />
        <path d="M78 8v6h-8v4h7v6h-7v4h8v6H64V8h14z" transform="translate(-6,0) skewX(-12)" />
        <path d="M84 20c0-7 5-12 12-12s12 5 12 12-5 12-12 12-12-5-12-12zm18 0c0-4-2.5-6-6-6s-6 2-6 6 2.5 6 6 6 6-2 6-6z" transform="translate(-8,0) skewX(-12)" />

        <path d="M8 72c-6 0-10-4-10-12s4-12 10-12c5 0 9 3 10 8h-6c-.5-2-2-3-4-3-3 0-4 2.5-4 7s1 7 4 7c2 0 3.5-1 4-3h6c-1 5-5 8-10 8z" transform="translate(6,0) skewX(-12)" />
        <path d="M34 60c0-7 5-12 12-12s12 5 12 12-5 12-12 12-12-5-12-12zm18 0c0-4-2.5-6-6-6s-6 2-6 6 2.5 6 6 6 6-2 6-6z" transform="translate(1,0) skewX(-12)" />
        <path d="M62 48h6l10 14V48h6v24h-6l-10-14v14h-6V48z" transform="translate(0,0) skewX(-12)" />
        <path d="M88 48h6l10 14V48h6v24h-6l-10-14v14h-6V48z" transform="translate(-2,0) skewX(-12)" />
        <path d="M128 48v6h-8v4h7v6h-7v4h8v6h-14V48h14z" transform="translate(-8,0) skewX(-12)" />
        <path d="M134 72c-6 0-10-4-10-12s4-12 10-12c5 0 9 3 10 8h-6c-.5-2-2-3-4-3-3 0-4 2.5-4 7s1 7 4 7c2 0 3.5-1 4-3h6c-1 5-5 8-10 8z" transform="translate(-8,0) skewX(-12)" />
        <path d="M150 48v6h-6v18h-6V54h-6v-6h18z" transform="translate(-6,0) skewX(-12)" />
      </g>
    </svg>
  );
}

export function LogoInline({ className = '' }: LogoProps) {
  return (
    <div className={`flex flex-col leading-none ${className}`}>
      <div className="flex items-center gap-2">
        <img width={170} style={{ maxWidth: '30%' }} src="/parallel-logo.png" alt="" />
        <span className="text-white">|</span>
        <img width={200} style={{ maxWidth: '30%' }} src="/autoconnect-logo.png" alt="" />
      </div>
    </div>
  );
}

export function LogoVertical({ className = '', variant = 'light' }: LogoProps) {
  const fillColor = variant === 'light' ? '#6b7280' : '#0D0D0D';

  return (
    <>
      <img width={200} src="/parallel-logo.png" alt="" />
      |
      <img width={200} src="/autoconnect-logo.png" alt="" />
    </>
  );
}
