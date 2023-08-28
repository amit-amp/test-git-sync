import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { TicketUpdateManyWithoutAttendeesInput } from "./TicketUpdateManyWithoutAttendeesInput";

export type AttendeeUpdateInput = {
  email?: string;
  event?: EventWhereUniqueInput;
  lastName?: string | null;
  name?: string;
  tikets?: TicketUpdateManyWithoutAttendeesInput;
};
