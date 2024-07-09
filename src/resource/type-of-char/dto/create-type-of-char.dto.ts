import { ApiProperty } from "@nestjs/swagger";

export class CreateTypeOfCharDto {
    @ApiProperty({ name: 'charId', description: 'The charId of the pokemon' })
    charId: string;

    @ApiProperty({ name: 'typeId', description: 'The typeId of the pokemon' })
    typeId: string;
}
