
export const foo='foo';
import(`./lazy-loaded-${foo}.ts`).then(foo=>{
  foo.doLog();
})