## WARNING: 
DO NOT SHARE THE PRIVATE KEY GENERATED WITH ANYONE. DO NOT STORE FUNDS ON GENERATED ADDRESS. ONLY USE FOR ANIMAL COLORING. CODE IS OFFERED AS IS AND DEVELOPER HAS NO LIABILITY FOR LOSS OF FUNDS OR NFTS.

### Short Version
This is a tool intended to be used with [Animal Coloring Book](https://generative-transfer-art.vercel.app/). Change `targetH` `index.js` to be the `H ` value you are looking for and run 
```node index.js```
to find an address that will give you that H value when used with Animal Coloring book. 

### Long Version
In Animal Coloring Book, colors are added based on the address you transfer to. The colors are [HSL](https://www.w3schools.com/colors/colors_hsl.asp), with S fixed at 100% and L is fixed at 50%. H varies based on the address. You can use this tool to find an address for a any specific H value. Once found, you can transfer your Animal Coloring Book to the generated address to see the color added. To transfer from the generated address, you will need to import the address to Metamask using the private key, and also seed it with enough ETH to make the transfer. 

To use 
1. Clone or download this repository. 
2. Change `targetH` `index.js` to be the `H ` value you are looking for
3. Install [Node](https://nodejs.org/en/download/) if you don't have it. 
4. Navigate to the repository in your terminal.
5. Run `yarn install` or `npm install`
5. Run 
```node index.js```