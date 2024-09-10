import {IsEmail, IsNotIn, IsString, Length, Matches} from "class-validator";
import {Transform} from "class-transformer";
import {TransformHelper} from "../../../../common/transform.helper";


export class CreateUserDto {
    @Transform(TransformHelper.trim)
    @IsString()
    @Length(2,20)
    public readonly name: string

    @IsEmail()
    @Transform(TransformHelper.trim)
    public readonly email: string

    @IsString()
    @Transform(TransformHelper.trim)
    public readonly phone: string

    @IsNotIn(['password', 'qwe', '123'])
    @Transform(TransformHelper.trim)
    @IsString()
    @Matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, {
        message: 'Incorrect password',
    })
    public readonly password: string
}
