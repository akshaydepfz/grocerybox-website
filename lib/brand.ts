export const appUrl = "https://app.grocerybox.in" as const;

export const brand = {
  name: "GroceryBox",
  tagline: "Your Business. Your Online Store.",
  storeName: "GreenBasket",
  colors: {
    forest: "#071D13",
    darkGreen: "#103D27",
    primary: "#167A43",
    lime: "#C8F169",
    lightLime: "#D8FF72",
    white: "#FFFFFF",
    softBg: "#F6F8F3",
    secondaryText: "#A8B8AC",
  },
} as const;

export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
] as const;