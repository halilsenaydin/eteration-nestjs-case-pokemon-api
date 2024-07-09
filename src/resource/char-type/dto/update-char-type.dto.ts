import { PartialType } from '@nestjs/mapped-types';
import { CreateCharTypeDto } from './create-char-type.dto';

export class UpdateCharTypeDto extends PartialType(CreateCharTypeDto) {}
