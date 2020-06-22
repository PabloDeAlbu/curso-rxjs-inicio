import {Observable, Subscriber, Observer} from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('siguiente: ', value),
    error: error => console.error('error: ', error),
    complete: () => console.info('completado')
};

const obs$ = new Observable<string>( subs => {

    subs.next(String(Date.now()));
    subs.next('Mundo!');

    subs.complete();

});

//obs$.subscribe(console.log);

//obs$.subscribe( resp => console.log ('Print: '+ resp))

obs$.subscribe(observer);