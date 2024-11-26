import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const formatAddress = (address: string): string => {
  if(address.length <= 4) return address
  return `${address.slice(0, 4)}…${address.slice(address.length - 4, address.length)}`;
};

export const formatMoney = (amount: number): string => new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
}).format(amount).replace("$", "").replace(".00", "");
