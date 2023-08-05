# Superhack Project: Decentralized Journal

## Main Idea

My superhack project creates a journaling application on Base.  The funky new features is that each journal entry is memorialized as an NFT saved to your connected wallet.

The app will facilitate interactions with IPFS and FileCoin to persist the journal entry forever, avoiding any sort of vendor lock-in.  As long as there are funds in your wallet to pay persistence, journal entries will live on.

To maintain privacy, all journal entries will be encrypted using either a password or your wallet's private key.

## Script elements

* Consumer app (codename "topaz journal") deployed on Optimism and Base.
* Present problem: Medium => Sudden fees, Apple Journal App => Vendor Lock-in, Xanga => :skull:.
* Present solution: Decentralized storage avoids all of these problems.
* Louis discusses tech stack: `optimism-starter` codebase, Lighthouse storage for permanent storage contracts, smart contract mints NFT of lighthouse `cid`.
* Simon discusses UI elements and UX.
