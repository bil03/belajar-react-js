import { useRef, useEffect, useState } from "react";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input/Index";
import { login } from "../../services/auth.service";

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("")
  const handleLogin = (event) => {
    event.preventDefault();
    // localStorage.setItem("username", event.target.username.value);
    // localStorage.setItem('password', event.target.password.value);
    const data = {
      username: event.target.username.value,
      password: event.target.password.value
    }
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res)
        window.location.href = '/products';
      } else {
        setLoginFailed(res.response.data)
      }
    });
  }

  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

    return (
      <form onSubmit={handleLogin}>
        <div className="mb-6">
          <InputForm label="Username" type="text" placeholder="Jhon doe" name="username" ref={usernameRef} />
        </div>
        <div className="mb-6">
          <InputForm label="Password" type="Password" placeholder="*********" name="password" />
        </div>
        <Button classname="bg-blue-600 w-full" type="submit">
          Login
        </Button>
        {loginFailed && <p className="text-red-500 text-center mt-5">{loginFailed}</p>}
      </form>
    );
}

export default FormLogin;