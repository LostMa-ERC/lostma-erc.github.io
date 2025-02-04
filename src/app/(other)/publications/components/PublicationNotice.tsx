import { PublicationDataType } from "@/types/PublicationData";

const PublicationNotice = ({data}: {data:PublicationDataType}) => {

    const date = data.start.toString()

    return (
        <>
          <div className="bg-primary text-white">
            <div className="p-4">
              <h2 className="md:text-2xl text-xl italic">
                <a target="_blank" rel="noreferrer" href={data.link}>{data.title}</a>
              </h2>
              <div className="pt-4 md:pt-2">
                {date}
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="font-light tracking-wide">
                {data.authors.join(', ')}
            </div>
            <hr className="mt-2" />
            <p className="max-h-40 overflow-y-scroll font-light tracking-tight md:tracking-wide">
              {data.description}
            </p>
            <div className="w-fit button text-center">
              <a className="text-inherit text-xs md:text-sm bg-inherit hover:text-inherit hover:bg-inherit" target="_blank" rel="noreferrer" href={data.link}>
                  {data.link}
              </a>
            </div>
          </div>
        </>
    )
};

export default PublicationNotice;