import { PartialType } from '@nestjs/mapped-types';
import { CreateTypeOfCharDto } from './create-type-of-char.dto';

export class UpdateTypeOfCharDto extends PartialType(CreateTypeOfCharDto) {}
