class Example {
  constructor(name) {
    this.name = name
    this.method = this.method.bind(this)
  }

  methodFromExample() {
    return this.name
  }
}

const btnEl = document.querySelector("button")

btnEl.addEventListener("click", methodFromExample)
