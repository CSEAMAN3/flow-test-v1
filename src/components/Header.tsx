import Image from "next/image"
import Link from "next/link"
import HeaderNav from "./HeaderNav"
import CallNowHeaderBtn from "./CallNowHeaderBtn"


export default function Header() {
  return (
    <header className="bg-primary py-8">
      <div className="max-w-[1200px] mx-auto px-8 flex justify-between">
        <Link href={"/"} className="w-fit block">
          <Image 
            src="/images/flow_tap_logo.svg"
            alt="Flow Plumbing and Drainage logo"
            width={100}
            height={100}
            className="w-[120px] sm:w-[150px]"
          />
        </Link>
        <HeaderNav />
        <CallNowHeaderBtn />
      </div>
    </header>
  )
}
