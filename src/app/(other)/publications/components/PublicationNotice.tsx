import { NewsType } from "@/types/NewsType";

const PublicationNotice = ({data}: {data:NewsType}) => {

    const date = data.start.toString()

    if (Array.isArray(data.subtitle)) {
      var authors = data.subtitle.join(', ')
    }
    else {
      var authors = data.subtitle
    }

    return (
        <div className="bg-white/50 rounded-md md:rounded-lg">
          <div className="bg-primary text-white rounded-md md:rounded-lg">
            <div className="p-4">
              <h2 className="md:text-2xl text-xl italic">
                <a target="_blank" rel="noreferrer" href={data.link?.url}>{data.title}</a>
              </h2>
              <div className="pt-4 md:pt-2">
                {date}
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="font-light tracking-wide">
                {authors}
            </div>
            <hr className="mt-2" />
            <p className="font-light text-xs md:text-base tracking-wide md:px-8 max-h-40 overflow-y-scroll">
              {data.description}
            </p>
            <div className="flex items-center justify-center">
              <div className="w-fit button text-center">
                <a className="
                  text-inherit text-sm md:text-base bg-inherit hover:text-inherit hover:bg-inherit
                  "
                  target="_blank" 
                  rel="noreferrer" 
                  href={data.link?.url}
                >
                  {data.link?.label}
                </a>
              </div>
            </div>
          </div>
        </div>
    )
};

export default PublicationNotice;