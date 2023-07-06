import Button from '../Elements/Button';
import InputForm from '../Elements/Input/Index';

const FormRegister = () => {
  return (
    <form action="">
      <div className="mb-6">
        <InputForm label="Full Name" type="text" placeholder="masukan nama lengkap" name="fullname" />
      </div>
      <div className="mb-6">
        <InputForm label="Email" type="email" placeholder="example@mail.com" name="email" />
      </div>
      <div className="mb-6">
        <InputForm label="Password" type="Password" placeholder="*********" name="password" />
      </div>
      <div className="mb-6">
        <InputForm label="confirm Password" type="Password" placeholder="*********" name="password" />
      </div>
      <Button classname="bg-blue-600 w-full">Register</Button>
    </form>
  );
};

export default FormRegister;
