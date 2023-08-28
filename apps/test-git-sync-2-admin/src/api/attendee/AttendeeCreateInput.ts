import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { TicketCreateNestedManyWithoutAttendeesInput } from "./TicketCreateNestedManyWithoutAttendeesInput";

export type AttendeeCreateInput = {
  email: string;
  event: EventWhereUniqueInput;
  lastName?: string | null;
  name: string;
  tikets?: TicketCreateNestedManyWithoutAttendeesInput;
};
