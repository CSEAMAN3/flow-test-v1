
import Image from "next/image"
import CallNowButton from "./CallNowButton"

export default function Cta() {
  return (
    <div className="bg-primary px-8 py-16 md:py-24">
      <Image 
        src="/images/24-7-icon.svg"
        alt="24/7 service icon"
        width={100}
        height={100}
        className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] mx-auto mb-4"
      />
      <h3 className="font-bold text-white text-center text-lg sm:text-xl md:text-2xl mb-2">Need Help Fast? We&#39;re Just a Call Away</h3>
      <p className="font-light text-white text-center mb-8 text-balance md:text-lg">24/7 emergency drainage and plumbing service across Norfolk</p>
      <CallNowButton className="mx-auto block w-fit" />
    </div>
  )
}
