function LoginForm() {
    return (
        <form action="http://localhost:80/Login" method="POST">
            <label>User Name</label>
            <input type="text" name='login[email]'></input>

            <label>Password</label>
            <input type="password" name='login[password]'></input>

            <button type="submit">Log In</button>
        </form>

    );
}

export default LoginForm;