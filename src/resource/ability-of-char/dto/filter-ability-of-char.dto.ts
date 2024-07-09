import { ApiProperty } from "@nestjs/swagger";

export class FilterAbilityOfCharDto {
    @ApiProperty({ name: 'id', description: 'The id of the ability of char' })
    id?:string;

    @ApiProperty({ name: 'abilityId', description: 'The abilityId of the pokemon' })
    abilityId?: string;

    @ApiProperty({ name: 'charId', description: 'The charId of the pokemon' })
    charId?: string;
}
