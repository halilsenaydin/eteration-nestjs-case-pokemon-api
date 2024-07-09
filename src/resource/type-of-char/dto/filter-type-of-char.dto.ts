import { ApiProperty } from "@nestjs/swagger";

export class FilterTypeOfCharDto {
    @ApiProperty({ name: 'id', description: 'The id of the type of char' })
    id?:string;

    @ApiProperty({ name: 'charId', description: 'The charId of the pokemon' })
    charId?: string;

    @ApiProperty({ name: 'typeId', description: 'The typeId of the pokemon' })
    typeId?: string;
}
