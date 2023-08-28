import { Event } from "../event/Event";
import { Ticket } from "../ticket/Ticket";

export type Attendee = {
  email: string;
  event?: Event;
  id: string;
  lastName: string | null;
  name: string;
  tikets?: Array<Ticket>;
};
