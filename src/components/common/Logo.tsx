import Image from "next/image";

interface LogoInlineProps {
  className?: string;
}

export function LogoInline({ className = "" }: LogoInlineProps) {
  return (
    <div className={`flex flex-col leading-none ${className}`}>
      <div className="flex items-center gap-2">
        <Image
          src="/parallel-logo.png"
          alt=""
          width={170}
          height={40}
          style={{ maxWidth: "30%", height: "auto" }}
        />
        <span className="text-white">|</span>
        <Image
          src="/autoconnect-logo.png"
          alt=""
          width={200}
          height={40}
          style={{ maxWidth: "30%", height: "auto" }}
        />
      </div>
    </div>
  );
}
