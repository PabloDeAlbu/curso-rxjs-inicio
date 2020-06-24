import { of } from 'rxjs'

const obs$ = of<number>(1,2,3,4,5,6);
//const obs$ = of(...[1,2,3,4,5,6],9);
//const obs$ = of<any>([1,2], {a:1 , b: 2}, function(){}, true, Promise.resolve(true));

console.log('inicio del observable');
obs$.subscribe( next => console.log('next:', next) , null, () => console.log('terminamos la secuencia') );
console.log('fin del observable');