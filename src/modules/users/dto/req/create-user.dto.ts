import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty()
    public readonly name: string

    @ApiProperty()
    public readonly email: string

    @ApiProperty()
    public readonly phone: string

    @ApiProperty()
    public readonly password: string
}
