import { PartialType } from '@nestjs/mapped-types';
import { CreateCharAbilityDto } from './create-char-ability.dto';

export class UpdateCharAbilityDto extends PartialType(CreateCharAbilityDto) {}
