import { AttendeeCreateNestedManyWithoutEventsInput } from "./AttendeeCreateNestedManyWithoutEventsInput";
import { SessionCreateNestedManyWithoutEventsInput } from "./SessionCreateNestedManyWithoutEventsInput";

export type EventCreateInput = {
  attendees?: AttendeeCreateNestedManyWithoutEventsInput;
  description: string;
  endDate: Date;
  location: string;
  name: string;
  sessions?: SessionCreateNestedManyWithoutEventsInput;
  startDate: Date;
};
