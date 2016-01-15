import Ember from 'ember';
import moment from 'moment';

export function momentAdd([start, ...add]/*, hash*/) {
  const time = moment(start);
  time.add(...add);

  return time;
}

export default Ember.Helper.helper(momentAdd);
