import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";

export type SessionUpdateInput = {
  event?: EventWhereUniqueInput;
  name?: string;
  speaker?: string;
  time?: Date;
};
