import { Injectable } from '@nestjs/common';
import { Web3Service } from 'src/utils/web3/web3.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';

@Injectable()
export class WalletService {
  constructor(private readonly web3Service: Web3Service) {}
  async getBalance() {
    return this.web3Service.balance();
  }
  async setTransfer(createTransactionDto: CreateTransactionDto) {
    return this.web3Service.transfer(createTransactionDto);
  }
}
