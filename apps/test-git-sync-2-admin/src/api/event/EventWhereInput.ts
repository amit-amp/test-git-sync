import { AttendeeListRelationFilter } from "../attendee/AttendeeListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { SessionListRelationFilter } from "../session/SessionListRelationFilter";

export type EventWhereInput = {
  attendees?: AttendeeListRelationFilter;
  description?: StringFilter;
  endDate?: DateTimeFilter;
  id?: StringFilter;
  location?: StringFilter;
  name?: StringFilter;
  sessions?: SessionListRelationFilter;
  startDate?: DateTimeFilter;
};
