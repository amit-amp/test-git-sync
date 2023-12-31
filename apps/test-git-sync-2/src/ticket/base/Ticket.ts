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
import { Attendee } from "../../attendee/base/Attendee";
import { ValidateNested, IsString, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { EnumTicketTicketType } from "./EnumTicketTicketType";

@ObjectType()
class Ticket {
  @ApiProperty({
    required: true,
    type: () => Attendee,
  })
  @ValidateNested()
  @Type(() => Attendee)
  attendee?: Attendee;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
    enum: EnumTicketTicketType,
  })
  @IsEnum(EnumTicketTicketType)
  @Field(() => EnumTicketTicketType, {
    nullable: true,
  })
  ticketType?: "FREE" | "PAID";
}

export { Ticket as Ticket };
