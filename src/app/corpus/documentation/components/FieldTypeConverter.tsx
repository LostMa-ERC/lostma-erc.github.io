import { Field } from "./models";
import { LinkSVG } from "@/public/svgs";
import fetchData from "./fetchData";
import Link from "next/link";

enum HeuristFieldTypes {
    freetext = 'freetext',
    blocktext = 'blocktext',
    integer = 'integer',
    date = 'date',
    year = 'year',
    relmarker = 'relmarker',
    boolean = 'boolean',
    enum = 'enum',
    relationtype = 'relationtype',
    resource = 'resource',
    float = 'float',
    file = 'file',
    geo = 'geo',
    separator = 'separator',
    calculated = 'calculated',
    fieldsetmarker = 'fieldsetmarker',
    urlinclude = 'urlinclude'
}

async function MakeForeignKeyLabel({entityID,}: {entityID: number | null}) {
    if (entityID) {
        let fkEntity = await fetchData(entityID.toString())
        if (fkEntity) {
            return <Link href={`/corpus/documentation/entities/${entityID}`}>{fkEntity?.metadata.rty_Name}</Link>       
        }
        else {
            return <></>
        }
    }
    else {
        return <></>
    }
}

export default function ConvertFieldType({field,}: {field: Field}) {

    if (field.dty_Type === HeuristFieldTypes.resource) {
        return (
        <div className="grid grid-rows-2">
            <span className="flex gap-2">foreign key <div className="size-6">{LinkSVG}</div></span>
            <div className="flex gap-2">
            {
                Object.values(field.dty_PtrTargetRectypeIDs).map((value, index) => 

                    <MakeForeignKeyLabel key={`field-${field.dty_ID}-fk-${value}-${index}`} entityID={value}/>

                )
            }
            </div>
        </div>)
    }
    else if (field.dty_Type === HeuristFieldTypes.enum) {
        return (<div>vocabulary</div>)
    }
    else if (field.dty_Type === HeuristFieldTypes.blocktext) {
        return (<div>text</div>)
    }
    else if (field.dty_Type === HeuristFieldTypes.freetext) {
        return (<div>text</div>)
    }
    else return (<div>{field.dty_Type}</div>)
}
