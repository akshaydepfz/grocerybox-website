import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  variant?: "light" | "dark";
  showWordmark?: boolean;
};

export function Logo({ variant = "light", showWordmark = true }: LogoProps) {
  const textClass = variant === "light" ? "text-white" : "text-forest";

  return (
    <Link href="#hero" className="group flex items-center gap-2.5">
      <Image
        src="/logo.png"
        alt="GroceryBox"
        width={44}
        height={44}
        className="h-10 w-10 object-contain transition-transform group-hover:scale-105 sm:h-11 sm:w-11"
        priority
      />
      {showWordmark ? (
        <span className={`text-lg font-bold tracking-tight ${textClass}`}>
          Grocery<span className="text-lime">Box</span>
        </span>
      ) : null}
    </Link>
  );
}