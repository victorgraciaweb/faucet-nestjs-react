import { Body, Controller, Get, Post } from '@nestjs/common';
import { WalletService } from './wallet.service';
import { WalletValidationPipe } from 'src/common/pipes/wallet-validation/wallet-validation.pipe';
import { CreateTransactionDto } from './dto/create-transaction.dto';

@Controller('wallet')
export class WalletController {
  constructor(private readonly walletService: WalletService) {}

  @Get()
  getBalance() {
    return this.walletService.getBalance();
  }

  @Post()
  setTransfer(
    //@Body('toWallet', new WalletValidationPipe()) toWallet: string, @Body('value') value: number,
    @Body() createTransactionDto: CreateTransactionDto
  ) {
    return this.walletService.setTransfer(createTransactionDto);
  }
}