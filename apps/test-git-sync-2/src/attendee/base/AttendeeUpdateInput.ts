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
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { EventWhereUniqueInput } from "../../event/base/EventWhereUniqueInput";
import { Type } from "class-transformer";
import { TicketUpdateManyWithoutAttendeesInput } from "./TicketUpdateManyWithoutAttendeesInput";

@InputType()
class AttendeeUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string;

  @ApiProperty({
    required: false,
    type: () => EventWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => EventWhereUniqueInput)
  @IsOptional()
  @Field(() => EventWhereUniqueInput, {
    nullable: true,
  })
  event?: EventWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string;

  @ApiProperty({
    required: false,
    type: () => TicketUpdateManyWithoutAttendeesInput,
  })
  @ValidateNested()
  @Type(() => TicketUpdateManyWithoutAttendeesInput)
  @IsOptional()
  @Field(() => TicketUpdateManyWithoutAttendeesInput, {
    nullable: true,
  })
  tikets?: TicketUpdateManyWithoutAttendeesInput;
}

export { AttendeeUpdateInput as AttendeeUpdateInput };
