import { StringFilter } from "../../util/StringFilter";
import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TicketListRelationFilter } from "../ticket/TicketListRelationFilter";

export type AttendeeWhereInput = {
  email?: StringFilter;
  event?: EventWhereUniqueInput;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  name?: StringFilter;
  tikets?: TicketListRelationFilter;
};
