import Image from "next/image"
import Link from "next/link"
import HeaderNav from "./HeaderNav"

export default function Header() {
  return (
    <header className="bg-primary py-8">
      <div className="max-w-[1200px] mx-auto px-8">
        <Link href={"/"}>
          <Image 
            src="/images/logo-white-green.svg"
            alt="Flow Plumbing and Drainage logo"
            width={100}
            height={100}
            className="w-[120px] md:w-[150px]"
          />
        </Link>
        <HeaderNav />
      </div>
    </header>
  )
}
