import {inBatches} from "./in_batches";
import assert from "assert";

describe("inBatches", () => {
  it("with remainder", () => {
    const batches: any = [];
    const size = inBatches.sync([1, 2, 3, 4, 5, 6, 7, 8, 9], 4, (elements, batchNum) => batches.push([elements, batchNum]));
    assert.strictEqual(size, 9);
    assert.deepStrictEqual(batches, [[[1, 2, 3, 4], 0], [[5, 6, 7, 8], 1], [[9], 2]]);
  });
  it("without remainder", () => {
    const batches: any = [];
    const size = inBatches.sync([1, 2, 3, 4, 5, 6, 7, 8], 4, (elements, batchNum) => batches.push([elements, batchNum]));
    assert.strictEqual(size, 8);
    assert.deepStrictEqual(batches, [[[1, 2, 3, 4], 0], [[5, 6, 7, 8], 1]]);
  });
  it("with remainder (async)", async () => {
    const batches: any = [];
    const size = await inBatches.async([1, 2, 3, 4, 5, 6, 7, 8, 9], 4, async (elements, batchNum) => batches.push([elements, batchNum]));
    assert.strictEqual(size, 9);
    assert.deepStrictEqual(batches, [[[1, 2, 3, 4], 0], [[5, 6, 7, 8], 1], [[9], 2]]);
  });
  it("without remainder (async)", async () => {
    const batches: any = [];
    const size = await inBatches.async([1, 2, 3, 4, 5, 6, 7, 8], 4, async (elements, batchNum) => batches.push([elements, batchNum]));
    assert.strictEqual(size, 8);
    assert.deepStrictEqual(batches, [[[1, 2, 3, 4], 0], [[5, 6, 7, 8], 1]]);
  });
});
