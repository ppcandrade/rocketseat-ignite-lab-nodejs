import { IsNotEmpty, isUUID, Length } from "class-validator";

export class CreateNotificationBoby{
    @IsNotEmpty
    @isUUID
    recipientId: string;

    @IsNotEmpty
    @Length(5,240)
    content: string;

    @IsNotEmpty
    category: string;
}