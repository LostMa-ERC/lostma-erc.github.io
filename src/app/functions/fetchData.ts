import { NewsCategory } from "../types/NewsCategory"

interface ChronologicalData {
    start: string
    [key: string]: any
};

type JsonArrayChrono = ChronologicalData[];

export async function fetchChronologicalData({arrays, category}: {arrays: any[], category: NewsCategory | null}): Promise<JsonArrayChrono> {

    // Concatenate the array or arrays to an empty array
    const arrayConcat: JsonArrayChrono = [].concat.apply([], arrays)
    
    // Return a subset that ignores length and other non-data objects
    const subsetBasic = arrayConcat.filter((i) => i.start != undefined)

    // If filtering on a category type, further refine the subset
    if (category) {
        var subsetFinal = subsetBasic.filter((i) => i.category === category)
    }
    else {
        var subsetFinal = subsetBasic
    }
    
    // Sort the filtered array by date ('start' property)
    return subsetFinal.sort((a, b) => b.start.localeCompare(a.start))
};

export type { JsonArrayChrono };