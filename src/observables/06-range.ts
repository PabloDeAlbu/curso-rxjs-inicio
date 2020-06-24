import { of, range, asyncScheduler } from 'rxjs';

const src1$ = of(1,2,3,4);
const src$ = range(1,4, asyncScheduler);

console.log('inicio');
src$.subscribe(console.log);
console.log('fin');