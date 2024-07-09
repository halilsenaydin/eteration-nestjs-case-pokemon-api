import { ApiProperty } from "@nestjs/swagger";
import { CreateCharAbilityDto } from "src/resource/char-ability/dto/create-char-ability.dto";
import { CreateCharTypeDto } from "src/resource/char-type/dto/create-char-type.dto";

export class CreateCharDto {
    @ApiProperty({ example: 'bulbasaur', description: 'The name of the pokemon' })
    name: string;

    @ApiProperty({ example: 250, description: 'The weight of the pokemon' })
    weight: number;

    @ApiProperty({ example: 100, description: 'The height of the pokemon' })
    height: number;
    
    @ApiProperty({ example: true, description: 'Is default pokemon?' })
    isDefault: boolean;

    abilities: CreateCharAbilityDto[];
    charTypes: CreateCharTypeDto[];
}
