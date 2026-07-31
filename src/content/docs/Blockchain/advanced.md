---
title: Advanced Blockchain
description: Things to check before you dive in.
draft: true
sidebar:
  label: Advanced
  order: 20
---

## A1 User Access

### Wallets and key management

- Self-custodial wallets <!-- hover: MetaMask, Phantom, Trust Wallet -->
- Smart contract wallets <!-- hover: Safe, Argent, Sequence -->
- Account abstraction <!-- hover: ERC-4337, ERC-7579 -->
- Paymasters <!-- hover: gas abstraction, sponsored transactions -->
- Hardware wallets <!-- hover: Ledger, Trezor -->
- Key recovery and social recovery

### Institutional custody

- MPC wallets <!-- hover: Fireblocks, ZenGo -->
- Multi-sig custody solutions
- Qualified custodians <!-- hover: Coinbase Custody, BitGo -->
- Prime brokerage and settlement

## Network limitations

- Maximal Extractable Value (MEV) <!-- hover: order flow, arbitrage, liquidations, sandwich attacks -->

## A2 Network Enhancements

### Intent-based execution and discovery

- Aggregators
- Solvers and intent-based execution
- Order flow auctions

### Cross-network communication

- Bridges <!-- value transfer -->
- Cross-chain messaging <!-- hoover: data transfer -->
- Light clients <!-- hoover: trustless verification -->
- Shared and decentralized sequencers <!-- hoover: atomic cross-chain composability -->

### External data

- Randomness
- Price feeds <!-- hover: Chainlink -->
- Events <!-- hover: sports, weather and elections -->
- Cross-chain data
- Data aggregation and verification

### Data persistence

- Off-chain storage <!-- hover: IPFS, Arweave and Filecoin -->
- Data availability layers <!-- hover: Celestia and EigenDA -->
- Decentralized databases <!-- hover: Ceramic and OrbitDB -->

## A3 Protection

- Smart contract audits
- Multi-sig and custody
- Bug bounties
- Formal verification
- MEV protection

## A4 Privacy

- Zero-knowledge proofs <!-- hover: ZK-SNARKs and ZK-STARKs -->
- Stealth addresses
- Confidential transactions <!-- hover: hidden amounts -->
- Private voting
- Encrypted metadata
- Selective disclosure <!-- hover: ZK-based KYC/age verification -->

## A5 Controvercies and threats

- Chain governance
- Storage and history
- What else?

# Part 4. Regulation, Compliance and Risk Management

## R1. Regulation

- EU
- US
- Other jurisdictions

- security
- commodity
- payment entity

## R2. Compliance

- KYC and AML
- Sanctions screening
- Transfer restrictions
- Travel rule
- Reporting and tax

## R3. Risk Management

### Lessons learned

#### Exchange and fund failures

- Mt. Gox <!-- hover: 2014 -->
- FTX <!-- hover: 2022 -->
- Celsius <!-- hover: 2022 -->
- BlockFi <!-- hover: 2022 -->

#### DeFi exploits

- The DAO <!-- hover: 2016 re-entrancy, led to Ethereum fork -->
- Poly Network <!-- hover: 2021 bridge exploit $611M -->
- Ronin Bridge <!-- hover: 2022 private key compromise  $625M -->
- Euler Finance <!-- hover: 2023 flash loan attack,  $197M -->
- Compound

#### Stablecoin collapses

- Terra/LUNA <!-- hover: 2022  algorithmic death spiral, $40B -->
- USDC de-peg <!-- hover: 2023  Silicon Valley Bank exposure -->

#### Speculative waves

- ICO (2017-2018) <!-- Scams and retail losses -->
- NFT (2021-2022) <!-- Wash trading, illiquidity -->
- DTC (2026) <!-- No sustainable business model -->

#### Regulatory actions

- Binance <!-- 2023-2024 DOJ charges, regulatory settlements -->
- Tornado Cash <!-- 2022 OFAC sanctions on smart contracts -->

### Threat surface

#### Smart contracts and algorithms

**Algorithmic risks**

- Errors in consensus, bonding curves, AMM formulas, rounding erros
- Example: Terra/LUNA's death spiral was algorithmic, not a hack

**Smart contract vulnerabilities**

- Re-entrancy, access control, logic flaws, upgradeability risks
- Example: The DAO (2016)

#### Malicious information

**Oracle manipulation**

- Price feed manipulation via flash loans or low-liquidity pools
- Example: Mango Markets (2022) - exploited via manipulated oracle prices

**Bridge and interoperability risks**

- Cross-chain messages can be spoofed or replayed
- Example: Any bridge with trusted validators

#### Execution risks

**Governance risks**

- Token-based voting can be captured by whales or attackers
- Example: Aave, Compound - governance attacks remain theoretical but persistent

**Systemic contagion**

- Concentration of stablecoin reserves in a single bank <!-- hover: USDC at SVB -->
- Interconnected leverage across DeFi protocols

#### User as a target

**Key management and custody risks**

- Private key loss, theft, or compromise
- Social engineering, phishing, sim-swapping, insider threats

**Behavioral and social engineering**

- Honey-pots, rug pulls, fake websites, malicious browser extensions
- Pump-and-dump schemes, influencer manipulation
