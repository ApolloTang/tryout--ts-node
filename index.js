
require('ts-node').register({ /* options */ })
require('./foo.ts');

const sleep = (ms) => new Promise(rs=>{ setTimeout(rs, ms) });

const f = async () => {
  console.log('sleep now')
  await sleep(2000)
  console.log('done')
}

f();

