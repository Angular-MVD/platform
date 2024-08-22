import { EventTalk } from "./event-talk.interface";

export interface EventInfo {
    id: string,
    title: string,
    description: string,
    date: string,
    host: string,
    location: string,
    pictures: string[],
    talks: EventTalk[]
}