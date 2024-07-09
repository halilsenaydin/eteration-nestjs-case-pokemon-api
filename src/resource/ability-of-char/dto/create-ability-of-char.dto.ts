import { ApiProperty } from "@nestjs/swagger";

export class CreateAbilityOfCharDto {
    @ApiProperty({ name: 'abilityId', description: 'The abilityId of the pokemon' })
    abilityId: string;

    @ApiProperty({ name: 'charId', description: 'The charId of the pokemon' })
    charId: string;
}
