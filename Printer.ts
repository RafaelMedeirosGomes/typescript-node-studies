export class Printer {
  private identation = 0;

  private ANSI_red_text = "\x1b[31m";
  private ANSI_green_text = "\x1b[32m";
  private ANSI_reset_text = "\x1b[0m";
  private FAIL_ICON = " ✘ ";
  private PASS_ICON = " ✔ ";

  fail(message: string) {
    console.log([
      this.prepend(),
      this.ANSI_red_text,
      this.FAIL_ICON,
      message,
      this.ANSI_reset_text
    ].join(""));
  }

  pass(message: string) {
    console.log([
      this.prepend(),
      this.ANSI_green_text,
      this.PASS_ICON,
      message,
      this.ANSI_reset_text
    ].join(""));
  }

  log(message: string) {
    console.log(`${' '.repeat(this.identation)}${message}`)
  }

  prepend() {
    return ' '.repeat(this.identation)
  }

  get ident() {
    return this.identation
  }

  indent() {
    this.identation += 2
  }

  unindent() {
    this.identation -= 2
  }
}
