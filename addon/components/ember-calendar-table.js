import Ember from 'ember';
import moment from 'moment';

import layout from '../templates/components/ember-calendar-table';

function mapTime(startDate, endDate, modifier) {
  const map = [];
  let currDate = moment(startDate);
  console.log(startDate.format('HH:mm'), endDate.format('HH:mm'));

  while (currDate.isBefore(endDate)) {
    map.push(moment(currDate));

    modifier(currDate);
  }

  return map;
}

export default Ember.Component.extend({
  tagName: 'table',
  layout: layout,

  startDate: null,
  endDate: null,
  startHour: 9,
  endHour: 17,
  slotDiff: 30,

  dayFormat: 'dddd',

  init() {
    this._super(...arguments);

    const startDate = moment();
    startDate.set({hour: this.get('startHour'), minute: '0', second: '0'});

    const endDate = moment(startDate).add(7, 'day');
    this.setDays(startDate, endDate);
    this.createTimeslots(startDate);

    this.setProperties({startDate, endDate});
  },

  setDays(startDate, endDate) {
    const days = mapTime(startDate, endDate, (date) => date.add(1, 'day'));

    this.set('days', days);
  },

  createTimeslots(startDate) {
    const endDate = moment(startDate).set({hour: this.get('endHour')});

    const timeslots = mapTime(startDate, endDate, (date) => date.add(this.get('slotDiff'), 'minute'));

    this.set('timeslots', timeslots);
  },
});
