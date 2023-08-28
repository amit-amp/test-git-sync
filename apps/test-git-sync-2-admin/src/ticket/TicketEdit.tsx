import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { AttendeeTitle } from "../attendee/AttendeeTitle";

export const TicketEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="attendee.id"
          reference="Attendee"
          label="Attendee"
        >
          <SelectInput optionText={AttendeeTitle} />
        </ReferenceInput>
        <SelectInput
          source="ticketType"
          label="Ticket Type"
          choices={[
            { label: "FREE", value: "FREE" },
            { label: "PAID", value: "PAID" },
          ]}
          optionText="label"
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
