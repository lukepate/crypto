const Block = require('./block');

describe('Block', () => {
  let data, lastBlock, block;

  beforeEach(() => {
      data = 'bar';
      lastBlack = Block.genesis();
      // block = Block.mineBlock(lastBlock, data);
  });

  it('it sets the `data` to match the input', () => {
    expect(block.data).toEqual(data);
  });

  // it('it sets the `lastHash` to match the hash of the last block', () => {
  //   // expect(block.lastHash).toEqual(lastBlock.hash);
  // });
})
