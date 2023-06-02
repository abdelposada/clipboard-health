const crypto = require('crypto');
const { deterministicPartitionKey, deterministicPartitionKey2 } = require('./dpk');

const hash1 = crypto.createHash('sha3-512').update('1').digest('hex');
describe('deterministicPartitionKey', () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey2();
    expect(trivialKey).toBe('0');
  });
  it('Returns hashed value to trivial Key when input is a simple value', () => {
    const partitionKey = deterministicPartitionKey(1);
    expect(partitionKey).toBe(hash1);
  });
  it('Returns entered partitionKey if was included on the event', () => {
    const event = { partitionKey: '1' };
    const partitionKey = deterministicPartitionKey(event);
    expect(partitionKey).toBe(event.partitionKey);
  });
});
