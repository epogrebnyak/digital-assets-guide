---
title: Risks
description: Risk Management
sidebar:
  order: 50
  badge:
    text: New
    variant: tip
---

Many things in blockchain may not work as intended.

- User error and key loss <!-- Lost seed phrases, wrong addresses, phishing, and malicious dApps -->
- Smart contract flaws <!-- Code bugs, oracle manipulation, bridge exploits, and governance attacks drain funds at scale. -->
- Economic and market exploits <!-- Impermanent loss, liquidation cascades, stablecoin de-pegs, MEV, and rug pulls -->
- Custodial and counterparty risk <!-- Exchange insolvencies (FTX, Mt. Gox), withdrawal freezes, and hot-wallet hacks -->
- Network failures <!-- 51% attacks, censorship, liveness failures, and RPC downtime -->
- Regulatory and legal uncertainty
- Existential and long-term threats <!-- Quantum computing, the scalability-security-decentralization trilemma, and ecosystem-wide composability cascades threaten foundational viability. -->

## Lessons learned

### Exchange and fund failures

- Mt. Gox <!-- hover: 2014 -->
- FTX <!-- hover: 2022 -->
- Celsius <!-- hover: 2022 -->
- BlockFi <!-- hover: 2022 -->

### DeFi exploits

- The DAO <!-- hover: 2016 re-entrancy, led to Ethereum fork -->
- Poly Network <!-- hover: 2021 bridge exploit $611M -->
- Ronin Bridge <!-- hover: 2022 private key compromise  $625M -->
- Euler Finance <!-- hover: 2023 flash loan attack,  $197M -->
- Compound

### Stablecoin collapses

- Terra/LUNA <!-- hover: 2022  algorithmic death spiral, $40B -->
- USDC de-peg <!-- hover: 2023  Silicon Valley Bank exposure -->

### Speculative waves

- ICO (2017-2018) <!-- Scams and retail losses -->
- NFT (2021-2022) <!-- Wash trading, illiquidity -->
- DTC (2026) <!-- No sustainable business model -->

### Regulatory actions

- Binance <!-- 2023-2024 DOJ charges, regulatory settlements -->
- Tornado Cash <!-- 2022 OFAC sanctions on smart contracts -->

## Threat surface

### Smart contracts and algorithms

**Algorithmic risks**

- Errors in consensus, bonding curves, AMM formulas, rounding erros
- Example: Terra/LUNA's death spiral was algorithmic, not a hack

**Smart contract vulnerabilities**

- Re-entrancy, access control, logic flaws, upgradeability risks
- Example: The DAO (2016)

### Malicious information

**Oracle manipulation**

- Price feed manipulation via flash loans or low-liquidity pools
- Example: Mango Markets (2022) - exploited via manipulated oracle prices

**Bridge and interoperability risks**

- Cross-chain messages can be spoofed or replayed
- Example: Any bridge with trusted validators

### Execution risks

**Governance risks**

- Token-based voting can be captured by whales or attackers
- Example: Aave, Compound - governance attacks remain theoretical but persistent

**Systemic contagion**

- Concentration of stablecoin reserves in a single bank <!-- hover: USDC at SVB -->
- Interconnected leverage across DeFi protocols

### User as a target

**Key management and custody risks**

- Private key loss, theft, or compromise
- Social engineering, phishing, sim-swapping, insider threats

**Behavioral and social engineering**

- Honey-pots, rug pulls, fake websites, malicious browser extensions
- Pump-and-dump schemes, influencer manipulation
