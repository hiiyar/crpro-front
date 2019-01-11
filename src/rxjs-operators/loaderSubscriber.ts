import { Subscriber } from 'rxjs';
import { ILoader } from '../interfaces/loader';

export default class LoaderSubscriber extends Subscriber<any> {
  private ref: string;

  constructor(protected destination: Subscriber<any>, private loader: ILoader) {
    super(destination);

    this.ref = Date.now().toString();
    this.show();
  }

  public _next(value: any): void {
    this.hide();
    this.destination.next(value);
  }

  public _complete(): void {
    this.hide();
    this.destination.complete();
  }

  public _error(err: any): void {
    this.hide();
    this.destination.error(err);
  }

  public _unsubscribe(): void {
    this.hide();
    this.destination.unsubscribe();
  }

  private show(): void {
    this.loader.show(this.ref);
  }

  private hide(): void {
    this.loader.hide(this.ref);
  }
}
