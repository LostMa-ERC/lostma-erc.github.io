import { EntityDetail } from "./models";
import Hashtag from "@/app/components/Hashtag";
import InnerHTMLParagraph from "@/app/components/InnerHTMLParagraph";
import ToggleHeuristQuery from "./ToggleHeuristQuery";

export default function Header({data} :{data:EntityDetail}) {    

    let url;
    if (data.metadata.rty_ReferenceURL) {
        url = <Hashtag url={data.metadata.rty_ReferenceURL}/>
    }
    else {
        url = <></>
    }

    const p = <>
            <InnerHTMLParagraph content={data.metadata.rty_Description} />
            <p className="text-muted">
                Equivalent Entity: {url}
            </p>
            <ToggleHeuristQuery id={data.id} />
        </>

    return (
        <div className="flex justify-center">
            <div id="header" className="container md:w-3/4">
                <div className="rounded overflow-hidden shadow-lg h-full border-solid border-2">
                    <div className="px-6 py-4">
                        <div className="font-bold mb-2 text-center text-lg">
                            {data.metadata.rty_Name}
                        </div>
                        <div className="text-muted font-light mb-2 text-center">
                            {data.id.toString()}
                        </div>
                        <div className="text-base font-light">
                            {p}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
