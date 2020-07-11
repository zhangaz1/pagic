import { path } from '../deps.ts';
import { assertEquals } from 'https://deno.land/std/testing/asserts.ts';

import { import_, importDefault, importPagicMod, importPagicModDefault } from './import.ts';

Deno.test('[import_]', async () => {
  const output = await import_(path.resolve(Deno.cwd(), 'test/fixtures/test_export.ts'));
  assertEquals(output.foo, 1);
});
Deno.test('[importDefaul]', async () => {
  const output = await importDefault(path.resolve(Deno.cwd(), 'test/fixtures/test_export.ts'));
  assertEquals(output, 'Hello');
});
Deno.test('[importPagicMod]', async () => {
  const output = await importPagicMod('test/fixtures/test_export.ts');
  assertEquals(output.foo, 1);
});
Deno.test('[importPagicModDefault]', async () => {
  const output = await importPagicModDefault('test/fixtures/test_export.ts');
  assertEquals(output, 'Hello');
});
