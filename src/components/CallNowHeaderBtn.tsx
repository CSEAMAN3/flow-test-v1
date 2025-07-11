import Image from "next/image"

export default function CallNowHeaderBtn() {
  return (
    <a href="tel:+44797340793" aria-label="call our 24/7 service now" className="text-white font-bold text-xl hidden sm:block mr-16 lg:mr-0  hover:text-accent transition-colors duration-300">
      <Image 
        src="/images/24-7-icon.svg"
        alt="24/7 Call out"
        width={50}
        height={50}
        className="inline-block mr-2"
      />
      01603 339135
    </a>
  )
}
