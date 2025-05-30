import langJsonData from "@/public/data/lang_aggregates.json";
// import decorJsonData from "@/public/data/wit_distribution.json";

function getLastModified() : Date {
    return new Date(langJsonData.lastModified)
};

type LangData = {
  texts: number;
  witnesses: number;
  code: string;
  lang: string;
}

function getLangData() : LangData[] {
  return langJsonData.items.filter((i) => i.code != undefined)
}

export { getLangData, getLastModified }