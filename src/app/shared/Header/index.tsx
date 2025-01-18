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
                h-40
                z-0
                opacity-60
                w-full
            "
            alt="Background image"
            />
            <div
            className="
                z-20
                lg:ml-24
                ml-8
            "
            >
                <h1
                className="
                    text-6xl 
                    tracking-tight 
                    font-serif 
                    leading-none
                "
                >
                    LostMa
                </h1>
                <p
                className="
                    text-xl 
                    font-sans 
                    text-opacity-75
                "
                >
                    navigating the currents of culture
                </p>
            </div>
        </header>
    );
};

