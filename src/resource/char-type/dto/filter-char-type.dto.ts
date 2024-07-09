import { ApiProperty } from "@nestjs/swagger";

export class FilterCharTypeDto {
    @ApiProperty({ example: 'a61df574-47ca-45e1-81dd-4f5f875ca054', description: 'The id of the pokemon type' })
    id?: string;

    @ApiProperty({ example: 'poison', description: 'The name of the pokemon type' })
    typeName?: string;
}
