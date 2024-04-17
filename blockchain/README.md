# Faucet Blockchain

1. Clonar el repositorio
2. Crear Wallet
```
docker run -it -v ./password.txt:/password -v ${PWD}/data:/data ethereum/client-go:stable account new --datadir /data --password /password
```
3. Sustituir direcciones de Wallets del fichero genesis.json. Pueden ser Wallets ya existentes o creadas con el anterior comando. Se pueden añadir todas las que se desee. Se configura el balance deseado para cada Wallet.
```
"alloc": {
    "<DIRECCIÓN-WALLET-PRINCIPAL>": {
        "balance": "1000000000000000000000000000"
    },
    "<DIRECCIÓN-WALLET>": {
        "balance": "1000000000000000000000000000"
    }
}
```
3. Configurar Docker desde fichero Genesis
```
docker run -it -v ./genesis.json:/genesis.json -v ${PWD}/data:/data ethereum/client-go:stable init --datadir /data /genesis.json
```
4. Levantar Blockchain
```
docker run -it -v ./password.txt:/password  -d -p 8545:8545 -p:30303:30303 \
-v ${PWD}/data:/data \
--name eth-node-01 \
ethereum/client-go:stable \
--datadir data \
--http.api personal,eth,net,web3 \
--http --http.addr 0.0.0.0 \
--http.port 8545 \
--unlock <DIRECCIÓN-WALLET-PRINCIPAL> --password /password --mine --miner.etherbase <DIRECCIÓN-WALLET-PRINCIPAL> --allow-insecure-unlock
```
5. Importar cuentas creadas en Metamask desde el fichero UTC generado con el primer comando si fuese necesario.
6. Configurar Red (Blockchain) generada en Metamask con los siguientes valores:
    * **NOMBRE DE LA RED:** CUALQUIERA
    * **URL:** http://localhost:8545
    * **IDENTIFICADOR CADENA:** 1234567
    * **SIMBOLO DE LA MONEDA:** CUALQUIERA