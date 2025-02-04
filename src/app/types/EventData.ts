type EventDataType = {
    start: Date
    title: string
    date: string
    venue: string
    city: string
    description: string
    link: EventLinkType | null
}

type EventLinkType = {
    page: boolean
    label: string
    url: string
}

export type { EventDataType, EventLinkType };