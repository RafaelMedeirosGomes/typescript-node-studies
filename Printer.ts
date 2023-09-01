export class Printer {
  private identation = 0
  
  private passed = 0
  private failed = 0
  private skipped = 0

  private FAIL_ICON = " ✘ "
  private PASS_ICON = " ✔ "
  private SKIP_ICON = " ↩ "

  public pass(message: string) {
    this.passed++

    console.log([
      this.prepend(),
      this.inGreen(this.PASS_ICON, message)
    ].join(""))
  }

  public fail(message: string) {
    this.failed++

    console.log([
      this.prepend(),
      this.inRed(this.FAIL_ICON, message)
    ].join(""))
  }

  public skip(message: string) {
    this.skipped++

    console.log([
      this.prepend().slice(0, -this.SKIP_ICON.length),
      this.inYellow(this.SKIP_ICON, message)
    ].join(""))
  }

  public log(message: string) {
    console.log(`${' '.repeat(this.identation)}${message}`)
  }

  public summary() {
    const total = this.passed + this.failed + this.skipped

    console.log("\n\nSUMMARY\n")

    if (total === 0) {
      console.log(this.inGray("No tests found"))
      return
    }

    if (this.passed > 0) {
      console.log(this.inGreen(`${this.passed} passed`))
    }

    if (this.skipped > 0) {
      console.log(this.inYellow(`${this.skipped} skipped`))
    }

    if (this.failed > 0) {
      console.log(this.inRed(`${this.failed} failed`))
    }

    console.log(this.inWhite(`${total} total`))
  }

  private prepend() {
    return ' '.repeat(this.identation)
  }

  public indent() {
    this.identation += 2
  }

  public unindent() {
    this.identation -= 2
  }

  private inRed(...text: (string | number)[]) {
    const ANSI_red_text = "\x1b[31m"
    const ANSI_reset_text = "\x1b[0m"

    return ANSI_red_text + text.join("") + ANSI_reset_text
  }

  private inGreen(...text: (string | number)[]) {
    const ANSI_green_text = "\x1b[32m"
    const ANSI_reset_text = "\x1b[0m"

    return ANSI_green_text + text.join("") + ANSI_reset_text
  }

  private inYellow(...text: (string | number)[]) {
    const ANSI_yellow_text = "\x1b[33m"
    const ANSI_reset_text = "\x1b[0m"

    return ANSI_yellow_text + text.join("") + ANSI_reset_text
  }

  private inGray(...text: (string | number)[]) {
    const ANSI_gray_text = "\x1b[90m"
    const ANSI_reset_text = "\x1b[0m"

    return ANSI_gray_text + text.join("") + ANSI_reset_text
  }

  private inWhite(...text: (string | number)[]) {
    const ANSI_white_text = "\x1b[37m"
    const ANSI_reset_text = "\x1b[0m"

    return ANSI_white_text + text.join("") + ANSI_reset_text
  }
}