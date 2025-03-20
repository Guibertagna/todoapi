import {
  IsNotEmpty,
  IsString,
  MaxLength,
  IsOptional,
  IsEnum,
} from "class-validator";
import { Status } from "@prisma/client";

export class CreateTodoDto {
  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  name: string;

  @MaxLength(255)
  @IsString()
  @IsOptional()
  description?: string;

  @IsEnum(Status)
  @IsOptional()
  status?: Status;
}
