import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";

export type SessionWhereInput = {
  event?: EventWhereUniqueInput;
  id?: StringFilter;
  name?: StringFilter;
  speaker?: StringFilter;
  time?: DateTimeFilter;
};
