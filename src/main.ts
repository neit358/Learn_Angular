import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {
  BehaviorSubject,
  combineLatest,
  concat,
  defer,
  forkJoin,
  from,
  fromEvent,
  fromEventPattern,
  iif,
  interval,
  merge,
  Observable,
  of,
  partition,
  race,
  ReplaySubject,
  Subject,
  throwError,
  timer,
  zip,
} from 'rxjs';
import {
  buffer,
  catchError,
  concatAll,
  concatMap,
  delay,
  delayWhen,
  distinctUntilChanged,
  distinctUntilKeyChanged,
  endWith,
  every,
  exhaustMap,
  filter,
  finalize,
  find,
  first,
  last,
  map,
  mapTo,
  mergeAll,
  mergeMap,
  reduce,
  repeat,
  retry,
  single,
  skip,
  skipUntil,
  skipWhile,
  startWith,
  switchAll,
  switchMap,
  take,
  takeLast,
  takeUntil,
  takeWhile,
  tap,
  throttle,
  throttleTime,
  throwIfEmpty,
  timeInterval,
  timeout,
  toArray,
  withLatestFrom,
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

// throttleTime nó giống timer cho đợi 1 hành động nào đó 1 thời gian truyền vào r mới log kết quả
// fromEvent<MouseEvent>(document, 'mousemove')
//   .pipe(
//     throttleTime(1000),
//     map((ev: MouseEvent) => ev.clientX + ' ' + ev.clientY)
//   )
//   .subscribe(console.log);

// fromEvent<MouseEvent>(document, 'mousemove')
//   .pipe(
//     throttle( () => {
//       return timer(1000)
//     } ) ,
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

// lưu lại biến cho đến khi click nó sẽ log ra các biển đã lưu cho đến thời điểm bấm và tạo 1 mảng mới
// const interval$ = interval(1000);
// const click$ = fromEvent(document, 'click');
// const buffer$ = interval$.pipe(buffer(click$));
// buffer$.subscribe(observer);

// filter
// from([1, 2, 3, 4, 5, 6]).pipe(filter(x => x < 4)).subscribe(observer);
// first
// from([1, 2, 3, 4, 5, 6]).pipe(first(x => x < 4, 'abc')).subscribe(observer);
// last
// from([1, 2, 3, 4, 5, 6]).pipe(last(x => x < 1, 'abc')).subscribe(observer);
// find
// from([1, 2, 3, 4, 5, 6]).pipe(find(x => x % 2 == 0)).subscribe(observer);
// single
// from([1, 2, 3, 4, 5, 6]).pipe(single(x => x < 2)).subscribe(observer);
// take
// from([1, 2, 3, 4, 5, 6]).pipe(filter(x => x > 2), take(2)).subscribe(observer);
// takeLast
// from([1, 2, 3, 4, 5, 6]).pipe(filter(x => x > 2), takeLast(2)).subscribe(observer);
// takeUntil
// interval(1000).pipe(takeUntil(fromEvent(document, 'click'))).subscribe(observer); // chạy giá trị đến khi nào có sự kiện nào đó xảy
// takeWhile: Tự động hủy đăng ký khi có 1 dự kiện nào đó không thỏa mãn nữa
// interval(1000).pipe(takeWhile(x => x < 6)).subscribe(observer); // chạy giá trị thỏa điều kiện
// skip
// from([1, 2, 3, 4, 5, 6]).pipe(skip(2)).subscribe(observer);
// skipUntil SỰ kiện được phát ra khi đó giá trị mới bắt đầu được lấy
// interval(1000).pipe(skipUntil(fromEvent(document, 'click'))).subscribe(observer);
// skipWhile
// interval(1000).pipe(skipWhile(x => x < 4)).subscribe(observer); // bỏ qua giá trị thỏa điều kiện
// distinctUntilChanged
// from([1, 1, 2, 2, 2, 1, 1, 2, 3, 3, 4]).pipe(distinctUntilChanged((previous: number, current: number) => {
//   console.log(previous, current);
//   return previous === current;
// })).subscribe(observer); // log ra kêt quả cho đến khi có sự thay đổi so với số trước đó
//distinctUntilKeyChanged Thay vì dựa vào giá trị thì hàm này sẽ dựa vào key của 1 object
// of(
//   { age: 4, name: 'Foo' },
//   { age: 6, name: 'Foo' },
//   { age: 7, name: 'Bar' },
//   { age: 5, name: 'Foo' }
// )
//   .pipe(distinctUntilKeyChanged('name')).subscribe(observer) // output: { age: 4, name: 'Foo' }, { age: 7, name: 'Bar' }, { age: 5, name: 'Foo' } -> complete
// debounce()/debounceTime() Dùng để kiểm soát việc nhập, đến khi nào dùng việc nhập vào input và chạy đủ số thời gian quy định ms log ra giá trị

// forkJoin sẽ không bao giờ in ra kết quả nếu không được complete
// forkJoin([
//   of("abc").pipe(delay(1000)),
//   of("abc").pipe(delay(2000)),
//   of("abc").pipe(delay(3000)),
// ]).subscribe(observer)

// forkJoin([
//   of("abc").pipe(delay(1000)),
//   of("bcd").pipe(delay(2000)),
//   interval(1000).pipe(take(2))
// ], (hello, world, inter) => ({hello, world, inter})).subscribe(observer)

// combineLatest Cả 3 đều phát ra giá trị thì mới emit
// combineLatest([
//   interval(2000).pipe(map(x => `First: ${x}`)),
//   interval(1000).pipe(map(x => {
//     console.log(x);
//     return `Second: ${x}`
//   })),
//   interval(3000).pipe(map(x => `Third: ${x}`)),
// ]).subscribe(observer)
//zip kết hợp các phần tử cùng vị trí với nhau
// combineLatest([of(1, 2, 3), of(4, 5, 6), of(7, 8, 9)]).subscribe(observer);
// zip([of(1, 2, 3), of(4, 5, 6), of(7, 8, 9)]).subscribe(observer);

// zip([
//   fromEvent<MouseEvent>(document, 'mousedown').pipe(
//     map((e: MouseEvent) => ({ x: e.clientX, y: e.clientY }))
//   ),
//   fromEvent<MouseEvent>(document, 'mouseup').pipe(
//     map((e: MouseEvent) => ({ x: e.clientX, y: e.clientY }))
//   ),
// ]).subscribe(observer);

//fromEvent<MouseEvent>(document, 'mousedown').pipe(map((x: MouseEvent) => `${x.clientX} ${x.clientY}`)).subscribe(observer);

// concat đồng bộ
// concat(
//   interval(1000).pipe(take(3), delay(3000)),
//   interval(1000).pipe(take(4))
// ).subscribe(observer);

// merge sẽ log ra cái nào trước log ra trước cái nào sau log ra sau
// merge(
//   of(1, 2, 3).pipe(delay(2000)),
//   of(3, 4, 5)
// ).subscribe(observer);
// merge(
//   interval(2000).pipe(map(x => {
//     return ('emit every 2 seconds')
//   }), take(3)),
//   interval(5000).pipe(map(x => {
//     return ('emit every 1 second')
//   }), take(3))
// ).subscribe(observer);

// race chỉ cần 1 cái emit lên sever là complete (dùng trong chấm dứt lắng gì đó khi có 1 sự kiện xảy ra)
// race(
//   interval(1000).pipe(
//     map((x) => {
//       return 'emit every 2 seconds';
//     }),
//     take(3)
//   ),
//   interval(5000).pipe(
//     map((x) => {
//       return 'emit every 1 second';
//     }),
//     take(3)
//   )
// ).subscribe(observer);

// withLatestFrom Lấy giá trị của nó khi thực hiện là được 1 sự kiện nào đó (Giá trị cuối cùng)
// fromEvent(document, 'click')
//   .pipe(withLatestFrom(interval(1000).pipe(map(x => `abc: ${x}`))))
//   .subscribe(observer);

// endWith dùng để thêm cuối value của 1 emit
// startWith dùng để thêm đầu value của 1 emit

// catchError bắt lỗi để change log err thành log text
// const cached = [4, 5];
// of(1, 2, 3, 4, 5)
//   .pipe(
//     map((x) => {
//       if (cached.includes(x)) {
//         throw new Error('Duplicated: ' + x);
//       }
//       return x;
//     }),
//     catchError((err, caught) => {
//       console.log(err);
//       return of(err)
//     })
//   )
//   .subscribe(observer);

//
// forkJoin([
//   of(1),
//   of(2),
//   throwError(() => new Error('401')).pipe(catchError((err) => of(err))),
// ]).subscribe(observer);

// const cached = [4, 5];
// of(1, 2, 3, 4, 5)
//   .pipe(
//     map((x) => {
//       if (cached.includes(x)) {
//         throw new Error(`Duplicated: ${x}`);
//       }
//       return x;
//     }),
//     catchError((err, caught) => {
//       return caught;
//     }),
//     take(10)
//   )
//   .subscribe(observer);

// tự động retry yêu cầu emit lại, cauth khiến cho vòng lặp vô hạn
// of(1, 2, 3, 4, 5)
//   .pipe(
//     map((x) => {
//       if (cached.includes(x)) {
//         throw new Error(`Duplicated: ${x}`);
//       }
//       return x;
//     }),
//     retry(3)
//   )
//   .subscribe(observer);

// defaultIfEmpty/throwIfEmpty
// fromEvent(document, 'click').pipe(
//   takeUntil(
//     timer(2000),
//   ),
//   throwIfEmpty(() => new Error('the document was not clicked within 1 second'))
// ).subscribe(observer);

// every mọi phần từ phải thỏa điều kiện
// of(1, 2, 3, 4, 5, 6)
//   .pipe(every((x) => {
//     console.log(x);
//     return x < 6
//   }))
//   .subscribe(observer);

// iif(() => true, "1", "2").subscribe(observer);

// mergeAll // chạy xen kẽ nhau
// const higher = fromEvent(document, 'click')
//   .pipe(map(() => interval(1000).pipe(take(5))), mergeAll());

//   higher.subscribe(observer);

// concatAll // 1 observable được emit xong mới đến observable khác làn lượt tuần tự
// const higher = fromEvent(document, 'click')
// .pipe(map(() => interval(1000).pipe(take(3))), concatAll());

// higher.subscribe(observer);

// switchAll // 1 observable đang chạy thì observable khác đến và phá hủy observable đang chạy
// const higher = fromEvent(document, 'click')
// .pipe(map(() => interval(1000).pipe(take(3))), switchAll());

// higher.subscribe(observer);

// const higher = fromEvent(document, 'click').pipe(map(() => interval(1000)))

// higher.subscribe((x) => {
//   x.subscribe(console.log);
// });

// switchMap // 1 observable đang chạy thì observable khác đến và phá hủy observable đang chạy
// const higher = fromEvent(document, 'click').pipe(
//   switchMap(() => interval(1000).pipe(map(x => x * 10), take(10)))
// );

// higher.subscribe(observer)

// mergeMap //
// const higher = fromEvent(document, 'click').pipe(
//   mergeMap(() => interval(1000).pipe(map(x => x), take(10)))
// );

// higher.subscribe(observer)

// concatMap //
// const higher = fromEvent(document, 'click').pipe(
//   concatMap(() => interval(1000).pipe(map(x => x), take(4)))
// );

// higher.subscribe(observer)

// exhaustMap // Khi nó đang hoạt động thì nó sẽ bỏ qua khi có observable khác được truyền vào
// function log(val: string) {
//   // helper function thôi
//   console.log(val + ' emitted!!!');
//   console.log('-----------------');
// }

// concat(
//   timer(1000).pipe(
//     map((x) => 'first timer'),
//     tap(log)
//   ),
//   timer(5000).pipe(
//     map((x) => 'second timer'),
//     tap(log)
//   ),
//   timer(3000).pipe(
//     map((x) => 'third timer'),
//     tap(log)
//   )
// ).pipe(
//   exhaustMap((x) =>
//     interval(1000).pipe(
//       map((v) => `${x}: ${v}`),
//       take(4)
//     )
//   )
// ).subscribe(observer);

// fromEvent(document, 'click').pipe(exhaustMap(() => interval(1000).pipe( x => x, take(5)))).subscribe(observer)

//partition sẽ trả về 2 value 1 là thỏa mãn với điều kiện, 2 là không thỏa mãn đối tượng
// const [event$, odd$] = partition(interval(1000), (value) => value % 2 === 0);

// merge(
//   event$.pipe(map(x => `I am event ${x}`)),
//   odd$.pipe(map(y => `I am odd ${y}`))
// )
// .pipe(map(x => `${x} hehe`)).subscribe(observer);

// interval(1000).pipe(
//   tap((value) => console.log(`Value first ${value}`)),
//   map((value) => value * 20),
//   tap((value) => console.log(`Value first ${value}`)),
// ).subscribe();

// interval(1000).pipe(delay(3000)).subscribe(observer);

// interval(1000).pipe(delayWhen(() => timer(3000))).subscribe(observer);

// finalize khi nào 1 observable bị error  complete sẽ thực hiện hàm truyền vào trong finalize
// interval(1000).pipe(finalize(() => console.log('abc')), take(3)).subscribe(observer);

// repeat
// of(100).pipe(repeat(3)).subscribe(observer);

//timeInterval // đo khoảng cách của 2 lần emit của 2 observable với nhau khi xảy ra
// fromEvent(document, 'click').pipe(timeInterval()).subscribe(observer);

//timeout giống delay nhưng nếu đến thời điểm mà không có giá trị nào được emit thì nó sẽ bắn error
// interval(2000).pipe(timeout(1000)).subscribe(observer);

// timeoutWith
// interval(2000).pipe(timeoutWith(1000, interval(1000))).subscribe(observer);

// const observer2 = {
//   next: (value: unknown) => {
//     console.log(`${value} 2`);
//   },
//   error: (error: unknown) => {
//     console.log(`${error} 2`);
//   },
//   complete: () => {
//     console.log('complete');
//   },
// };

// const observable = interval(500).pipe(take(5));

// observable.subscribe(observer);

// setTimeout(() => {
//   observable.subscribe(observer2)
// }, 1500);

const createObservable = (observer: unknown) => ({
  next: (val: unknown) => console.log(observer, val),
  error: (err: unknown) => console.error(observer, err),
  complete: () => console.log("complete"),
});

// // Subject khi truyền 1 gì đó vào trong hàm mới log ra kết quả còn đăng ký thì không // nó sẽ không replace cho 1 subscribe khác nếu chạy sau next
// const subject = new Subject();

// subject.subscribe(createObservable("A"));
// subject.next('Hello');
// subject.next('Hello');


// subject.subscribe(createObservable("B"));
// subject.next("Hello that is A and B");


// const getUsers = () => {
//   subject.next(true);
//   return timer(3000).pipe(
//     switchMap(() => of("users")),
//     finalize(() => {
//       return subject.next(false);
//     })
//   )
// }

// subject.subscribe(createObservable('Component'));

// getUsers().subscribe();


// BehaviorSubject  // nó có thể replace cho 1 subscribe 1 observer sau next 

// const behaviorSubject = new BehaviorSubject("Hello");

// behaviorSubject.subscribe(createObservable('A'));

// behaviorSubject.next("Xin Chào")

// behaviorSubject.next("Xin Chào 2")

// behaviorSubject.subscribe(createObservable('B'));

// let a;

// behaviorSubject.subscribe((val) => {
//   a = val;
// });

// console.log(a);




//ReplaySubject // nếu subscribe sau next vẫn nhận giá trị nhưng nếu truyền 1 biến để nhận giá trị thì không thể được
// const replaySubject = new ReplaySubject(3);

// replaySubject.subscribe(createObservable("C"));

// replaySubject.subscribe(createObservable("D"));

// let a;

// replaySubject.subscribe((val) => {
//   a = val;
// })

// console.log(a);

// replaySubject.next("hello 1")

// replaySubject.complete();

// replaySubject.error(Error("Lỗi rồi"));



