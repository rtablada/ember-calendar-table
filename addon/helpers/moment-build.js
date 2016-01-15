import Ember from 'ember';
import moment from 'moment';

export function momentBuild([initial], hash) {
  const time = moment(initial);
  time.set(hash);

  return time;
}

export default Ember.Helper.helper(momentBuild);
