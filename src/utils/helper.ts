export const openModel = (ref: HTMLElement, overlay: HTMLElement): void => {
  ref?.classList.add("nav_mobile");
  overlay?.classList.remove("hidden");
};

export const closeModel = (ref: HTMLElement, overlay: HTMLElement): void => {
  ref?.classList.remove("nav_mobile");
  overlay?.classList.add("hidden");
};

export const links: { to: string; text: string }[] = [
  { to: "#how-it-works", text: "How it works" },
  { to: "#meals", text: "Meals" },
  { to: "#testimonials", text: "Testimonials" },
  { to: "#pricing", text: "Pricing" },
  { to: "#try-for-free", text: "Try for free" },
];
export const imgs: string[] = [
  "customer-1",
  "customer-4",
  "customer-5",
  "customer-6",
  "customer-2",
  "customer-3",
];
export const steps: {
  img: string;
  num: string;
  title: string;
  description: string;
}[] = [
  {
    num: "01",
    title: "Tell us what you like (and what not)",
    description:
      "Never again waste time thinking about what to eat! Omnifood AI will create a 100% personalized weekly meal plan just for you. It makes sure you get all the nutrients and vitamins you need, no matter what diet you follow!",
    img: "app-screen-1",
  },
  {
    num: "02",
    title: "Approve your weekly meal plan",
    description:
      "Once per week, approve the meal plan generated for you by Omnifood AI. You can change ingredients, swap entire meals, or even add your own recipes.",
    img: "app-screen-2",
  },
  {
    num: "03",
    img: "app-screen-3",
    title: "Receive meals at convenient time",
    description:
      "Best chefs in town will cook your selected meal every day, and we will deliver it to your door whenever works best for you. You can change delivery schedule and address daily!",
  },
];

export const logos: string[] = [
  "business-insider",
  "the-new-york-times",
  "forbes",
  "usa-today",
  "techcrunch",
];

export const testimonials: { description: string; name: string }[] = [
  {
    description:
      "I got Omnifood for the whole family, and it frees up so much time! Plus, everything is organic and vegan and without plastic.",
    name: "john",
  },
  {
    description:
      "Inexpensive, healthy and great-tasting meals, without even having to order manually! It feels truly magical.",
    name: "dave",
  },
  {
    description:
      "Omnifood is a life saver! I just started a company, so there's no time for cooking. I couldn't live without my daily meals now!",
    name: "steve",
  },
  {
    description:
      "The AI algorithm is crazy good, it chooses the right meals for me every time. It's amazing not to worry about food anymore!",
    name: "ben",
  },
];

export const options = [
  { value: "", label: "Please choose one option:" },
  { value: "friends", label: "Friends and family" },
  { value: "youTube", label: "YouTube video" },
  { value: "podcast", label: "Podcast" },
  { value: "facebook", label: "Facebook ad" },
  { value: "others", label: "Others" },
];

export const pricing: {
  title: string;
  price: string;
  description: string;
  details: string[];
}[] = [
  {
    title: "Starter",
    price: "399",
    description: "per month. That's just $13 per meal!",
    details: [
      "1 meal per day",
      "Order from 11am to 9pm",
      "Delivery is free",
      "",
    ],
  },
  {
    title: "Complete",
    price: "649",
    description: "per month. That's just $11 per meal!",
    details: [
      "2 meal per day",
      "Order 24/7",
      "Delivery is free",
      "Get access to latest recipes",
    ],
  },
];
