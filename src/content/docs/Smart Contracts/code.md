---
title: Code
draft: true
sidebar:
  order: 30
---


Covers smart contracts: the code that runs on top of a blockchain and defines its applications.

Virtual machines execute contract code:

- EVM (Ethereum Virtual Machine) – most widely adopted; Ethereum, Polygon, Avalanche C-Chain
- SVM (Solana Virtual Machine) – parallel execution; high throughput
- MoveVM – resource-oriented programming; Aptos, Sui
- WASM (WebAssembly) – Near, Polkadot; multi-language support

Smart contract languages:

- Solidity – primary language for EVM; JavaScript-like syntax
- Rust – used by Solana, NEAR; performance and safety focused
- Move – resource-oriented; prevents reentrancy and double-spend
- Vyper – EVM language; security-focused, Python-like
- Cairo – StarkNet; ZK-rollup native

Account abstraction and multisig:

- Account Abstraction (ERC-4337) – smart accounts that can pay gas, batch transactions, use social recovery
- Multisig (Multi-signature) – require M-of-N signatures to execute transactions (Gnosis Safe)
- Social Recovery – recover keys using trusted guardians (ERC-4337)
- Session Keys – temporary keys for dApp gaming/UX

Contract standards:

- ERC-20 – fungible tokens (USDC, UNI, AAVE)
- ERC-721 – non-fungible tokens (CryptoPunks, Bored Apes)
- ERC-1155 – multi-token standard (both fungible and non-fungible)
- ERC-4626 – tokenized vaults (yield-bearing tokens)

Writing a smart contract:

- Frameworks – Truffle, Hardhat, Foundry (EVM); Anchor (Solana, Rust)
- Testing – unit tests, integration tests, fork testing
- Deployment – deploy to testnets (Sepolia) then mainnet
- Verification – publish source code to block explorers

Audits, formal verification, and bug bounties:

- Audits – third-party code reviews (CertiK, OpenZeppelin, Trail of Bits)
- Formal Verification – mathematical proof of contract correctness
- Bug Bounties – incentivized vulnerability discovery (Immunefi)
- Common Vulnerabilities – reentrancy, front-running, logic errors, access control

EVM, ERC-20, ERC-721, Account Abstraction — see Glossary and Abbreviations.
