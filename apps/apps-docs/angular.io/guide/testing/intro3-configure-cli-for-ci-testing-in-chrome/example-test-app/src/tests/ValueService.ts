import { Observable, of } from "rxjs";
export class ValueService {
    getPromiseValue(): Promise<string> {
        return of("promise value").toPromise();
    }
    getObservableValue(): Observable<string> {
        return of("observable value");
    }
    getValue(): string {
        return "real value";
    }
}
