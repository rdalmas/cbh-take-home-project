const crypto = require("crypto");

const { deterministicPartitionKey, createHashFromInput } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("should return the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("should return a hash when a number input is given", () => {
    const trivialKey = deterministicPartitionKey(9999);
    const expectedTrivialKey = crypto.createHash("sha3-512").update(JSON.stringify(9999)).digest("hex");
    expect(trivialKey).toBe(expectedTrivialKey);
  });

  it("should return a hash when a string input is given", () => {
    const trivialKey = deterministicPartitionKey("9999");
    const expectedTrivialKey = crypto.createHash("sha3-512").update(JSON.stringify("9999")).digest("hex");
    expect(trivialKey).toBe(expectedTrivialKey);
  });

  it("should return partitionKey value stringified if length is less than MAX_PARTITION_KEY_LENGHT", () => {
    const stubEvent = {
      partitionKey: 1
    }
    const trivialKey = deterministicPartitionKey(stubEvent);
    expect(trivialKey).toBe(JSON.stringify(stubEvent.partitionKey));
  });

  it("should return hash if param's int length is greater than MAX_PARTITION_KEY_LENGHT", () => {
    const param = 123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890;
    const trivialKey = deterministicPartitionKey(param);
    const expectedTrivialKey = crypto.createHash("sha3-512").update(JSON.stringify(param)).digest("hex");
    expect(trivialKey).toBe(expectedTrivialKey);
  });

  it("should return hash if param's string length is greater than MAX_PARTITION_KEY_LENGHT", () => {
    const param = "123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890";
    const trivialKey = deterministicPartitionKey(param);
    const expectedTrivialKey = crypto.createHash("sha3-512").update(JSON.stringify(param)).digest("hex");
    expect(trivialKey).toBe(expectedTrivialKey);
  });

  it("should return a hash if another key is provided inside the event", () => {
    const stubEvent = {
      anotherKey: 9999
    }
    const trivialKey = deterministicPartitionKey(stubEvent);
    const expectedTrivialKey = crypto.createHash("sha3-512").update(JSON.stringify(stubEvent)).digest("hex");
    expect(trivialKey).toBe(expectedTrivialKey);
  });

  it.slip("should log on the console if an error ocurr while creating hash", () => {
    const logSpy = jest.spyOn(console, 'error');
    const createHashMock = jest.spyOn(createHashFromInput).mockImplementationOnce(() => { 
      throw new Error()
    });

    

    expect(() => { deterministicPartitionKey("1"); }).toThrow('Failed to create hash');
    expected(createHashMock).toHaveBeenCalled(1);
    expected(logSpy).toHaveBeenCalled(1);
  });
});
