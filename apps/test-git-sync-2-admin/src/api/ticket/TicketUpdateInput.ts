import { AttendeeWhereUniqueInput } from "../attendee/AttendeeWhereUniqueInput";

export type TicketUpdateInput = {
  attendee?: AttendeeWhereUniqueInput;
  ticketType?: "FREE" | "PAID";
};
