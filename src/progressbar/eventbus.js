let events = {}

export default {
  on: function (eventname, cb) {
    if (!events[eventname]) {
      events[eventname] = []
    }
    events[eventname].push(cb)
  },
  emit: function (eventname, ...p) {
    if (events[eventname] && events[eventname].length !== 0) {
      events[eventname].forEach(fn => {
        fn.apply(null, p)
      })
    }
  }
}
