import { ApiProperty } from "@nestjs/swagger";

export class CreateCharTypeDto {
    @ApiProperty({ example: 'poison', description: 'The name of the pokemon type' })
    typeName: string;
}
