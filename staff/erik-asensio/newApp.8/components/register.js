class Register {
    constructor() {
        const temp = document.createElement('temp')
        temp.innerHTML = `<main class="page-register">

                            <h1 class="loginTitle"></h1>
                            <form class="registerForm">

                                <label for="name">name:</label>
                                <input name="name" type="text" >

                                <label for="email">email:</label>
                                <input name="email" type="text">

                                <label for="password">password:</label>
                                <input name="password" type="password">

                                <button class="submitRegister">REGISTER</button>
                                <a class="loginLink anchor" href="register.html">Login Now!</a>

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

            const name = form.name.value
            const email = form.email.value
            const password = form.password.value

            callback(name, email, password)
        }
    }

    reset(){
        this.container.querySelector("form").reset()
    }
}