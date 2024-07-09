import { ApiProperty } from "@nestjs/swagger";

export class FilterCharDto {
    @ApiProperty({ example: '1eafe086-8a5a-41b8-bc06-aab00d901cd8', description: 'The id of the pokemon' })
    id?: string;

    @ApiProperty({ example: 'bulbasaur', description: 'The name of the pokemon' })
    name?: string;

    @ApiProperty({ example: 250, description: 'The weight of the pokemon' })
    weight?: number;

    @ApiProperty({ example: 100, description: 'The height of the pokemon' })
    height?: number;

    @ApiProperty({ example: true, description: 'Is default pokemon?' })
    isDefault?: boolean;
}
