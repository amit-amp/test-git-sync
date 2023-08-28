import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { TicketCreateNestedManyWithoutAttendeesInput } from "./TicketCreateNestedManyWithoutAttendeesInput";

export type AttendeeCreateInput = {
  email: string;
  event: EventWhereUniqueInput;
  name: string;
  tikets?: TicketCreateNestedManyWithoutAttendeesInput;
};
