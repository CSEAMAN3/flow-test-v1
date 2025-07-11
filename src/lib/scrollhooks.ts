import { type iconMap } from "@/components/iconMaps";

export const scrollHooks: {
  id: number;
  title: string;
  icon: keyof typeof iconMap;
}[] = [
  {
    id: 1,
    title: "24/7 Emergency Callout",
    icon: "FaPhoneVolume",
  },
  {
    id: 2,
    title: "Covering Norfolk",
    icon: "FaLocationDot",
  },
  {
    id: 3,
    title: "No Hidden Fees",
    icon: "FaHandshakeAngle",
  },
];
