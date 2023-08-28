import { SortOrder } from "../../util/SortOrder";

export type TicketOrderByInput = {
  attendeeId?: SortOrder;
  id?: SortOrder;
  ticketType?: SortOrder;
};
