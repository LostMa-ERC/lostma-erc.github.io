import langJsonData from "@/public/data/lang_aggregates.json";
import distJsonData from "@/public/data/wit_distribution.json";

function getLastModified() : Date {
    return new Date(langJsonData.lastModified)
};

type LangData = {
  texts: number;
  witnesses: number;
  code: string;
  lang: string;
}

type DistData = {
  prose_texts: number;
  verse_texts: number;
  wit_count: number;
}

function getLangData() : LangData[] {
  return langJsonData.items.filter((i) => i.code != undefined)
}

function getDistData(): DistData[] {
  return distJsonData.items.filter((i) => i.prose_texts != undefined)
}

export { getLangData, getDistData, getLastModified }