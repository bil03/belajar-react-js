import Button from "../Elements/Button";
import InputForm from "../Elements/Input/Index";

const FormLogin = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem('password', event.target.password.value);
    window.location.href = "/products"
  }
    return (
      <form onSubmit={handleLogin}>
        <div className="mb-6">
          <InputForm label="Email" type="email" placeholder="example@mail.com" name="email" />
        </div>
        <div className="mb-6">
          <InputForm label="Password" type="Password" placeholder="*********" name="password" />
        </div>
        <Button classname="bg-blue-600 w-full" type="submit">Login</Button>
      </form>
    );
}

export default FormLogin;