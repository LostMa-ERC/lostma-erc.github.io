export interface EntityDetail {
    "id": number,
    "metadata": {
        "rty_ID": number,
        "rty_Name": string,
        "rty_Description": string,
        "rty_TitleMask": string,
        "rty_ReferenceURL": string | null | undefined,
    },
    "sections": Section[]
}

export interface VocabDetail {
        "id": string,
        "label": string,
        "description": string | null | undefined,
        "terms": VocabTerms[]
    }

export interface Section {
    "sectionName": string,
    "fields": Field[]
}

export interface Field {
    "rst_DisplayName": string,
    "rst_DisplayHelpText": string,
    "dty_ID": number,
    "dty_Type": string,
    "dty_PtrTargetRectypeIDs": number[] | null[],
    "dty_SemanticReferenceURL": string | null | undefined,
    "trm_TreeID": number | null | undefined,
    "trm_Label": string | null | undefined,
    "trm_Description": string | null | undefined,
    "rst_RequirementType": string,
    "rst_MaxValues": number | null,
    "vocabTerms": null | VocabTerms[]
}

export interface VocabTerms {
    "label": string,
    "description": string,
    "url": string,
    "id": number
}
