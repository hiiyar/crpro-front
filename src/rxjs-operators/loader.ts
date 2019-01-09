import { Observable, Subscriber, Subscription } from 'rxjs';
import * as rxjsOperators from 'rxjs/operators';
import { ILoader } from '../interfaces/loader';
import LoaderSubscriber from './loaderSubscriber';

let globalLoaderComponent: ILoader;

export function setup(loader: ILoader): void {
  globalLoaderComponent = loader;
}

export function loader<T>(loaderComponent: ILoader = globalLoaderComponent) {
  return (source: Observable<T>) => source.lift<T>(new LoaderOperator(loaderComponent));
}

class LoaderOperator {
  constructor(private loaderComponent: any) { }

  public call(subscriber: Subscriber<any>, source: Observable<any>): Subscription {
    return source
      .pipe(rxjsOperators.delay(500))
      .subscribe(new LoaderSubscriber(subscriber, this.loaderComponent));
  }
}
