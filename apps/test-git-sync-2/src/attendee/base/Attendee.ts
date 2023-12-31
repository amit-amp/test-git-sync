/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, ValidateNested, IsOptional } from "class-validator";
import { Event } from "../../event/base/Event";
import { Type } from "class-transformer";
import { Ticket } from "../../ticket/base/Ticket";

@ObjectType()
class Attendee {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  email!: string;

  @ApiProperty({
    required: true,
    type: () => Event,
  })
  @ValidateNested()
  @Type(() => Event)
  event?: Event;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  name!: string;

  @ApiProperty({
    required: false,
    type: () => [Ticket],
  })
  @ValidateNested()
  @Type(() => Ticket)
  @IsOptional()
  tikets?: Array<Ticket>;
}

export { Attendee as Attendee };
