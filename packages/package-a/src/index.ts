import TestRail from '@dlenroc/testrail';

export const createAbortController = (ms: number): { signal: AbortSignal; timeout: NodeJS.Timeout } => {
  const ac = new AbortController();
  const timeout = setTimeout(() => ac.abort(), ms);
  return { signal: ac.signal, timeout };
};

const tr = new TestRail({
  host: process.env.TESTRAIL_HOST!,
  username: process.env.TESTRAIL_USERNAME!,
  password: process.env.TESTRAIL_PASSWORD!,
})

const { signal, timeout } = createAbortController(20_000);
const runs = await tr.getRuns(1, {is_completed: false}, { signal });
clearTimeout(timeout);

console.log(JSON.stringify(runs, null, 2));