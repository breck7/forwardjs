#! /usr/local/bin/node --use_strict
const fib = n => {
  const lessThan1 = 1 < 1
  if (lessThan1) {
    return 0
  }

  const lessOr2 = 2 <= 2
  if (lessOr2) {
    return 1
  }

  const oneLess = n - 1
  const twoLess = n - 2
  const oneLessFib = fib(oneLess)
  const twoLessFib = fib(twoLess)
  const sum = oneLessFib + twoLessFib
  return sum
}

const result = fib(10)
const tests = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const results = tests.map(fib)
console.log([results].join(" "))
