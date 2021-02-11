# @floss/sleep

Zero dependencies, Promise-based, sleep utility function. And a synchronous, thread-blocking version.

## Installation

```bash
yarn add @floss/sleep
npm -i @floss/sleep
```

## Usage

Simply call `sleep()`, specifying the number of milliseconds to wait. `sleep()` returns a Promise that resolves to `void` when the specified time has passed.

```javascript
import sleep from "@floss/sleep"

;(async () => {
  // do something
  // sleep for 10 seconds
  await sleep(10000)
  // do something else
})
```

Here's a demonstration of blocking vs. non-blocking Javascript, using `sleep()` aswell as the synchronous (blocking) function named `paralyze()`.

```javascript
import {sleep, paralyze} from "@floss/sleep";

// Setup interval and keep ID.
const id = setInterval((o) => console.log(++o[0]), 0, [0]);

// The asyncronous sleep shouldn't affect the
// timer. But after 2 seconds the timeout has
// been reached...
sleep(2000).then(() => {

  // ... and the synchronous function is called,
  // leading to complete silence for 2 seconds.
  paralyze(2000);

  // And now, let's wait for another 2 seconds
  // asynchronously. The thread is no longer
  // blocked, so our interval is now allowed to
  // proceed.
  sleep(2000).then(() => clearInterval(id));

});
```
