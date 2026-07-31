---
title: Components
description: Lego blocks for any chain
draft: true
sidebar:
  order: 13
---

What are the minimal building blocks to have a blockchain running? Start at the lower level with core technology, see which networks have emerged as popular, what rules keep them sustainable, and what types of assets are traded and where that happens.

## Blockchain as layered system

A blockchain system is a stack of layers. Users interact with the top layer. Consensus, execution and data storage happen at the lower levels.

1. Application layer is software that knows how to connect to blockchain, including wallets, centralized exchanges, block explorers, etc.<!-- hover: dApps, wallets, block explorers, SDKs -->
2. Execution is taking the existing state, running the smart contract and returning the new state <!-- hover: EVM, SVM, Move VM — where smart contracts run -->
3. Consensus is deciding which next blocks gets added to the chain <!-- hover: validators/miners agree on the next block, PoW or PoS -->
4. Data layer is a chain of blocks and how they are propagated to nodes <!-- hover: blocks, Merkle trees, P2P gossip, chain storage -->

## Core Technology

Imagine you have a handbook or a paper on a new blockchain, what chapters would need to be covered in it?

- Data structures <!-- hover: linked list, Merkle tree -->
- Cryptography <!-- hover: hashing, digital signatures-->
- Address space and account models <!-- hover: UTXO or account-based -->
- Peer-to-peer network <!-- hover: node discovery and gossip protocols -->
- Consensus mechanism <!-- hover: participants, rules and guarantees, PoW, PoS, PBFT -->
- Execution environment <!-- hover: EVM, SVM, Move VM, state transitions -->
- API and user interface <!-- hover: JSON-RPC, SDKs, block explorers -->

## Extra features

What else do modern networks have to offer?

- Oracles <!-- hover: Chainlink, Pyth, Chronicle -->
- Cross-chain bridges <!-- hover: LayerZero, Wormhole, Axelar -->
- Account abstraction <!-- hover: ERC-4337, smart contract wallets -->
- Privacy and zero-knowledge proofs <!-- hover: ZK-rollups, Aztec, Mina -->

## Popular chains

The Bitcoin network created a fully decentralised, tamper-free system to hold data on digital currency transactions. Etherium provided a universally accessible computing environment that can process smart contract code for many users. Several newer networks attempt to strike to the right balance between scale, speed, security, cost and level of decentralizations. There is also a move towards ensure more privacy of transactions and better user protection.
When validators are assigned we talk about private or consortium blockchains.

- Bitcoin <!-- hover: BTC, PoW, digital gold -->
- Ethereum <!-- hover: ETH, smart contracts, PoS -->
- L2 and L3 Rollups <!-- hover: Arbitrum, Optimism, Base, ZKsync -->
- Alternative L1s <!-- hover: BNB, Solana, Tron, Avalanche, Sui -->
- Private and consortium chains <!-- hover: Hyperledger, Quorum, Corda -->

Some networks had high ambitiions but practically ceased operations (e.g., EOS).

## Network incentives

What defines network economics and makes it sustainable?

- Fee models <!-- hover: gas and priority fees, EIP-1559 -->
- Staking yields and rewards <!-- hover: validator rewards, delegation -->
- Token supply and burn <!-- hover: minting, burning, buybacks, deflation -->

## Assets and contract types

Native currency units and smart contracts make up the asset universe.
How do we best classify these assets?

- Native currency <!-- hover: BTC, ETH, SOL -->
- Stablecoins <!-- hover: USDC, USDT, DAI, USDe -->
- Other fungible tokens <!-- hover: ERC-20 -->
- Non-fungible tokens <!-- hover: ERC-721, NFTs -->
- Other tokens <!-- hover: ERC-1155 semi-fungible, soulbound non-transferable tokens -->
- Off-chain data <!-- hover: oracles, storage proofs -->

## Trading venues

- Centralised exchanges <!-- hover: Coinbase, Binance, Kraken -->
- Decentralised protocols <!-- hover: Uniswap, Aave, dYdX -->
