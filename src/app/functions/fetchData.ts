interface ChronologicalData {
    start: string
    [key: string]: any
};

type JsonArrayChrono = ChronologicalData[];

export async function fetchChronologicalData({arrays,}: {arrays: any[]}): Promise<JsonArrayChrono> {
    // Concatenate the array or arrays to an empty array
    var arrayConcat: JsonArrayChrono = [].concat.apply([], arrays)
    // Sort the full array by date ('start' property)
    const l = arrayConcat.sort((a, b) => b.start.localeCompare(a.start))
    // Return a subset of the full array, ignoring length and other non-data objects
    return Object.values(l).flatMap(
        ({start,}, index) => start ? l[index]: []
    )
};

export type { JsonArrayChrono };