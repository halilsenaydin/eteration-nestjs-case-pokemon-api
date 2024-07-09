import { CreateCharAbilityDto } from "src/resource/char-ability/dto/create-char-ability.dto";
import { CreateCharTypeDto } from "src/resource/char-type/dto/create-char-type.dto";

export class CreateCharDto {
    name: string;
    weight: number;
    height: number;
    isDefault: boolean;
    abilities: CreateCharAbilityDto[];
    charTypes: CreateCharTypeDto[];
}
