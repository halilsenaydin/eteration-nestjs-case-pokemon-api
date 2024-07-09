import { ApiProperty } from "@nestjs/swagger";

export class CreateCharAbilityDto {
    @ApiProperty({ example: 'chlorophyll', description: 'The name of the pokemon ability' })
    abilityName: string;
}
