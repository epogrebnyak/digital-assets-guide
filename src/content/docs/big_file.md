---
title: "Digital Assets Guide: Technology, Applications and Markets"
sidebar:
  order: 999
---

Foundations

## Day 1. Why Blockchain

Use cases split between theoretical and practical. Theoretical:

- Decentralized everything (governance, identity, voting)
- Censorship-resistant finance
- Global, permissionless access
- Cross-border payments and remittances
- Fundraising (ICO boom)
- Transparent supply chains
- Digital ownership and provenance (art, collectibles, gaming)

Practical today:

- Payments and liquidity
- Programmable money
- Tokenization of real-world assets

Market cycles to date:

- 2013–2014 – First crypto boom (BTC hits $1,000)
- 2017–2018 – ICO boom
- 2020–2021 – DeFi Summer + NFT explosion
- 2022 – Crypto winter (Terra/LUNA collapse, 3AC, FTX)
- 2023–2024 – Institutional adoption (ETFs)
- 2025–2026 – AI agents, RWAs, regulatory clarity emerging

Covers the motivation for blockchain, not its mechanics, and the market cycles that have followed since.

Four problems motivate the technology:

- The Trust Problem – how do two strangers transact without intermediaries?
- The Double-Spend Problem – preventing the same digital asset from being spent twice
- The Centralization Problem – single points of failure, censorship, rent-seeking
- The Internet of Value – moving value as easily as moving information

Use cases split between theoretical and practical. Theoretical:

- Decentralized everything (governance, identity, voting)
- Censorship-resistant finance
- Global, permissionless access
- Cross-border payments and remittances
- Fundraising (ICO boom)
- Transparent supply chains
- Digital ownership and provenance (art, collectibles, gaming)

Practical today:

- Payments and liquidity
- Programmable money
- Tokenization of real-world assets

Market cycles to date:

- 2013–2014 – First crypto boom (BTC hits $1,000)
- 2017–2018 – ICO boom
- 2020–2021 – DeFi Summer + NFT explosion
- 2022 – Crypto winter (Terra/LUNA collapse, 3AC, FTX)
- 2023–2024 – Institutional adoption (ETFs)
- 2025–2026 – AI agents, RWAs, regulatory clarity emerging

Double-Spend, Decentralization, ICO — see Glossary.

---

## Day 2. Building Blocks

Breaks blockchain into its constituent primitives: cryptography, data structures, accounts, networks, consensus, and incentives.

Three cryptographic primitives:

- Hashes – one-way functions (SHA-256, Keccak-256) for data integrity
- Signatures – digital signatures (ECDSA, Ed25519) for authentication
- Zero Knowledge Proofs – prove knowledge without revealing data (ZK-SNARKs, ZK-STARKs)

Data structures:

