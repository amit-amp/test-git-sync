import { Attendee } from "../attendee/Attendee";

export type Ticket = {
  attendee?: Attendee;
  id: string;
  ticketType?: "FREE" | "PAID";
};
