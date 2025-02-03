import Image from "next/image";
import { PublicationDataType } from "@/types/PublicationData";
import PlaceHolder from "@/public/images/lostma_logo.png";

const PublicationNotice = ({data}: {data:PublicationDataType}) => {

    const date = data.start.toString()

    return (
        <>
          <h2 className="p-1 w-fit md:text-xl text-2xl">
            {data.title}
          </h2>
          <div className="flex gap-4 py-4 font-light">
            <div className="flex-none md:w-48 md:h-48 w-24 h-24">
              <Image width='0' height='0' src={PlaceHolder} alt="event-image-placeholder" className="object-scale-down max-h-full m-auto rounded"/>
            </div>
            <div className="flex-1">
              <p>{date}</p>
              <p>{data.authors.join(', ')}
              </p>
              <p className="max-h-40 overflow-y-scroll">{data.description}</p>
              <div className="w-fit button text-center">
                    <a className="text-inherit bg-inherit hover:text-inherit hover:bg-inherit" target="_blank" rel="noreferrer" href={data.link}>
                        {data.link}
                    </a>
                </div>
            </div>
          </div>
        </>
    )
};

export default PublicationNotice;