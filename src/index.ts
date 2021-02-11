/**
 * @author     Carl Viktor Svensson
 * @license    Apache-2.0
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND.
 */

/**
 * Sleep for `ms` milliseconds.
 *
 * @export
 * @param ms Number of milliseconds to sleep
 * @returns
 */
export function sleep(ms: number): Promise<void> {
  if (typeof ms !== "number") throw new Error(`${typeof ms} is not a number`);
  if (isNaN(ms)) throw new Error(`NaN is not a valid argument`);
  return new Promise<void>((resolve) => setTimeout(resolve, ms));
}

/**
 * Blocks the main thread of the program
 * until `ms` milliseconds have passed.
 *
 * @export
 * @param ms Number of milliseconds to sleep
 * @returns
 */
export function paralyze(ms: number): void {
  if (typeof ms !== "number") throw new Error(`${typeof ms} is not a number`);
  if (isNaN(ms)) throw new Error(`NaN is not a valid argument`);

  const stopAt = Date.now() + ms;
  while (Date.now() < stopAt) {}
  return;
}

export default sleep;
