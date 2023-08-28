import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { TicketUpdateManyWithoutAttendeesInput } from "./TicketUpdateManyWithoutAttendeesInput";

export type AttendeeUpdateInput = {
  email?: string;
  event?: EventWhereUniqueInput;
  name?: string;
  tikets?: TicketUpdateManyWithoutAttendeesInput;
};
