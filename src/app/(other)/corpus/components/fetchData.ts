import jsonData from "@/public/data/lang_aggregates.json";

function getLastModified() : Date {
    return new Date(jsonData.lastModified)
};

type LangData = {
  texts: number;
  witnesses: number;
  code: string;
  lang: string;
}

function getLangData() : LangData[] {
  return jsonData.items.filter((i) => i.code != undefined)
}

export { getLangData, getLastModified }