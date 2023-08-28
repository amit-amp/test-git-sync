import { Event } from "../event/Event";
import { Ticket } from "../ticket/Ticket";

export type Attendee = {
  email: string;
  event?: Event;
  id: string;
  name: string;
  tikets?: Array<Ticket>;
};
