import { SchedulerLike, MonoTypeOperatorFunction } from "rxjs";

interface ShareReplayConfig {
  bufferSize?: number;
  windowTime?: number;
  refCount: boolean;
  scheduler?: SchedulerLike;
}
function shareReplay<T>(config: ShareReplayConfig): MonoTypeOperatorFunction<T>;
