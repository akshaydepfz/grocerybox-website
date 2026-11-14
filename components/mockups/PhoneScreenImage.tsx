import Image from "next/image";

type PhoneScreenImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
};

export function PhoneScreenImage({
  src,
  alt,
  priority = false,
}: PhoneScreenImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={1179}
      height={2556}
      className="h-full w-full object-cover object-top"
      sizes="(max-width: 768px) 160px, 220px"
      priority={priority}
    />
  );
}