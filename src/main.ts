import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {
  defer,
  from,
  fromEvent,
  fromEventPattern,
  interval,
  merge,
  Observable,
  of,
  throwError,
  timer,
} from 'rxjs';
import {
  buffer,
  distinctUntilChanged,
  map,
  mapTo,
  pluck,
  reduce,
  throttleTime,
  toArray,
} from 'rxjs/operators';
import { error } from 'console';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);

// const rate = 1000;
// let time = Date.now();
// document.addEventListener('mousemove', (ev) => {
//   if (Date.now() - rate >= time) {
//     console.log(ev.clientX + " " + ev.clientY);
//     time = Date.now()
//   }
// });

// fromEvent<MouseEvent>(document, 'mousemove')
//   .pipe(
//     throttleTime(1000),
//     map((ev: MouseEvent) => ev.clientX + ' ' + ev.clientY)
//   )
//   .subscribe(console.log);

// const observable = new Observable(function subscribe(observer) {
//   const id = setInterval(() => {
//     observer.next('Hello Rxjs');
//     // observer.error("Error");
//     // observer.complete();
//   }, 1000);

//   return function unsubscribe() {
//     clearTimeout(id);
//   };
// });

// const subscription = observable.subscribe({
//   next: (value) => {
//     console.log(value)
//   },
//   error: (error) => {
//     console.log(error);
//   },
//   complete: () => {
//     console.log('complete');
//   },
// });

// subscription.add(observable.subscribe(console.log))

// setTimeout(() => {
//   subscription.unsubscribe();
// }, 5000);

const observer = {
  next: (value: unknown) => {
    console.log(value);
  },
  error: (error: unknown) => {
    console.log(error);
  },
  complete: () => {
    console.log('complete');
  },
};

// log ra từng params được truyền vào
// const subscriber =of('abc').subscribe(observer);
// subscriber.add(subscribe(console.log));

// fromEvent(document, 'click').subscribe(observer);

// Log ra chi tiết từ vị trí phần tử
//from(['abc', 'bcd']).subscribe(observer);

// from(Promise.resolve('Handle promise')).subscribe(observer);

// fromEventPattern(
//   (handler) => {
//     document.addEventListener('click', handler);
//   },
//   (handler) => {
//     document.removeEventListener('click', handler);
//   }
// ).subscribe(observer);

// const addHandler = (handler: EventListenerOrEventListenerObject) => {
//   document.addEventListener('click', handler);
// }

// const removeHandler = (handler: EventListenerOrEventListenerObject) => {
//   document.removeEventListener('click', handler);
// }

// // output: 10 10
// const a = fromEventPattern(
//   addHandler,
//   removeHandler,
//   (ev: MouseEvent) => ev.offsetX + ' ' + ev.offsetY
// ).subscribe(observer);

// setTimeout(() => {
//   a.unsubscribe();
// }, 5000);

// Log mỗi giây 1 phần tử
// interval(1000) // emit giá trị sau mỗi giây
//   .subscribe(observer);

// Sau 1s nó sẽ log ra kq
// timer(1000).subscribe(observer); // giống setTimeout

// timer(1000, 1000).subscribe(observer); // params đầu tiên là sau 1s log ra, params giống interval

// error: 'an error'
// throwError(() =>  new Error('have error')).subscribe(observer);

// defer
// const now$ = defer(() => of(Math.random()))
// now$.subscribe(observer);
// now$.subscribe(observer);
// now$.subscribe(observer);

const users = [
  {
    id: 'ddfe3653-1569-4f2f-b57f-bf9bae542662',
    username: 'tiepphan',
    firstname: 'tiep',
    lastname: 'phan',
  },
  {
    id: '34784716-019b-4868-86cd-02287e49c2d3',
    username: 'nartc',
    firstname: 'chau',
    lastname: 'tran',
  },
];

// from(users).pipe(map((user) => {
//   return {
//     ...user,
//     fullName: user.firstname + " " + user.lastname
//   }
// }), toArray()).subscribe(observer);

// from(users).pipe(map(user => user.firstname)).subscribe(observer);

// merge(
//   fromEvent(document, 'mousemove').pipe(map((x) => true)),
//   fromEvent(document, 'mouseleave').pipe(map((x) => false))
// )
//   .pipe(
//     distinctUntilChanged()
//   )
//   .subscribe(observer);

// from(users)
//   .pipe(
//     reduce(
//       (
//         acc: {
//           id: string;
//           username: string;
//           firstname: string;
//           lastname: string;
//         }[],
//         value
//       ) => [...acc, value],
//       []
//     )
//   )
//   .subscribe(observer);


const interval$ = interval(1000);

const click$ = fromEvent(document, 'click');

const buffer$ = interval$.pipe(buffer(click$));

buffer$.subscribe(observer);
