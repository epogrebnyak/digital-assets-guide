---
title: Infrastructure
description: Which chain?
draft: true
sidebar:
  order: 21
---

## Day 5. Blockchain Networks

Covers Layer 1 networks and the market infrastructure that sits on top of them: wallets, exchanges, DAOs, oracles.

Layer 1 and Layer 2 networks:

- Layer 1 – base blockchains (Bitcoin, Ethereum, Solana, Avalanche, Cardano, Sui, Aptos)
- Layer 2 – scaling solutions (Arbitrum, Optimism, Base, zkSync, StarkNet, Polygon zkEVM)
- App-Specific Chains – application-specific blockchains (dYdX, Injective)

Wallets and custody:

- Hot Wallets – connected to internet (MetaMask, Phantom, Coinbase Wallet)
- Cold Wallets – offline storage (Ledger, Trezor, Paper Wallets)
- MPC (Multi-Party Computation) – distributed key generation; no single private key
- Multisig – require multiple signatures (Gnosis Safe, Squads)
- Custodians – institutional storage (Coinbase Custody, Fireblocks, BitGo)

Exchanges:

- CEX (Centralized Exchanges) – order book model; KYC required (Coinbase, Binance, Kraken)
- DEX (Decentralized Exchanges) – AMM model; permissionless (Uniswap, Curve, PancakeSwap)
- OTC Desks – over-the-counter for large trades (Genesis, Galaxy, Cumberland)

DAOs:

- What are DAOs? – organizations governed by smart contracts and token-holder voting
- Examples – MakerDAO, Uniswap DAO, Aragon
- Legal Structures – unincorporated associations, LLCs, foundations

Oracles:

- Price Feeds – real-time asset prices (Chainlink, Pyth, RedStone)
- Off-Chain Data – bring external data on-chain (sports, weather, elections)
- Verifiable Randomness – randomness for gaming/lotteries (Chainlink VRF)
- Dispute Resolution – Kleros, UMA (optimistic oracles)

CEX, DEX, MPC, DAO — see Abbreviations.

---

## Day 6. Scaling and Interoperability

Covers Layer 2, Layer 3, and cross-chain designs built to work around the scalability trilemma.

The scalability trilemma:

- Decentralization – many participants; permissionless access
- Security – resistance to attacks; economic finality
- Scalability – high throughput; low fees

The trilemma states you can only have two of the three at any given time.

Layer 2 solutions:

- Optimistic Rollups – assume transactions are valid; dispute period (Arbitrum, Optimism)
- ZK-Rollups – use zero-knowledge proofs for validity; faster finality (zkSync, StarkNet)
- State Channels – off-chain interactions with on-chain settlement (Lightning Network, Raiden)
- Sidechains – independent chains connected to L1 (Polygon PoS, xDai)
- Validiums – off-chain data availability with on-chain validity proofs
- Volitions – hybrid of rollup and validium (users choose data availability)

Data availability layers:

- EigenDA – Ethereum-restaked data availability (built on EigenLayer)
- Celestia – modular blockchain; separates consensus from execution
- Avail – data availability layer for rollups (Polygon)
- Near DA – data availability for Ethereum rollups

Cross-chain interoperability:

- Bridges – transfer assets between chains (Wormhole, Axelar, Multichain)
- IBC (Inter-Blockchain Communication) – Cosmos ecosystem standard for cross-chain communication
- LayerZero – omnichain interoperability protocol; cross-chain messaging
- Axelar – decentralized cross-chain gateway
- Wormhole – generic messaging protocol connecting 30+ chains

Shared security:

- Restaking (EigenLayer) – restake ETH to secure other protocols
- AVS (Actively Validated Services) – services secured by restaked ETH
- Shared Security Models – Polkadot relay chain, Cosmos hub

Trilemma, Rollup, IBC — see Glossary.

---

## Day 7. On-Chain Analytics

Covers tools used to observe and query blockchain activity directly.

Exploring blockchains:

- Etherscan – Ethereum block explorer; transaction tracking
- Solscan – Solana block explorer
- Dune Analytics – SQL-based blockchain data queries
- Nansen – wallet labeling, whale tracking, smart money flows
- Arkham – on-chain intelligence platform

Data providers:

- The Graph – indexing protocol; GraphQL queries
- Chainlink – price feeds, off-chain data, randomness, automation
- Pyth – real-time price feeds; Solana-first, multi-chain
- Covalent – unified API for multiple blockchains
- Goldsky – subgraph hosting and real-time data pipelines
- Flipside – analytics platform; query, visualize, dashboards

Portfolio and wallet tracking:

- Zapper – cross-chain portfolio dashboard
- DeBank – wallet tracking and DeFi position monitoring
- Zerion – portfolio management and on-chain activity feed

Indexing, Subgraph — see Glossary.
