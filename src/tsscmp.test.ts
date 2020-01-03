describe('worker use', () => {
  it('should display "google" text on page', async () => {
      const result = await page.evaluate(() => {
        return new Promise((resolve, reject) => {
          try {
            const myWorker = new Worker('http://127.0.0.1:3003/worker.js');
            myWorker.onmessage = function(e) {
              resolve(e.data);
            };
            myWorker.postMessage(['thing2', 'thing2']);
          } catch (err) {
            reject(err);
          }
        });
      });
    await expect(result).toBe(true)
  })
})
