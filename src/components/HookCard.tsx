
import { iconMap } from "./iconMaps";

interface HookCardProps {
  title: string;
  icon: keyof typeof iconMap;
}

export default function HookCard({title, icon} : HookCardProps) {

  const IconComponent = iconMap[icon]

  return (
    <div className="relative h-[40px] overflow-hidden min-w-[400px] w-[33%] flex justify-center items-center gap-4">
      {IconComponent && <IconComponent className="text-xl" />}
      <h3 className="font-bold">{title}</h3>
    </div>
  )
}


{/* <FaPhoneVolume />
<FaLocationDot />
<FaHandshakeAngle /> */}
