// Membuat komponen LoginForm
function LoginForm() {
    return (
        <div className="login-container">
            <form className="login-form">
                <h2>Login</h2>
                <div className="form-group">
                    <label>Username:</label>
                    <input type="text" placeholder="Enter username" />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" placeholder="Enter password" />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

// Render komponen LoginForm ke elemen dengan id 'root'
ReactDOM.render(<LoginForm />, document.getElementById('root'));
