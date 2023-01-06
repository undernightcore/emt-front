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
        DateTime.fromJSDate(activated).plus({ hour: 1 }).toJSDate()
      ).length('minutes')
    );
  }
}
