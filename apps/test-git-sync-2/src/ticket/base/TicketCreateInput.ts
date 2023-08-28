/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AttendeeWhereUniqueInput } from "../../attendee/base/AttendeeWhereUniqueInput";
import { ValidateNested, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { EnumTicketTicketType } from "./EnumTicketTicketType";

@InputType()
class TicketCreateInput {
  @ApiProperty({
    required: true,
    type: () => AttendeeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AttendeeWhereUniqueInput)
  @Field(() => AttendeeWhereUniqueInput)
  attendee!: AttendeeWhereUniqueInput;

  @ApiProperty({
    required: true,
    enum: EnumTicketTicketType,
  })
  @IsEnum(EnumTicketTicketType)
  @Field(() => EnumTicketTicketType)
  ticketType!: "FREE" | "PAID";
}

export { TicketCreateInput as TicketCreateInput };
