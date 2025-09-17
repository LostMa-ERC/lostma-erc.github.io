import { PubCategory } from "@/app/types/PubCategory";
import { useContext } from "react";
import { HeaderContextData } from "./PublicationNotice";

const HeaderText = () => {
    const data = useContext(HeaderContextData);

    if (data) {
        const date = data.start.toString()

        if (Array.isArray(data.detail)) {
          var authors = data.detail.join(', ')
        }
        else {
          var authors = data.detail
        }
        return (
        <>
           <div className="p-4 flex justify-between items-stretch">
            <div className="flex items-center">
              <span
                className="
                  inline-block px-6 py-3
                  rounded-r-full text-base md:text-lg font-semibold
                  bg-gray-800 text-white
                  shadow-md
                "
              >
                {data.pub_category}
              </span>
            </div>
            <div className="text-right">
              <h2 className="md:text-2xl text-xl italic">
                <a target="_blank" rel="noreferrer" href={data.link?.url}>
                  {data.title}
                </a>
              </h2>
              <div className="pt-2 text-sm">{date}</div>
              <div className="text-xs md:text-sm font-light">{authors}</div>
            </div>
          </div>
        </>
        )
    }
}

const HeaderContainer = () => {
    const data = useContext(HeaderContextData);
    let container = <></>
    if (data) {
        if (data.pub_category === PubCategory.Preprint) {
            container = <section className="bg-pink-300 text-pink-900">
                < HeaderText />
            </section>
        }
        else if (data.pub_category === PubCategory.Communication) {
            container = <section className="bg-blue-100 text-blue-900 rounded-md">
                < HeaderText />
            </section>
        }
        else if (data.pub_category === PubCategory.Article) {
            container = <section className="bg-green-100 text-green-900 rounded-md">
                < HeaderText />
            </section>
        }
        else if (data.pub_category === PubCategory.ConferenceProceedings) {
            container = <section className="bg-yellow-100 text-yellow-900 rounded-md">
                < HeaderText />
            </section>
        }
    }
    return container
}

const HeaderComponent = () => {
    return (
        < HeaderContainer />
    )
}

export default HeaderComponent;