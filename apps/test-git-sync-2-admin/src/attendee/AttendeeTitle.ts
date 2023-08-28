import { Attendee as TAttendee } from "../api/attendee/Attendee";

export const ATTENDEE_TITLE_FIELD = "lastName";

export const AttendeeTitle = (record: TAttendee): string => {
  return record.lastName || String(record.id);
};
