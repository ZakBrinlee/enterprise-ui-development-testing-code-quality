import { test, expect, vi } from 'vitest';
import { log } from './log';

// Completely stub out a module
// vi.mock('vitest, (args) => {return (...)})
test('it spies on the multiply method', () => {
  vi.spyOn(console, 'log').mockImplementation(() => {});

  log('log', 1,2,3);

  expect(console.log).toHaveBeenCalledWith(1,2,3);
});
