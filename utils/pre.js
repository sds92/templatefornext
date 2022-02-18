export const upload = (a) => {
  console.log('🚀 ~ file: pre.js ~ line 4 ~ upload ~ a', a);
  return require(`../data/${a}.json`);
};
