export class HttpResponseIntro1<T> {
  constructor(
    public isSuccess: boolean,
    public message: string,
    public value: T = null
  ) {}
}
