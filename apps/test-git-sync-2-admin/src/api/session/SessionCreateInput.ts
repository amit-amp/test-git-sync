import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";

export type SessionCreateInput = {
  event: EventWhereUniqueInput;
  name: string;
  speaker: string;
  time: Date;
};
