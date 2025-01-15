import { EntityDetail } from "./models";
import Card from "@/app/components/Card";
import Hashtag from "@/app/components/Hashtag";
import SetInnerHTML from "@/app/components/innerHTML";
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
            {SetInnerHTML(data.metadata.rty_Description)}
            <p className="text-muted">
                Equivalent Entity: {url}
            </p>
            <ToggleHeuristQuery id={data.id} />
        </>

    return (
        <div className="flex justify-center">
            <div id="header" className="container md:w-3/4">
                <Card title={data.metadata.rty_Name} subtitle={data.id.toString()} paragraph={p} />
            </div>
        </div>
    );
}
