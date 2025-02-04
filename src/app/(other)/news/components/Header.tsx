import { NewsCategory } from "@/app/types/NewsCategory";
import { useContext } from "react";
import { HeaderContextData } from "./NewsNotice";

const HeaderText = () => {
    const data = useContext(HeaderContextData);

    if (data) {
        if (Array.isArray(data.subtitle)) {
            var subtitle = data.subtitle.join(", ")
        }
        else {
            var subtitle = data.subtitle
        }
        return (
        <>
            <div className="p-4 ">
                <div className="font-light tracking-wide text-sm pb-2 truncate">
                    {subtitle}
                </div>
            <h2 className="w-fit text-xl">
                    {data.title}
                </h2>
            </div>
        </>
        )
    }
}

const HeaderContainer = () => {
    const data = useContext(HeaderContextData);
    let container = <></>
    if (data) {
        if (data.category === NewsCategory.Event) {
            container = <div className="bg-secondary rounded">
                < HeaderText />
            </div>
        }
        else if (data.category === NewsCategory.Publication) {
            container = <div className="bg-highlight rounded">
                < HeaderText />
            </div>
        }
        else if (data.category === NewsCategory.Other) {
            container = <div className="bg-info rounded">
                < HeaderText />
            </div>
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