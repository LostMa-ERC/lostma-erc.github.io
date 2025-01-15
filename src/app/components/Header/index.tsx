import Background from "@/public/images/BNF_Fr95_209v.jpg"
import Image from "next/image";

export default function Header() {
    return (
        <header
        className="
            h-40
            flex 
            flex-col 
            justify-center
        "
        >
            <Image 
            src={Background}
            className="
                absolute 
                object-cover 
                max-h-40
                z-0
                opacity-50
            "
            alt="Background image"
            />
            <h1
            className="
                z-20
                ml-24 text-6xl 
                tracking-tight 
                font-serif 
                leading-none
            "
            >
                LostMa
            </h1>
            <p
            className="
                z-10
                mt-4 mx-24 text-xl 
                font-sans 
                text-opacity-75
            "
            >
                navigating the currents of culture
            </p>
        </header>
    );
};

