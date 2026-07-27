---
title: Workflows
description: A guide in my new Starlight docs site.
sidebar:
  order: 14
---

How do users interact with blockchain? First, some assets are created on-chain. 
Users may acquire crypto assets at their address using fiat money. 
Then they can send these assets to another address.

## Asset creation

> Where do the new assets come from? Native currencies emerge as rewards to miners or 
> verifiers for supporting blockchain operations, while new smart contracts or tokens can be
> put on chain by the users. Airdrops make free transfers to users.    

- Native issuance <!-- hover: block rewards, staking and validation -->
- Token minting <!-- hover: ERC-20, ERC-721, ERC-1155 deployment -->
- Airdrops and rewards <!-- hover: retroactive, loyalty, farming incentives -->

## On-ramp and off-ramp

"On-ramp" means converting fiat money into cryptographic assets, "off-ramp" is the reverse. 
Methods differ by speed, fees, privacy, and level of ID verification (KYC) required.

- Cash at the table <!-- hover: face-to-face meetup trade for cash, no intermediary or escrow, relies on mutual trust -->
- Crypto ATM <!-- hover: cash-to-crypto kiosk, fast but high fees and lower transaction limits -->
- P2P marketplaces <!-- hover: Paxful, Bisq, LocalCoinSwap trade directly with another individual online, escrow-protected -->
- Crypto bank card <!-- hover: Coinbase Card, Crypto.com Card spend crypto directly, auto-converts at point of sale -->
- Broker <!-- hover: Robinhood, PayPal, Cash App simplified buy/sell, often can't withdraw to external wallet -->
- Centralised exchanges <!-- hover: Coinbase, Binance, Kraken buy/sell via linked bank account or card, most common entry point -->
- OTC desk <!-- hover: large trades negotiated directly with a dealer to avoid slippage on public order books -->

## Wallet as gateway

Wallet software is typically the most common way users get access to blockchain.  

- Your public key is the visible address for your funds or a smart contract you deployed.
- Your private key controls the data at this address, but the key is not designed to be human-friendly.
- Wallets help manage private keys: instead of remembering a long private key, you have a numeric code or a recovery phrase.
- Wallets also sign and send transactions to blockchain miners or validators on your behalf.
- Exchanges may offer to store your private keys on their servers, but remember "not your keys, not your crypto" holds.

## Transaction lifecycle

What are the steps for a complete cycle of a transaction on a blockchain? 

- Create a wallet (MetaMask, Trust Wallet, Phantom, Ledger).
- Get someone send you the funds (see the "On-ramp" section).
- Start transaction (specify recipient, asset, amount and gas - priority fee, gas limit).
- Sign, broadcast transaction and reach mempool. 
- Propose a block - validator/miner selects the transaction based on gas fees. 
- Consensus - network reaches consensus on the new block.
- Confirmation - block is added to the chain.
- Monitor or get notifications on success or failure. <!-- eg Etherscan -->
- A failed transaction may still cost gas.
