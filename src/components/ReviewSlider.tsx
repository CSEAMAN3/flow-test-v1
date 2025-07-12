'use client'

import { reviews } from "@/lib/reviews";
// import Image from "next/image"
import { FaStar, FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";

export default function ReviewSlider() {

  const [review, setReview] = useState(0)
  const [expanded, setExpanded] = useState(false)

  // const changeReviewUp = () => {
  //   if(review < reviews.length -1){
  //     setReview(review + 1)
  //     setExpanded(false)
  //   } else {
  //     setReview(0)
  //     setExpanded(false)
  //   }
  // }

  const changeReviewUp = () => {
    setReview((prev) => (prev === 0 ? reviews.length - 1 : prev - 1))
    setExpanded(false)
  }

  const changeReviewDown = () => {
    setReview((prev) => (prev === 0 ? reviews.length - 1  : prev - 1 ))
    setExpanded(false)
  }

  // const changeReviewDown = () => {
  //   if(review === 0){
  //     setReview(reviews.length - 1)
  //     setExpanded(false)
  //   } else {
  //     setReview(review - 1)
  //     setExpanded(false)
  //   }
  // }


  return (
    <div className="bg-accent w-full min-h-[300px] relative px-8 pt-16 pb-8">
      <div className={`absolute -top-6 left-8 w-[60px] h-[60px] rounded-full ${reviews[review].background} font-bold text-4xl text-white grid place-content-center border-4 border-accent`}>
        <p>{reviews[review].initials}</p>
      </div>
      <h5 className="font-bold text-xl mb-2">{reviews[review].name}</h5>
      <div>
        <h6 className="font-light mb-2">
        <FaStar className="text-white inline text-xl mb-2" />        
        <FaStar className="text-white inline text-xl mb-2" />        
        <FaStar className="text-white inline text-xl mb-2" />        
        <FaStar className="text-white inline text-xl mb-2" />        
        <FaStar className="text-white inline text-xl mb-2" />
        <span className="font-light inline-block ml-2">Google Review</span>
        </h6>
        <p className={`font-light mb-4 ${expanded ? "" : "line-clamp-3"}`}>{reviews[review].review}</p>   
      </div>
      <button
          onClick={() => setExpanded(!expanded)}
          className="font-bold hover:text-white cursor-pointer"
        >{expanded ? "Read Less" : "Read More"}</button>   
      <div className="flex gap-4 absolute bottom-8 right-8">
        <button
          onClick={changeReviewDown}
          className="text-xl cursor-pointer"
        >
          <FaChevronLeft className="hover:text-white transition-colors duration-300" />
        </button>
        <button 
          onClick={changeReviewUp}
          className="text-xl cursor-pointer"
        >
          <FaChevronRight className="hover:text-white transition-colors duration-300" />
        </button>
      </div>
      <Link href={"/"} className="font-bold text-sm hover:text-white absolute top-8 right-8 transition-colors duration-300">&gt; View All</Link>
    </div>
  )
}
