import {Observable, Subscriber, Observer} from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('completado')
};

const intervalo$ = new Observable(subs => {

    // crear contador

    let i = 0;
    const interval = setInterval(() => {
        subs.next(i++);
        console.log(i)
    }, 1000);

    setTimeout(() => {
        subs.complete();
    }, 2500)

    return () => {
        clearInterval(interval)
        console.log('intervalo destruido')
    } 

});

const subs1 = intervalo$.subscribe(num => console.log('Num:', num));
const subs2 = intervalo$.subscribe(num => console.log('Num:', num));
const subs3 = intervalo$.subscribe(num => console.log('Num:', num));

subs1.add(subs2)
     .add(subs3);

setTimeout(() => {

    subs1.unsubscribe();
    console.log('que termino')

 } , 3000
 )