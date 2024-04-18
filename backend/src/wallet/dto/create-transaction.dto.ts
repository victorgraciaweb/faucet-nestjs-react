import { IsNumber, IsPositive, IsString, Validate } from "class-validator";
import { WalletValidationPipe } from "src/common/pipes/wallet-validation/wallet-validation.pipe";

export class CreateTransactionDto {

    @IsString()
    @Validate(WalletValidationPipe, {message: 'Invalid wallet address'})
    toWallet: string;

    @IsNumber()
    @IsPositive()
    value: string;
}