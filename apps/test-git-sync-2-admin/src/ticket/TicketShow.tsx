import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
} from "react-admin";
import { ATTENDEE_TITLE_FIELD } from "../attendee/AttendeeTitle";

export const TicketShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="Attendee"
          source="attendee.id"
          reference="Attendee"
        >
          <TextField source={ATTENDEE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Id" source="id" />
        <TextField label="Ticket Type" source="ticketType" />
      </SimpleShowLayout>
    </Show>
  );
};
