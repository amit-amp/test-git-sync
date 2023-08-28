import { Event } from "../event/Event";

export type Session = {
  event?: Event;
  id: string;
  name: string;
  speaker: string;
  time: Date;
};
