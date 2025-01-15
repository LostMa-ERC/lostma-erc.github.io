import { EntityDetail } from "./models";

export function MakeAllHeaders(entityDetail: EntityDetail):Array<Array<string>> {
    let fields:string[] = [];
    for (const section of entityDetail.sections) {
        for (const field of section.fields) {
            if (field.dty_Type === "resource") {
                const header = `${field.rst_DisplayName} H-ID`
                fields.push(header)
            }
            else {
                fields.push(field.rst_DisplayName)
            }
        }
    }
    const csvRows:Array<Array<string>> = []
    csvRows.push(fields)
    return csvRows
}

export function MakeReqHeaders(entityDetail: EntityDetail):Array<Array<string>> {
    let fields:string[] = [];
    for (const section of entityDetail.sections) {
        for (const field of section.fields) {
            if (field.rst_RequirementType === "required") {
                if (field.dty_Type === "resource") {
                    const header = `${field.rst_DisplayName} H-ID`
                    fields.push(header)
                }
                else {
                    fields.push(field.rst_DisplayName)
                }
            }
        }
    }
    const csvRows:Array<Array<string>> = []
    csvRows.push(fields)
    return csvRows
}

export function GenerateFullTemplate({entity}: {entity:EntityDetail}) {
    const rows = MakeAllHeaders(entity);
    GenerateCSV({rows: rows});
}

export function GenerateReqTemplate({entity}: {entity:EntityDetail}) {
    const rows = MakeReqHeaders(entity);
    GenerateCSV({rows: rows});
}

export function GenerateCSV({rows,}: {rows:Array<string[]>}) {
    let csvContent = "data:text/csv;charset=utf-8," 
    + rows.map(e => e.join(",")).join("\n");
    var encodedUri = encodeURI(csvContent);
    window.open(encodedUri);
}