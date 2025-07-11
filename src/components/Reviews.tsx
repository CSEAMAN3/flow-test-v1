import { FcGoogle } from "react-icons/fc";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
import ReviewSlider from "./ReviewSlider";

export default function Reviews() {
  return (
    <div className="bg-light-grey">
    {/* <div className=" max-w-[1200px] mx-auto px-8 pt-12 pb-34 relative ">
      <h3 className="text-xl text-balance font-bold text-dark-accent text-center mb-2">Trusted by Customers Throughout Norfolk</h3>
      <div className="flex gap-2 w-fit mx-auto mb-4">
        <FcGoogle className="text-xl" />
        <span>
          <FaStar className="text-primary-orange inline text-xl mb-2" />
          <FaStar className="text-primary-orange inline text-xl mb-2" />
          <FaStar className="text-primary-orange inline text-xl mb-2" />
          <FaStar className="text-primary-orange inline text-xl mb-2" />
          <FaStar className="text-primary-orange inline text-xl mb-2" />
        </span>
        <p>Based on 31 google reviews</p>
      </div>
      <div className="">
      <p className="font-light mb-4 md:max-w-[55%] md:mt-32 text-balance">We&#39;re proud of the reputation we&#39;ve built through honest work, quick response times, and quality service. But don&#39;t take our word for it, see what our customers are saying. Real reviews from local people who&#39;ve relied on us when they needed help the most.</p>
      <Link 
        href=""
        className="font-bold hover:text-dark-accent"
      >Review us on Google</Link>
      </div>
      <ReviewSlider />
    </div> */}
    <div className=" max-w-[1200px] mx-auto px-8 pt-12 pb-12">
      <h3 className="text-xl text-balance font-bold text-dark-accent text-center mb-2">Trusted by Customers Throughout Norfolk</h3>
      <div className="flex gap-2 w-fit mx-auto mb-8 md:mb-16">
        <FcGoogle className="text-xl" />
        <span>
          <FaStar className="text-primary-orange inline text-xl mb-2" />
          <FaStar className="text-primary-orange inline text-xl mb-2" />
          <FaStar className="text-primary-orange inline text-xl mb-2" />
          <FaStar className="text-primary-orange inline text-xl mb-2" />
          <FaStar className="text-primary-orange inline text-xl mb-2" />
        </span>
        <p>Based on 31 google reviews</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="mb-8 grid place-content-center">
          <p className="font-light mb-4 text-balance">We&#39;re proud of the reputation we&#39;ve built through honest work, quick response times, and quality service. But don&#39;t take our word for it, see what our customers are saying. Real reviews from local people who&#39;ve relied on us when they needed help the most.</p>
           <Link 
            href="/"
            className="font-bold hover:text-dark-accent"
          >Review us on Google</Link>
        </div>
      <ReviewSlider />
      </div>
    </div>
    </div>
  )
}