- Blocks – batches of transactions linked via hashes
- Merkle Trees – efficient verification of transaction inclusion
- Tries – sparse Merkle Tries for state storage (Ethereum's Patricia Trie)

Account models:

- UTXO (Bitcoin) – unspent transaction outputs; discrete "coins" spent and created
- EOA (Externally Owned Account) – controlled by a private key; initiates transactions
- Contract Accounts – controlled by smart contract code; cannot initiate transactions

Node types:

- Full Nodes – validate and relay transactions; store the full blockchain
- Light Nodes – verify transactions without storing the full chain
- Archive Nodes – store all historical states for querying
- Mining/Validator Nodes – produce new blocks and secure the network

Pending transaction queue:

- Mempool (Memory Pool) – pending transaction queue before inclusion
- Transaction Propagation – gossip protocol for broadcasting transactions
- Gas Auction – fee market for transaction ordering
- Front-running – MEV extraction via transaction ordering

Consensus mechanisms:

- PoW (Proof of Work) – energy-intensive; Bitcoin, Dogecoin (legacy)
- PoS (Proof of Stake) – capital-intensive; Ethereum, Solana, Cardano
- PoA (Proof of Authority) – identity-based; private/permissioned chains

Economic incentives:

- Fees – gas fees, priority fees, base fees (EIP-1559)
- Slashing – penalties for validator misbehavior
- Rewards – block rewards, staking yields, delegation income

On-chain governance:

- Proposal Mechanisms – how proposals are submitted and funded
- Voting Systems – token-weighted voting, quadratic voting, delegation
- Execution – smart contract enforcement of governance decisions
- Examples – Uniswap, Compound, Aave, MakerDAO

MEV, value extracted from transaction ordering:

- What is MEV? – value extracted by reordering, inserting, or censoring transactions
- MEV Types – arbitrage, liquidation, front-running, sandwich attacks
- MEV-Boost – PBS (Proposer-Builder Separation) mechanism
- Mitigation – Flashbots, privacy mempools, threshold encryption
- Economic Impact – extracted value; miner/validator revenue

UTXO, EOA, PoW, PoS, MEV — see Glossary and Abbreviations.

---

## Day 3. Programmability

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

---

## Day 4. Workflows

Covers the actual sequence of actions a user or transaction goes through.

Transaction lifecycle, eight steps:

- Step 1: Submit – user signs and broadcasts transaction
- Step 2: Mempool – transaction enters the pending queue
- Step 3: Validation – nodes validate signature, balance, nonce
- Step 4: Selection – validator selects transactions for block
- Step 5: Execution – smart contract executes; state updates
- Step 6: Block Proposal – block is proposed to network
- Step 7: Consensus – validators reach consensus
- Step 8: Finality – transaction is irreversible

Token issuance:

- Minting – creating new tokens (ERC-20, ERC-721)
- Burning – destroying tokens (reduce supply)
- Airdrops – distributing tokens to wallet addresses
- Vesting – locked tokens released over time
- Distribution Models – ICO, IDO, IEO, fair launch

On/off ramps:

- On-Ramps – fiat → crypto (Coinbase Pay, MoonPay, Ramp, Transak)
- Off-Ramps – crypto → fiat (withdrawals to bank accounts)
- Settlement – ACH, SWIFT, SEPA, FedWire
- Stablecoin Gateways – USDC/USDT on-ramps via Circle, Kraken, Binance

Mempool, Finality, Airdrop — see Glossary.

---

Infrastructure

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

---

Assets and Applications

## Day 8. Digital Assets and Tokenisation

Covers existing digital assets, starting with native currencies and moving through fungible contract coins.

Native currencies:

- BTC (Bitcoin) – digital gold; store of value; largest market cap
- ETH (Ethereum) – programmable money; DeFi ecosystem
- SOL (Solana) – high performance; low fees
- Others – AVAX, DOT, ADA, NEAR, SUI, APT

Stablecoins, fiat-backed:

- USDC – fully reserved; audited (Circle)
- USDT – partially reserved; most liquid (Tether)
- DAI – over-collateralized by crypto (MakerDAO)
- USDe – delta-neutral synthetic stablecoin (Ethena)

Commodity-backed:

- PAXG – gold-backed (Paxos)
- XAUT – gold-backed (Tether)

Algorithmic:

- UST – failed (Terra/LUNA collapse)
- Frax – hybrid model (partial collateral + algorithm)

Tokenized securities:

- Equity Tokens – represent company shares (tZERO, Securitize)
- Debt Tokens – tokenized bonds, loans
- Fund Tokens – tokenized investment funds (Hamilton Lane, KKR)
- REITs – real estate investment trust tokens

Other real-world assets (RWAs):

- Real Estate – tokenized property ownership (Propy, RealT)
- Art and Collectibles – fractional ownership (Masterworks)
- Commodities – oil, gold, agricultural products
- Private Credit – tokenized loans (Centrifuge, Maple)
- Treasuries – tokenized US government bonds (Ondo, Backed)

Memecoins and NFTs:

- Memecoins – DOGE, SHIB, PEPE (culture-driven; high volatility)
- NFTs – CryptoPunks, Bored Apes, Azuki (digital art and collectibles)
- Utility NFTs – access passes, tickets, membership
- Fractional NFTs – shared ownership of expensive NFTs

Stablecoin, RWA, NFT — see Glossary and Abbreviations.

---

## Day 9. Programmable Finance

Covers decentralised finance: assets that provide yield and can be exchanged without traditional intermediaries.

Automated market makers:

- How AMMs Work – liquidity pools replace order books; x*y=k invariant
- Examples – Uniswap, Curve, Balancer, PancakeSwap
- Concentrated Liquidity – Uniswap v3's capital efficiency
- Stablecoin Pools – Curve's low-slippage pools

Lending and borrowing:

- How It Works – users supply assets to earn yield; borrowers over-collateralize
- Examples – Aave, Compound, Morpho
- Over-Collateralization – borrow less than supplied value; liquidated if underwater
- Flash Loans – uncollateralized loans borrowed and repaid in same block
- Yield – variable rates vs fixed rates

Staking and restaking:

- Staking – lock assets to secure network; earn rewards
- Liquid Staking – staked assets tokenized (stETH, rETH, mSOL)
- Restaking (EigenLayer) – restake ETH to secure other protocols
- AVS (Actively Validated Services) – services secured by restaked ETH

Derivatives:

- Options – call and put options on crypto (Lyra, Deribit)
- Perpetuals – no-expiry futures with funding rates (GMX, dYdX, Hyperliquid)
- Prediction Markets – bet on real-world outcomes (Polymarket)
- Insurance – protocol cover and protection (Nexus Mutual)

Aggregators and intent-based architectures:

- Aggregators – find best prices across multiple DEXs (1inch, Paraswap, Matcha)
- Intent-Based Architecture – users express "intents"; solvers compete to fill orders (UniswapX, 1inch Fusion)
- RFQ (Request for Quote) – quote-based trading
- Solver Competition – maximizes execution quality and MEV protection

AMM, Flash Loan, Perpetual — see Abbreviations.

---

## Day 10. Emerging Verticals

Covers emerging use cases like DePIN alongside cases that have gone frozen or stale, like GameFi and NFTs.

DePIN:

- Compute and Storage – Render, Akash, Filecoin
- Wireless and Connectivity – Helium
- Mapping and Sensors – Hivemapper, WeatherXM
- Economic Model – token incentives for real-world hardware contribution

GameFi:

- Play-to-Earn – Axie Infinity and the P2E boom-and-bust cycle
- On-Chain Gaming Economies – Immutable, Gala Games
- Current State – cooled significantly since 2021–2022 peak; sustainability challenges

SocialFi:

- Decentralized Social Protocols – Farcaster, Lens Protocol
- Monetization Experiments – friend.tech and social token models
- Current State – niche adoption; unclear path to mainstream

Identity and reputation:

- Soulbound Tokens – non-transferable tokens for credentials and reputation
- On-Chain Identity – wallet-linked reputation and credentialing systems
- Use Cases – undercollateralized lending, sybil resistance, DAO governance weighting

DePIN, Soulbound Token — see Glossary.

---

Markets and Adoption

## Day 11. Public Markets

Covers disclosures of public companies that give exposure to digital assets or rely on them as part of their business model.

ETFs:

- Spot ETFs – hold actual BTC (IBIT – BlackRock, FBTC – Fidelity, BITB – Bitwise, ARKB – ARK/21Shares)
- Futures ETFs – hold BTC futures contracts (BITO, BITI – ProShares)
- Flows – institutional inflows; demand drivers
- Regulatory Impact – SEC approvals; mainstream access

Corporate treasuries:

- MicroStrategy – largest corporate BTC holder
- Marathon Digital – largest public Bitcoin miner
- Other Treasury Players – Tesla, Block, Semler Scientific
- BTC Yield – corporate performance metric

Miners:

- Public Miners – Marathon, Riot, CleanSpark, Core Scientific
- Hashrate – network security metric; mining difficulty
- Energy Costs – electricity dominates operating expenses
- Post-Halving Economics – revenue halves every 4 years

Business exposure:

- Coinbase (Exchange) – trading fees, subscription services, staking, custody; institutional prime brokerage; Base L2 network; US-listed
- Circle (Stablecoin Issuer) – issues USDC; revenue from reserve interest income; partnerships with Visa, BlackRock; MiCA compliant
- Securitize (Tokenization Platform) – tokenization, issuance, compliance, investor management; SEC-registered transfer agent; partnerships with BlackRock, Apollo, Polygon

Spot ETF, Hashrate — see Glossary.

---

## Day 12. Adoption

Covers institutional, retail, and developer adoption of digital assets.

Institutional adoption:

- Robinhood – commission-free trading with crypto integration (BTC, ETH, DOGE, SHIB); self-custody Robinhood Wallet; revenue from PFOF and crypto trading
- Stripe – crypto payouts and fiat-to-crypto on-ramps; USDC settlements; Solana/ETH payouts; embedded developer APIs
- Visa – USDC settlement on Solana/Ethereum; Visa-backed crypto debit cards; tokenized asset platform
- Western Union – cross-border remittances; stablecoin settlement pilots; cost reduction vs. traditional wire transfers

Wallets:

- MetaMask – most popular EVM wallet
- Phantom – Solana-focused wallet (multi-chain expanding)
- Trust Wallet – multi-chain, Binance-backed
- Coinbase Wallet – self-custody wallet; dApp browser
- Social Wallets – email/social recovery; easier onboarding

Crypto cards:

- Providers – Coinbase Card, Binance Card, Crypto.com, BitPay
- Settlement – instant fiat conversion at POS
- Rewards – cashback in crypto (1–5% in BTC/ETH)

Transaction activity:

- Active Addresses – daily unique wallets transacting
- Transaction Volume – on-chain value transferred
- DApp Usage – DeFi, gaming, NFT marketplace activity
- Key Metrics – TVL, daily txns, unique users, fees paid

Developer adoption:

- GitHub Activity – commits, contributors, repositories
- Hackathons – ETHGlobal, Solana Hacker House
- New Protocols – deployment of new projects per network
- Developer Tools – SDKs, APIs, frameworks
- Ecosystem Metrics – developer retention, active builders

PFOF, TVL — see Abbreviations.

---

Risks, Regulation and Outlook

## Day 13. Risks

Covers what can go wrong across the stack.

Market and liquidity risk:

- Price Volatility – crypto market 50–80% drawdowns common
- Liquidity Crunch – thin order books; slippage in large trades
- Correlation – crypto often correlated to tech stocks and macro
- Black Swan Events – exchange failures (FTX), stablecoin de-pegs (UST)

Counterparty and custody risk:

- Exchange Risk – CEX insolvency (FTX, Mt. Gox)
- Custodian Risk – theft, loss, or mismanagement of funds
- Lending Counterparties – Genesis, Celsius, BlockFi failures
- Settlement Risk – settlement delays or failures in bridging/settlement

Smart contract risk:

- Code Vulnerabilities – reentrancy, overflow, logic flaws
- Audit Gaps – no audit, incomplete audit, or missed vulnerabilities
- Hacks and Exploits – DeFi protocols targeted (Wormhole, Ronin, Euler)
- Upgrade Risk – proxy upgradeability risks (admin key compromise)
- Rug Pulls – malicious developers draining liquidity

Operational and security risk:

- Key Management – lost private keys, compromised seed phrases
- Internal Threats – insider attacks (exchange employees)
- Infrastructure – RPC failures, cloud provider outages
- Phishing and Social Engineering – users tricked into sharing keys

Governance and systemic risk:

- Token Holder Apathy – low participation in DAO votes
- Whale Dominance – large token holders controlling votes
- Proposal Attacks – malicious or financially motivated proposals
- Fork Risk – contentious governance forks (e.g., ETH vs ETC)
- Contagion – failure spreads across protocols (Terra collapse)
- Concentration Risk – Lido (>30% of ETH staking), USDC/USDT (stablecoin oligopoly), Coinbase (major custodian and exchange)
- Interconnectedness – overlapping liquidity across DeFi
- Composability Risk – cascading failures in interconnected protocols

Regulatory risk:

- Sudden Rule Changes – enforcement actions with limited warning
- Jurisdictional Bans – restrictions varying sharply by country
- Compliance Fragmentation – different rules across jurisdictions raise costs
- Retroactive Application – new frameworks applied to existing activity

Rug Pull, Contagion, Concentration Risk — see Glossary.

---

## Day 14. Regulation and Policy

Covers how governments and regulators are responding to digital assets.

Regulatory frameworks:

- United States – SEC (Howey Test), CFTC (commodities), FinCEN (AML/CFT), state-level (NYDFS BitLicense)
- European Union – MiCA (Markets in Crypto-Assets); comprehensive framework, 2024–2026 implementation
- United Kingdom – Financial Services and Markets Act (FSMA); FCA regulation
- Asia – Singapore (MAS, PSA), Hong Kong (SFC, VATP), Japan (PSA, JVCEA self-regulation), South Korea (VARA), China (ban on trading and mining)
- Global Fragmentation – different rules across jurisdictions; compliance complexity

Market structure:

- Exchange Regulation – licensing, registration, oversight of trading venues
- Broker-Dealer Rules – financial intermediaries subject to securities laws
- Trading Venues – ATS, MTF, and other alternative trading systems
- International Standards – FATF recommendations, IOSCO guidance

Issuance and disclosure:

- Securities Laws – Howey Test, Reves Test for digital assets
- Prospectus Requirements – disclosure for public offerings
- Exemptions – Reg D (accredited investors), Reg A+, Reg S
- Ongoing Reporting – quarterly/annual reporting for issuers

Custody and intermediation:

- Qualified Custodians – SEC/FINRA/state trust charters
- Fiduciary Duty – custodian obligations to clients
- Capital Requirements – minimum capital and insurance
- Audit and Proof of Reserves – attestation of client funds

Anti-money laundering and compliance:

- KYC (Know Your Customer) – customer identity verification
- Travel Rule – FATF Recommendation 16; information sharing between VASPs
- Sanctions Compliance – OFAC compliance, blocking sanctioned addresses
- AML Programs – risk assessment, transaction monitoring, SAR filing
- Crypto Tracing – Chainalysis, Elliptic, TRM Labs
- Private Wallets – compliance challenges and risk scoring

Taxation:

- Cost Basis Methods – FIFO, LIFO, specific identification
- Taxable Events – trades, swaps, staking rewards, airdrops treated as income
- DeFi Tax Treatment – lending, LP positions, yield farming; unresolved guidance in many jurisdictions
- Wash Sale Rules – applicability to crypto varies by jurisdiction
- Reporting Requirements – Form 1099-DA (US), exchange reporting obligations

Central Bank Digital Currencies (CBDCs):

- Wholesale CBDCs – bank-to-bank settlement; SWIFT/G7/G20 pilots
- Retail CBDCs – consumer-facing digital fiat (e-CNY in China, Digital Euro)
- China e-CNY – most advanced retail CBDC
- Digital Euro – EU investigation phase (2026 pilot)
- US Digital Dollar – no official decision; Fed research ongoing
- Stablecoins vs CBDCs – competition or coexistence? Privacy, financial stability, monetary policy

MiCA, KYC, AML, CBDC — see Abbreviations.

---

## Day 15. Outlook

Covers open, forward-looking questions rather than settled answers.

AI agents as on-chain users:

- Autonomous Agents – AI agents transacting on-chain without human intervention
- Agent Wallets – AI-controlled wallets; private key management
- Agent-to-Agent Commerce – machine-to-machine payments and settlements
- DePIN + AI – decentralized infrastructure for AI compute and data
- Challenges – agent security, accountability, and oracle manipulation

Privacy-enhancing technologies:

- ZKPs (Zero Knowledge Proofs) – private transactions (Aztec, Aleo)
- FHE (Fully Homomorphic Encryption) – computations on encrypted data
- Privacy Pools – compliant privacy; KYC+privacy coexistence
- Privacy vs Compliance – tension between anonymity and regulation
- Secure Multiparty Computation – collaborative private computations

Post-quantum cryptography (PQC):

- Quantum Threat – Shor's algorithm breaks elliptic curve signatures (ECDSA, Ed25519)
- Timeline – 2030s threat; NIST standards (Falcon, Kyber, SPHINCS+)
- Ethereum Roadmap – quantum-resistant signatures on the roadmap
- Bitcoin – no formal quantum transition plan
- Migration Challenges – upgrading wallets, exchanges, validators, and bridge protocols

Institutional convergence (TradFi + DeFi):

- Tokenized Treasuries – on-chain US Treasuries (Ondo, Backed)
- Asset Management – BlackRock, Fidelity, Franklin Templeton on-chain
- Private Markets – tokenized private equity, venture capital, real estate
- Settlement Infrastructure – JPM Onyx, Fnality, Partior
- Bank Adoption – BNY Mellon, Citi, Goldman Sachs exploring tokenization

Regulatory clarity timeline:

- United States – comprehensive framework pending (FIT21, stablecoin bills)
- Europe (MiCA) – full implementation by 2026; industry benchmark
- Asia – Singapore and Hong Kong leading; Japan and Korea regulated
- Global Coordination – G20, FATF, and IOSCO efforts
- Impact – regulatory certainty drives institutional capital

Open questions:

- Killer App? – what drives mainstream adoption? Payments, finance, gaming, identity?
- Scalability at Mass – can L2s handle billions of users?
- Consumer Protection – fraud, hacks, and user education
- Interoperability – will one chain dominate, or will many coexist via messaging?
- Cultural Resistance – will society trust decentralized systems?
- Environmental Impact – PoS solved energy, but infrastructure continues to consume
- AI x Crypto – will AI agents reshape economic participation?

PQC, FHE, ZKP — see Abbreviations.

---

## Supplement

### Glossary

| Term            | Definition                                                                      |
| --------------- | ------------------------------------------------------------------------------- |
| UTXO            | Unspent Transaction Output; discrete units of value on Bitcoin-like blockchains |
| EOA             | Externally Owned Account; controlled by a private key                           |
| Smart Contract  | Self-executing code on blockchain                                               |
| DeFi            | Decentralized Finance; permissionless financial applications                    |
| AMM             | Automated Market Maker; liquidity pool pricing mechanism                        |
| L2              | Layer 2; scaling solution built on top of L1                                    |
| Rollup          | Batch and execute L2 transactions, posting results to L1                        |
| ZK              | Zero Knowledge; cryptographic proof without revealing data                      |
| MEV             | Maximal Extractable Value; value extracted from transaction ordering            |
| DAO             | Decentralized Autonomous Organization; governed by token holders                |
| Oracles         | Provide off-chain data to smart contracts                                       |
| RWA             | Real World Asset; tokenized physical assets                                     |
| MPC             | Multi-Party Computation; distributed key generation                             |
| KYC             | Know Your Customer; identity verification                                       |
| AML             | Anti-Money Laundering; compliance framework                                     |
| MiCA            | Markets in Crypto-Assets; EU regulatory framework                               |
| CBDC            | Central Bank Digital Currency; digital fiat                                     |
| PQC             | Post-Quantum Cryptography; quantum-resistant encryption                         |
| FHE             | Fully Homomorphic Encryption; computations on encrypted data                    |
| ZKPs            | Zero Knowledge Proofs; privacy-preserving verification                          |
| DePIN           | Decentralized Physical Infrastructure Network                                   |
| Soulbound Token | Non-transferable token representing identity, credentials, or reputation        |

### Abbreviations

| Abbreviation | Full Form                                     |
| ------------ | --------------------------------------------- |
| AMM          | Automated Market Maker                        |
| AVS          | Actively Validated Service                    |
| CBDC         | Central Bank Digital Currency                 |
| CEX          | Centralized Exchange                          |
| DAO          | Decentralized Autonomous Organization         |
| DeFi         | Decentralized Finance                         |
| DePIN        | Decentralized Physical Infrastructure Network |
| DEX          | Decentralized Exchange                        |
| EOA          | Externally Owned Account                      |
| ETF          | Exchange-Traded Fund                          |
| EVM          | Ethereum Virtual Machine                      |
| FHE          | Fully Homomorphic Encryption                  |
| IBC          | Inter-Blockchain Communication                |
| KYC          | Know Your Customer                            |
| L2           | Layer 2                                       |
| MEV          | Maximal Extractable Value                     |
| MiCA         | Markets in Crypto-Assets                      |
| MPC          | Multi-Party Computation                       |
| NFT          | Non-Fungible Token                            |
| PFOF         | Payment for Order Flow                        |
| PoS          | Proof of Stake                                |
| PoW          | Proof of Work                                 |
| PQC          | Post-Quantum Cryptography                     |
| RWA          | Real World Asset                              |
| SVM          | Solana Virtual Machine                        |
| TVL          | Total Value Locked                            |
| USDC         | USD Coin                                      |
| USDT         | Tether                                        |
| UTXO         | Unspent Transaction Output                    |
| ZK           | Zero Knowledge                                |
| ZKP          | Zero Knowledge Proof                          |

### Key Market Players

| Entity           | Role                                                         | Category            |
| ---------------- | ------------------------------------------------------------ | ------------------- |
| BlackRock        | Largest asset manager; Bitcoin ETF issuer (IBIT)             | Asset Manager       |
| Fidelity         | Asset manager; Bitcoin ETF (FBTC); crypto custody            | Asset Manager       |
| Coinbase         | Largest US exchange; custody; Base L2                        | Exchange + Custody  |
| Binance          | Largest global exchange (by volume)                          | Exchange            |
| Circle           | USDC stablecoin issuer                                       | Stablecoin          |
| Tether           | USDT stablecoin issuer                                       | Stablecoin          |
| Securitize       | Tokenized securities platform; SEC-registered transfer agent | Tokenization        |
| Galaxy Digital   | Crypto investment bank; institutional trading                | Investment Bank     |
| Pantera Capital  | Crypto-focused venture capital and hedge fund                | VC + Hedge Fund     |
| a16z Crypto      | Leading crypto VC fund (Andreessen Horowitz)                 | Venture Capital     |
| MicroStrategy    | Largest corporate Bitcoin holder (treasury)                  | Corporate Treasury  |
| Marathon Digital | Largest public Bitcoin mining company                        | Mining              |
| BitGo            | Institutional custody provider                               | Custody             |
| Fireblocks       | Institutional MPC wallet and infrastructure                  | Custody + Infra     |
| Chainlink        | Leading oracle and data provider                             | Oracles             |
| The Graph        | Blockchain data indexing and querying                        | Data                |
| Dune Analytics   | On-chain data analytics platform                             | Analytics           |
| Consensys        | Ethereum developer tools (MetaMask, Infura)                  | Developer Tools     |
| Optimism         | Leading Optimistic Rollup L2                                 | L2                  |
| Arbitrum         | Leading Optimistic Rollup L2                                 | L2                  |
| zkSync           | Leading ZK-Rollup L2                                         | L2                  |
| StarkNet         | Leading ZK-Rollup L2                                         | L2                  |
| EigenLayer       | Restaking protocol                                           | DeFi Infrastructure |
| Uniswap          | Largest DEX (AMM)                                            | DeFi                |
| Aave             | Leading lending protocol                                     | DeFi                |
| Hyperliquid      | Leading perpetual DEX                                        | DeFi                |

---

### A note on sourcing

This guide is a structural reference compiled from internal course material, not a research report. If a Further Reading list per day is needed (project docs, standards specs, regulatory texts), specific days can be researched and real, verifiable links compiled on request.
