const crypto = require("crypto");

const TRIVIAL_PARTITION_KEY = "0";
const MAX_PARTITION_KEY_LENGTH = 256;

exports.deterministicPartitionKey = (event) => {
  let candidate = TRIVIAL_PARTITION_KEY;

  if (event) {
    if (event.partitionKey) {
      candidate = event.partitionKey;

      if (typeof candidate !== "string") {
        candidate = JSON.stringify(candidate);
      }
    } else {
      candidate = createHashFromInput(JSON.stringify(event));
    }
  }

  if (!candidate) {
    throw new Error("Failed to create hash")
  }
  
  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = createHashFromInput(candidate);
  }

  return candidate;
};

exports.createHashFromInput = (input) => {
  try {
    return crypto.createHash("sha3-512").update(input).digest("hex");
  } catch (e) {
    console.error("Failed to create hash");
  }
}