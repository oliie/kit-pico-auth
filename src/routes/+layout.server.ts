import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async (event) => {
  if (event.locals.getSession) return { session: event.locals.getSession() };

  return { session: {} };
};
