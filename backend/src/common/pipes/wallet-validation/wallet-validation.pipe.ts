import { Injectable, PipeTransform, BadRequestException } from '@nestjs/common';
import * as Web3Validator from 'web3-validator';

@Injectable()
export class WalletValidationPipe implements PipeTransform {
  transform(value: any): any {
    if (!Web3Validator.isAddress(value)) {
      throw new BadRequestException('Invalid wallet address');
    }
    return value;
  }
}







