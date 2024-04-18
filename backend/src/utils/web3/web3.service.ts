import { Inject, Injectable } from '@nestjs/common';
import { CreateTransactionDto } from 'src/wallet/dto/create-transaction.dto';
import Web3 from 'web3';

@Injectable()
export class Web3Service {
  constructor(
    @Inject('Web3')
    private readonly web3: Web3,
    @Inject('Config')
    private readonly config: { wallet: string; privateKey: string },
  ) {}
  async balance() {
    const balance = await this.web3.eth.getBalance(this.config.wallet);
    return this.web3.utils.fromWei(balance, 'wei');
  }
  async transfer(createTransactionDto: CreateTransactionDto) {
    const nonce = await this.web3.eth.getTransactionCount(
      this.config.wallet,
      'latest',
    );

    const transaction = {
      to: createTransactionDto.toWallet,
      value: createTransactionDto.value,
      gas: 21000,
      gasPrice: await this.web3.eth.getGasPrice(),
      nonce,
    };

    const signedTx = await this.web3.eth.accounts.signTransaction(
      transaction,
      this.config.privateKey,
    );

    const tx = await this.web3.eth.sendSignedTransaction(
      signedTx.rawTransaction,
    );

    return tx.transactionHash;
  }
}