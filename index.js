async function transferToExternalExchange(amount, destinationExchange) {
    const tx = await dexContract.transferToExternalExchange(amount, destinationExchange);
    await tx.wait();
    return tx.hash;
  }
  
  async function convertTokens(tokenIn, amountIn, tokenOut) {
    const tx = await dexContract.convertTokens(tokenIn, amountIn, tokenOut);
    await tx.wait();
    return tx.hash;
  }
  