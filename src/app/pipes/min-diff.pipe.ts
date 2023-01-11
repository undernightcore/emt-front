import { Pipe, PipeTransform } from '@angular/core';
import { DateTime, Interval } from 'luxon';

@Pipe({
  name: 'minDiff',
})
export class MinDiffPipe implements PipeTransform {
  transform(activated: Date, now: Date) {
    return Math.floor(
      Interval.fromDateTimes(
        now,
        DateTime.fromJSDate(activated).plus({ minutes: 60 }).toJSDate()
      ).length('minutes')
    );
  }
}
