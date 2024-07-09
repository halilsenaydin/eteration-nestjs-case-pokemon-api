import { PartialType } from '@nestjs/mapped-types';
import { CreateAbilityOfCharDto } from './create-ability-of-char.dto';

export class UpdateAbilityOfCharDto extends PartialType(CreateAbilityOfCharDto) {}
