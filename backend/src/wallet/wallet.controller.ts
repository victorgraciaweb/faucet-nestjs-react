import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { WalletService } from './wallet.service';
import { WalletValidationPipe } from 'src/common/pipes/wallet-validation/wallet-validation.pipe';
import { CreateTransactionDto } from './dto/create-transaction.dto';

@Controller('wallet')
export class WalletController {
  constructor(private readonly walletService: WalletService) {}

  @Get(':wallet/balance')
  getBalance(@Param('wallet', new WalletValidationPipe()) toWallet: string) {
    return this.walletService.getBalance();
  }

  @Get(':wallet/send-transaction')
  sendTransaction(
    @Param('wallet', new WalletValidationPipe()) toWallet: string, 
    @Body() createTransactionDto: CreateTransactionDto
  ) {
    return this.walletService.getBalance();
  }

  /*@Post()
  setTransfer(@Body() createTransactionDto: CreateTransactionDto) {
    return this.walletService.setTransfer(createTransactionDto);
  }*/
}