import Image from "next/image";
import Hero from "@/public/images/BNF_Fr95_209v.jpg"

export default function Header() {
    return (
        <header
      className="
        h-[540px]
        flex 
        flex-col 
        justify-center
      "
      >
          <Image 
          src={Hero}
          className="
            h-[540px]
            absolute
            object-cover 
            z-0
            opacity-90
            w-full
          "
          alt="Background image"
          />
          <div
          className="
            z-20
            bg-gray-200/50
          "
          >
            <div
            className="
              lg:ml-24
              ml-8
              min-h-52
              flex
              items-center
            "
            >
              <div>
              <h1
              className="
                  md:text-7xl 
                  text-6xl
                  tracking-tight 
                  font-normal
                  font-serif 
                  leading-none
              "
              >
                  LostMa
              </h1>
              <p
              className="
                  md:text-2xl
                  text-xl 
                  font-sans 
                  text-opacity-75
              "
              >
                  navigating the currents of culture
              </p>
              </div>
            </div>
          </div>
      </header>
    )
}