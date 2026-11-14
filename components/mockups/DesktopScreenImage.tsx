import Image from "next/image";

const WIDTH = 1383;
const HEIGHT = 941;

type DesktopScreenImageProps = {
  priority?: boolean;
  className?: string;
};

export function DesktopScreenImage({
  priority = false,
  className = "h-auto w-full",
}: DesktopScreenImageProps) {
  return (
    <Image
      src="/desktop_site.png"
      alt="GreenBasket fresh groceries online storefront on desktop"
      width={WIDTH}
      height={HEIGHT}
      className={`block object-cover object-top ${className}`}
      sizes="(max-width: 1024px) 100vw, 1024px"
      priority={priority}
    />
  );
}

export const desktopScreenshotAspect = `${WIDTH} / ${HEIGHT}`;