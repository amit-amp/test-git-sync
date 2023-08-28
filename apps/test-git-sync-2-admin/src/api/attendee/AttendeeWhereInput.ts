import { StringFilter } from "../../util/StringFilter";
import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { TicketListRelationFilter } from "../ticket/TicketListRelationFilter";

export type AttendeeWhereInput = {
  email?: StringFilter;
  event?: EventWhereUniqueInput;
  id?: StringFilter;
  name?: StringFilter;
  tikets?: TicketListRelationFilter;
};
