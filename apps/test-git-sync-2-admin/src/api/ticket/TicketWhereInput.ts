import { AttendeeWhereUniqueInput } from "../attendee/AttendeeWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type TicketWhereInput = {
  attendee?: AttendeeWhereUniqueInput;
  id?: StringFilter;
  ticketType?: "FREE" | "PAID";
};
