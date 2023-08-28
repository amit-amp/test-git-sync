import { AttendeeWhereUniqueInput } from "../attendee/AttendeeWhereUniqueInput";

export type TicketCreateInput = {
  attendee: AttendeeWhereUniqueInput;
  ticketType: "FREE" | "PAID";
};
