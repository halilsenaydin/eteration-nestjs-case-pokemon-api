import { ApiProperty } from "@nestjs/swagger";

export class CreateAuthDto {
    @ApiProperty({ example: 'Halil İbrahim ŞENAYDIN', description: 'Current user full name.' })
    name: string;
}
