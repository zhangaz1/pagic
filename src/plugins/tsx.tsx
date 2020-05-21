import * as path from 'https://deno.land/std@0.51.0/path/mod.ts';

// @deno-types="https://deno.land/x/types/react/v16.13.1/react.d.ts"
import React from 'https://dev.jspm.io/react@16.13.1';
import { PagicPlugin } from '../Pagic.ts';

const markdown: PagicPlugin = async (ctx) => {
  if (!ctx.pagePath.endsWith('.tsx')) {
    return ctx;
  }

  const fullPagePath = path.resolve(ctx.config.srcDir, ctx.pagePath);
  const ContentComponent = (await import(`file://${fullPagePath}`)).default;

  return {
    ...ctx,
    title: ContentComponent.title,
    content: <ContentComponent />
  };
};

export default markdown;