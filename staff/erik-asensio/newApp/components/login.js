class Login {
    constructor() {
        const temp = document.createElement('temp')
        temp.innerHTML = `<main class="page-login">

                            <form class="loginForm">

                                <label for="email">email:</label>
                                <input name="email" type="text">

                                <label for="password">password:</label>
                                <input name="password" type="password">

                                <button class="submitLogin">LOGIN</button>
                                <a class="registerLink anchor" href="register.html">Register Now!</a>

                            </form>

                        </main>`

        this.container = temp.firstChild
    }

    onLinkClick(callback) {
        this.container.querySelector(".anchor").onclick = event => {
            event.preventDefault()

            callback()
        }
    }

    onSubmitForm(callback) {
        const form = this.container.querySelector("form")

        form.onsubmit = event => {
            event.preventDefault()

            const email = form.email.value
            const password = form.password.value

            callback(email, password)
        }
    }

    reset(){
        this.container.querySelector("form").reset()
    }
}