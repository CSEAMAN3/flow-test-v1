'use client'

import { headerNav } from "@/lib/navigations"
import {motion} from "framer-motion"
import Link from "next/link"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"


export default function HeaderNav() {

  const pathname = usePathname()
  const [toggleNav, setToggleNav] = useState(false)
  const [navWidth, setNavWidth] = useState("100vw")

  useEffect(() => {
    const updateNavWidth = () => {
      if(innerWidth < 550){
        setNavWidth("100vw")
      } else if(innerWidth < 650){
        setNavWidth("75vw")
      } else if(innerWidth < 750){
        setNavWidth("65%")
      } else {
        setNavWidth("50%")
      }
    }

    updateNavWidth()

    window.addEventListener("resize", updateNavWidth)
    return () => window.removeEventListener("resize", updateNavWidth)
  }, [])

  return (
    <div>
      {/* burger navigation */}
      <motion.div animate={toggleNav ? "open" : "close"}>
        <motion.div 
          className={`bg-primary h-[100vh] fixed top-0 right-0 overflow-y-scroll border-accent`}
          style={{
            width: "0%",
            borderLeftWidth: "0px"
          }}
          variants={{
            open: {
              width: navWidth,
              borderLeftWidth: "16px"
            },
            close: {
              width: "0%",
              borderLeftWidth: "0px"
            }
          }}  
        >
          {/* <div className="h-full w-[20px] bg-accent absolute top-0 left-0" /> */}
          <nav className="mt-32">
            <ul className="px-12">
              {headerNav.map(link => {
                const isActive = pathname === link.href
                return (
                  <li key={link.title} className="mb-8">
                    <Link href={link.href} className={`font-bold text-xl ${isActive ? "text-accent" : "text-white"}`}>{link.title}</Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </motion.div>
      </motion.div>


        {/* nav bars */}
      <motion.div 
        className="w-8 h-8 absolute top-12 right-8 cursor-pointer"
        onClick={() => setToggleNav(!toggleNav)}
        animate={toggleNav ? "open" : "close"}
        initial={false}
      >
        {/* top bar */}
        <motion.div 
          className="w-full h-[6px] bg-white absolute rounded-full"
          style={{
            top: "0%",
            rotate: "0deg",
            y: "0%"
          }}
          variants={{
            open: {
              top: ["0%" , "50%", "50%"],
              rotate: ["0deg" , "0deg", "45deg"],
              y: ["0%" , "-50%", "-50%"]
            },
            close: {
              top: ["50%" , "50%", "0%"],
              rotate: ["45deg" , "0deg", "0deg"],
              y: ["-50%" , "-50%", "0%"]
            }
          }}
        />
        {/* middle bar */}
        <motion.div 
          className="w-full h-[6px] bg-white absolute rounded-full"
          style={{
            top: "50%",
            rotate: "0deg",
            y: "-50%"
          }}
          variants={{
            open: {
              rotate: ["0deg", "0deg", "45deg"]
            },
            close: {
              rotate: ["45deg", "0deg", "0deg"]
            }
          }}
        />
        {/* bottom bar */}
        <motion.div 
          className="w-full h-[6px] bg-white absolute rounded-full"
          style={{
            top: "",
            rotate: "",
            y: "",
          }}
          variants={{
            open: {
              top: ["100%", "50%", "50%"],
              rotate: ["0deg", "0deg", "-45deg"],
              y: ["-100%", "-50%", "-50%"]
            },
            close: {
              top: ["50%", "50%", "100%"],
              rotate: ["-45deg", "0deg", "0deg"],
              y: ["-50%", "-50%", "-100%"]
            }
          }}
        />
      </motion.div>
      
    </div>
  )
}
