import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ATTENDEE_TITLE_FIELD } from "./AttendeeTitle";
import { EVENT_TITLE_FIELD } from "../event/EventTitle";

export const AttendeeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Email" source="email" />
        <ReferenceField label="Event" source="event.id" reference="Event">
          <TextField source={EVENT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Id" source="id" />
        <TextField label="last name" source="lastName" />
        <TextField label="Name" source="name" />
        <ReferenceManyField
          reference="Ticket"
          target="attendeeId"
          label="Tickets"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Attendee"
              source="attendee.id"
              reference="Attendee"
            >
              <TextField source={ATTENDEE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
            <TextField label="Ticket Type" source="ticketType" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
