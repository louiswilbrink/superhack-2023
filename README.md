# Topaz

Topaz is a journaling app that makes your thoughts last forever.  Built on Base and Optimism, Topaz saves your words onto the blockchain where only your wallet can access them.  Own each thought with Topaz.

More info in our [product spec](https://vintage-duckling-b9b.notion.site/Product-Spec-dd2c2641518a40e39a5a9f4614f7886d).

## Script elements

* Consumer app (codename "topaz journal") deployed on Optimism and Base.
* Present problem: Medium => Sudden fees, Apple Journal App => Vendor Lock-in, Xanga => :skull:.
* Present solution: Decentralized storage avoids all of these problems.
* Louis discusses tech stack: `optimism-starter` codebase (which helped with setting up a dapp with wallet connection and generated hooks based on smart contract functionality, also deploy scripts), Lighthouse storage for permanent storage contracts, smart contract mints NFT of lighthouse `cid`.
* Simon discusses UI elements and UX.
* V2 Roadmap: multiple journals
  * Ability to bookmark a page/entry? (front end)
  * Ability to highlight a part? (front end) 
  * Ability to delete/burn? (blockchain)
  * Ability to store media like voice, image, video (blockchain)
  * Ability to write by hand
  * Ability to have light and dark mode?
  * Ability to have AI-generate prompts/models
  * Ability to screen notes to check mood (most used words positive/negative)
  * Ability for user to pick paper (=background)
