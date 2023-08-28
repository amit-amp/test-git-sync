import { SortOrder } from "../../util/SortOrder";

export type SessionOrderByInput = {
  eventId?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  speaker?: SortOrder;
  time?: SortOrder;
};
