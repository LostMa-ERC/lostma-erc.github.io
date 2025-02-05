import { NewsCategory } from "@/app/types/NewsCategory";
import { useContext } from "react";
import { HeaderContextData } from "./NewsNotice";

const HeaderText = () => {
    const data = useContext(HeaderContextData);

    if (data) {
        if (Array.isArray(data.detail)) {
            var detail = data.detail.join(", ")
        }
        else {
            var detail = data.detail
        }
        return (
        <>
            <div className="p-4 ">
                <div className="font-light tracking-wide text-sm pb-2 truncate">
                    {detail}
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
            container = <section className="bg-secondary rounded">
                < HeaderText />
            </section>
        }
        else if (data.category === NewsCategory.Publication) {
            container = <section className="bg-highlight rounded">
                < HeaderText />
            </section>
        }
        else if (data.category === NewsCategory.Other) {
            container = <section className="bg-info rounded">
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