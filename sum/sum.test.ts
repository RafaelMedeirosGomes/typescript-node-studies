import { sum } from "../../src/sum"

Scenario("calculating the sum of two numbers", function (this: any) {
  Given("the numbers 1 and 2", function () {
    const a = 1
    const b = 2

    When("calculating their sum", function () {
      const actual = sum(a, b)

      Then(actual).should.be.equal(3)
    })
  })

  Given("the numbers 1 and 2", function () {
  const a = 1
  const b = 2

    When("calculating their sum", function () {
      const actual = sum(a, b)

      Then(actual).should.be.equal(4)
    })
  })
})
