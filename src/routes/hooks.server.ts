import SvelteKitAuth from '@auth/sveltekit';
import GitHub from '@auth/core/providers/github';

export const handle = SvelteKitAuth({
  providers: [GitHub({ clientId: 'foo', clientSecret: 'secrets' })]
});

// TODO: https://authjs.dev/reference/sveltekit/
