import { Printer } from "./Printer"
import { describe } from "./describe"
import { it } from "./it"

global.printer = new Printer()

global.Scenario = describe("Scenario", printer)

global.Given = describe("Given", printer)

global.When = describe("When", printer)

global.Then = it(printer)
