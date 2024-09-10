import {ApiProperty} from "@nestjs/swagger";

export class UpdateUserDto {
    @ApiProperty({required: false})
    name?: string;
    @ApiProperty({required: false} )
    phone?: string;

}
