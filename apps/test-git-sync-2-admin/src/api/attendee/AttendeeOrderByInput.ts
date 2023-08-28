import { SortOrder } from "../../util/SortOrder";

export type AttendeeOrderByInput = {
  email?: SortOrder;
  eventId?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  name?: SortOrder;
};
