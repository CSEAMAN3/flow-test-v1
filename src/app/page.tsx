import CallNowButton from "@/components/CallNowButton";
import Hook from "@/components/Hook";
import { drainageServiceTabs, plumbingServiceTabs } from "@/lib/serviceTabs";
import Image from "next/image";
import Link from "next/link";
import Reviews from "@/components/Reviews";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* hero section */}
      <div className="bg-primary pt-16 md:pt-0">
        <div className="max-w-[1200px] px-8 mx-auto md:flex ">
          <div className="mb-16 sm:mb-0 flex-1 md:grid place-content-center">
            <h1 className="font-bold text-2xl lg:text-3xl text-white max-w-[23ch] mb-4">Fast, Reliable Emergency Drainage & Plumbing Services Across Norfolk</h1>
            <p className="text-white font-light max-w-[30ch] lg:max-w-[40ch] mb-12 md:mb-8">Block drain? Overflowing toilet? We&#39;re here to help 24/7 to fix your drainage and plumbing issues fast. Local experts you can count on.</p>
            <CallNowButton className="w-fit"/>
          </div>
          <div className="relative md:flex-1">
            <Image 
              src="/images/logo-spiral.svg"
              alt="spiral graphic"
              width={400}
              height={400}
              className="w-full sm:w-2/3 ml-auto md:w-full"
            />
            <Image 
              src="/images/worker.png"
              alt="flow plumbing and drainage worker"
              width={400}
              height={400}
              className="w-[60%] sm:w-[40%] absolute bottom-0 left-1/2 -translate-x-1/2 sm:-translate-x-[5%] md:w-[60%] md:-translate-x-1/2"
              quality={80}
            />
          </div>
        </div>
      </div>
      {/* Hook */}
      <Hook />
      {/* services section */}
      <div className="py-12 md:py-16 max-w-[1200px] mx-auto px-8">
        {/* drainage services */}
        <div className="grid md:grid-cols-2 place-content-center gap-8 mb-16">
          {/* content */}
          <div className="mb-12">
            <h2 className="text-dark-accent text-xl mb-2">OUR DRAINAGE SERVICES</h2>
            <h3 className="font-bold text-2xl max-w-[30ch] mb-2 text-balance">Experts in all aspects of commercial and domestic drainage services</h3>
            <p className="font-light mb-10 max-w-[48ch] text-pretty">At Flow Plumbing & Drainage, we provide a full range of drainage services for both residential and commercial customers. Whether you&#39;re dealing with a blocked pipe, need a CCTV survey, or require an emergency call out - our team is ready to respond quickly and professionally. With over 20 years experience and using the proven methods, we get the job done first time, with minimal disruption.</p>
            <Link 
              href="/drainage-services"
              className="font-bold px-8 py-4 bg-accent rounded-full hover:bg-primary hover:text-accent transition-colors duration-300"
            >Explore Drainage Services</Link>
          </div>
          {/* tabs */}
          <div className="grid gap-4">
            {drainageServiceTabs.map(tab => {
              return (
                <div 
                  key={tab.id}
                  className="flex w-full bg-light-grey justify-between items-center gap-4 pl-4 max-w-[500px] md:max-w-full"
                >
                  <Image 
                    src="/images/logo-spiral.svg"
                    alt="Flow Plumbing & Drainage Icon"
                    width={40}
                    height={40}
                    className=""
                  />
                  <h2 className="font-bold w-[240px]">{tab.title}</h2>
                  <Image 
                    src={`/images/${tab.photo}`}
                    alt="Flow Plumbing & Drainage Icon"
                    width={100}
                    height={100}
                    className="h-full object-cover border-l-4 border-accent"
                  />
                </div>
              )
            })}
          </div>
        </div>
        {/* Plumbing Services */}
        <div className="grid md:grid-cols-2 place-content-center gap-8 max-w-[1200px] mx-auto">
          {/* content */}
          <div className="mb-12 order-1 md:order-2">
            <h2 className="text-dark-accent text-xl mb-2">OUR PLUMBING SERVICES</h2>
            <h3 className="font-bold text-2xl max-w-[30ch] mb-2 text-balance">Qualified in all aspects of commercial and domestic plumbing services</h3>
            <p className="font-light mb-10 max-w-[48ch] text-pretty">Alongside our drainage expertise, we provide a wide range of plumbing services to homes and businesses across Norwich and Norfolk. From fixing leaks and burst pipes to installing new taps or toilets, our plumbers deliver fast, clean and high quality work. Whether it&#39;s a planned job or urgent repair, we&#39;er here to help 24 hours a day.</p>
            <Link 
              href="/plumbing-services"
              className="font-bold px-8 py-4 bg-accent rounded-full hover:bg-primary hover:text-accent transition-colors duration-300"
            >Explore Plumbing Services</Link>
          </div>
          {/* tabs */}
          <div className="grid gap-4 order-2 md:order-1">
            {plumbingServiceTabs.map(tab => {
              return (
                <div 
                  key={tab.id}
                  className="flex w-full bg-light-grey justify-between items-center gap-4 pl-4 max-w-[500px] md:max-w-full"
                >
                  <Image 
                    src="/images/logo-spiral.svg"
                    alt="Flow Plumbing & Drainage Icon"
                    width={40}
                    height={40}
                    className=""
                  />
                  <h2 className="font-bold w-[240px]">{tab.title}</h2>
                  <Image 
                    src={`/images/${tab.photo}`}
                    alt="Flow Plumbing & Drainage Icon"
                    width={100}
                    height={100}
                    className="h-full object-cover border-l-4 border-accent"
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>
      {/* review section */}
      <Reviews />
    </main>
  );
}
