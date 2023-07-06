
import { Link } from 'react-router-dom';
import FormRegister from '../components/Fragment/FormRegister';
import AuthLayout from '../components/Layout/AuthLayout';

const RegisterPage = () => {
  return (
    <AuthLayout title="Register">
      <FormRegister />
      <p className="text-sm mt-5 text-center">
        Already have an account? {''}
        <Link to="/login" className="font-bold text-blue-600">
          Sign In
        </Link>
      </p>
    </AuthLayout>
  );
};

export default RegisterPage;
