import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import Web3 from 'web3';
import { Web3Service } from './web3.service';

@Module({
  imports: [ConfigModule],
  providers: [
    {
      provide: 'Web3',
      useFactory: (configService: ConfigService) => {
        return new Web3(configService.get('BLOCKCHAIN_URL'));
      },
      inject: [ConfigService],
    },
    {
      provide: 'Config',
      useFactory: (configService: ConfigService) => {
        return {
          wallet: configService.get('WALLET'),
          privateKey: configService.get('PRIVATE_KEY'),
        };
      },
      inject: [ConfigService],
    },
    Web3Service,
  ],
  exports: [Web3Service],
})
export class Web3Module {}