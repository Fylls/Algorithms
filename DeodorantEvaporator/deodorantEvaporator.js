// This program tests the life of an evaporator containing a gas.

// We know the content of the evaporator (content in ml),
// the percentage of foam or gas lost every day (evap_per_day),
// the threshold (threshold) in percentage beyond which the evaporator is no longer useful.

// All numbers are strictly positive.

// The program reports the nth day (as an integer) on which the evaporator will be out of use.

// Note : Content is in fact not necessary in the body of the function "evaporator",
// you can use it or not use it, as you wish. Some people might prefer to reason with content, some other with percentages only.
// It's up to you but you must keep it as a parameter because the tests have it as an argument.

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// clasic
function evaporator(content, evap_per_day, threshold) {
  days = 0;

  for (
    let i = content;
    i >= content * (threshold / 100);
    i -= i * (evap_per_day / 100)
  ) {
    days += 1;
  }
  return days;
}

// without using content
function evaporator(content, evap_per_day, threshold) {
  threshold = threshold / 100;
  evap_per_day = evap_per_day / 100;
  return Math.ceil(Math.log(threshold) / Math.log(1 - evap_per_day));
}

// one liner 1
with (Math) evaporator = (唐, ev, t) => ceil(log(t / 100) / log(1 - ev / 100));

// one liner 2
// const evaporator = (content, evap_per_day, threshold) => Math.ceil(Math.log(threshold / 100) / Math.log(1 - evap_per_day / 100));
const evaporator = (content, evap_per_day, threshold) =>
  Math.ceil(Math.log(threshold / 100) / Math.log(1 - evap_per_day / 100));

// using while
function evaporator(content, evap_per_day, threshold) {
  var current = 100;
  var day = 0;
  while (current >= threshold) {
    current -= (current * evap_per_day) / 100;
    day++;
  }
  return day;
}
