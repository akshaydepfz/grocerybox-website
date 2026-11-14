type BrowserChromeProps = {
  url?: string;
  className?: string;
};

export function BrowserChrome({
  url = "greenbasket.grocerybox.in",
  className = "",
}: BrowserChromeProps) {
  return (
    <div
      className={`flex items-center gap-2 border-b border-white/10 bg-[#0a2919] px-3 py-2 ${className}`}
    >
      <div className="flex gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
      </div>
      <div className="mx-auto flex max-w-[70%] flex-1 items-center justify-center rounded-md bg-black/25 px-3 py-1 text-[10px] text-secondary-text md:text-xs">
        <span className="truncate">{url}</span>
      </div>
    </div>
  );
}