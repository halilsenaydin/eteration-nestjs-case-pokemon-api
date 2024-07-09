import { ApiProperty } from "@nestjs/swagger";

export class FilterCharAbilityDto {
    @ApiProperty({ example: 'f3f68dc7-23dd-4f29-b979-f11d7f49eae3', description: 'The id of the pokemon ability' })
    id?: string;
    
    @ApiProperty({ example: 'chlorophyll', description: 'The name of the pokemon ability' })
    abilityName?: string;
}
