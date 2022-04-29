export class Modal {
  w
  constructor(message: string) {
    this.w = this.createWrapper()
    const c = this.createContent(message)

    this.w.appendChild(c)
    document.body.appendChild(this.w)
  }
  
  createWrapper () {
    const Wrapper = document.createElement("div")
    Wrapper.id = "Modal"
    Wrapper.style.background = "rgba(0, 0, 0, 0.6)";
    Wrapper.style.position = "fixed";
    Wrapper.style.top = "0"
    Wrapper.style.left = "0"
    Wrapper.style.zIndex = "1000000"
    Wrapper.style.width = "100vw"
    Wrapper.style.height = "100vh"
    Wrapper.style.display = "flex"
    Wrapper.style.alignItems = "center"
    Wrapper.style.justifyContent = "center"
    return Wrapper
  }

  createContent(message: string) {
    const Content = document.createElement("div")
    const Instructions = document.createElement("h2")
    const Code = document.createElement("textarea")

    Instructions.innerHTML = "Haz click sobre el siguiente texto y posteriormente pégalo en DZIRO."
    Instructions.style.textAlign = "center"
    Instructions.style.margin = "32px 0"

    Code.value = message
    Code.readOnly = true
    Code.rows = 10
    Code.cols = 80
    Code.style.border = "2px solid #000"
    Code.style.width = "100%"
    Code.style.padding = "8px"
    Code.style.boxSizing = "border-box"
    Code.style.cursor = "pointer"

    Content.style.background = "#fff"
    Content.style.padding = "1em"
    Content.style.width = "50%"
  
    Code.addEventListener("click", () => {
      navigator.clipboard.writeText(message);
      document.body.removeChild(this.w)
    })

    Content.appendChild(Instructions)
    Content.appendChild(Code)
    return Content
  }
}