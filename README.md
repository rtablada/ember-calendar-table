# Ember-calendar-table

[![npm version](https://badge.fury.io/js/ember-calendar-table.svg)](http://badge.fury.io/js/ember-calendar-table)
[![Ember Observer Score](http://emberobserver.com/badges/ember-calendar-table.svg)](http://emberobserver.com/addons/ember-calendar-table)

This component provides a simple primative component for iterating over timeslots and days.

## Installation

* `ember install ember-calendar-table`

## Use

By default, the Ember Calendar Table component will make a one week swath of 7 days with working hours (9AM-5PM).
It will yield `startTime` and `endTime` moment.js objects.

```hbs
{{#ember-calendar-table as |startTime endTime|}}
  {{moment-format startTime "h:mm"}} - {{moment-format endTime "h:mm"}}
{{/ember-calendar-table}}
```
