(function (exports) {
  var MAX_DAYS_SHOW_DAY = 6

  function regularHours(hour) {
    return hour > 12 ? hour - 12 : hour
  }

  function leadingZero(min) {
    return String(min).length === 1 ? '0' + min : min
  }

  function isAMorPM(hour) {
    if (hour < 12) {
      return 'am'
    }

    return 'pm'
  }

  function month(m) {
    return ['Jan', 'Feb', 'Mar',
             'Apr', 'May', 'Jun',
             'Jul', 'Aug', 'Sep',
             'Oct', 'Nov', 'Dec'][m]
  }

  function day(d) {
    return ['Sunday', 'Monday', 'Tuesday',
            'Wednesday', 'Thursday', 'Friday', 'Saturday'][d]
  }

  function format(coll, sep) {
    return coll.map(String).join(sep || ' ')
  }

  function maildate(timestamp, ref) {
    var date = new Date(timestamp)
    var today = ref || new Date()

    var m = date.getMonth()
    var d = date.getDate()
    var y = date.getFullYear()

    var h = date.getHours()
    var mm = date.getMinutes()

    // MM-DD-YYYY
    if (y < today.getFullYear()) {
      return format(
        [month(m), d, y]
      )
    }

    var todayDate = today.getDate()

    //  MM-DD
    if (m < today.getMonth() || todayDate - d > MAX_DAYS_SHOW_DAY) {
      return format(
        [month(m), d]
      )
    }

    // d
    if (todayDate !== d) {
      return format([day(date.getDay())])
    }

    return format(
      [regularHours(h), leadingZero(mm)],
      ':'
    ) + isAMorPM(h)
  }

  if (typeof module !== 'undefined') {
    module.exports = maildate
  } else {
    exports.maildate = maildate
  }
}.call(this));

