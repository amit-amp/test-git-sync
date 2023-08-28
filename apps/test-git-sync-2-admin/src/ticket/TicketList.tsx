import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ATTENDEE_TITLE_FIELD } from "../attendee/AttendeeTitle";

export const TicketList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Tickets"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
