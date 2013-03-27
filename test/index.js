var maildate = require('../')
var assert = require('assert')

var REF_TIME = new Date(1364356706052)

assert.equal(maildate(1123458297000, REF_TIME), 'Aug 7 2005')
assert.equal(maildate(1353458297000, REF_TIME), 'Nov 20 2012')
assert.equal(maildate(1363758297000, REF_TIME), 'Mar 19')
assert.equal(maildate(1363458297000, REF_TIME), 'Mar 16')
assert.equal(maildate(1363778297000, REF_TIME), 'Wednesday')
assert.equal(maildate(1363998297000, REF_TIME), 'Friday')
assert.equal(maildate(1364306706052, REF_TIME), '7:05am')
assert.equal(maildate(1364326706052, REF_TIME), '12:38pm')
assert.equal(maildate(1364356706052, REF_TIME), '8:58pm')
