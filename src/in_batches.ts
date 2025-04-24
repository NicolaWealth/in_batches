export const inBatches = {
  sync: <T>(elements: Iterable<T>, size: number, callback: (elements: T[], batchNum: number) => void) => {
    const iter = elements[Symbol.iterator]();
    let n = 0;
    let batchNum = 0;
    let batch: T[] = [];

    for (; ;) {
      for (let i = 0; i < size; ++i) {
        const t = iter.next();
        if (t.done) {
          if (batch.length > 0) {
            callback(batch, batchNum);
          }
          return n;
        }
        batch.push(t.value);
        n += 1;
        if (batch.length === size) {
          callback(batch, batchNum);
          batch = [];
          batchNum += 1;
        }
      }
    }
  },
  async: async <T>(elements: Iterable<T>, size: number, callback: (elements: T[], batchNum: number) => Promise<void>) => {
    const iter = elements[Symbol.iterator]();
    let n = 0;
    let batchNum = 0;
    let batch: T[] = [];

    for (; ;) {
      for (let i = 0; i < size; ++i) {
        const t = iter.next();
        if (t.done) {
          if (batch.length > 0) {
            await callback(batch, batchNum);
          }
          return n;
        }
        batch.push(t.value);
        n += 1;
        if (batch.length === size) {
          await callback(batch, batchNum);
          batch = [];
          batchNum += 1;
        }
      }
    }
  }

};
