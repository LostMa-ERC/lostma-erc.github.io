import { EntityDetail, VocabDetail } from './models';
import loadData, { loadVocabData } from './loadData';

export async function fetchVocab(id:string): Promise<VocabDetail|undefined> {
    // Load the JSON data store
    const data = await loadVocabData()

    // Find an object in the array by the value of the key "id"
    return data.find((element) => element.id === id);

}

export default async function fetchData(id:string): Promise<EntityDetail|undefined> {
    // Load the JSON data store
    const data = await loadData()

    // Find an object in the array by the value of the key "id"
    return data.find((element) => element.id.toPrecision() === id);

}