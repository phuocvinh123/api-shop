const A = () => {
    const form = document.querySelector('#loginForm');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;

        const body = { email, password };
        console.log(body)
        try {
            const response = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });
            console.log(body)
            if (response.ok) {
                window.location.href = "http://localhost:3000/home";
            } else {
                alert("Tài khoản hoặc mật khẩu không đúng");
            }
        } catch (error) {
            console.error("Lỗi:", error);
        }
    })
}

A();
