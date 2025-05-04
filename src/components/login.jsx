import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BeatLoader } from 'react-spinners';
import { Error } from './error';
import * as Yup from 'yup';

const Login = () => {
  const [error, setErrors] = useState({});
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target; // Corrected destructuring
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    setErrors({});
    setLoading(true); // Indicate loading state

    try {
      const schema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters long').required('Password is mandatory'), // Corrected Yup validation
      });

      await schema.validate(formData, { abortEarly: false });
    } catch (e) {
      const newErrors = {};
      e?.inner?.forEach((err) => {
        newErrors[err.path] = err.message;
      });
      setErrors(newErrors);
    }

    setLoading(false); // Reset loading state
  };

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle className='text-2xl font-bold text-center'>Login</CardTitle>
          <CardDescription className='text-center'>Please Login to your account, if you already have one</CardDescription>
          {error.global && <Error message={error.global} />}
        </CardHeader>
        <CardContent className='space-y-5'>
          <div className='space-y-4'>
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleInputChange}
              placeholder='Enter your email...'
              className='h-10 p-2 w-full border-2 rounded-sm'
            />
            {error.email && <Error message={error.email} />}
          </div>
          <div className='space-y-2'>
            <input
              type='password'
              name='password'
              value={formData.password}
              onChange={handleInputChange}
              placeholder='Enter your password...'
              className='h-10 p-2 w-full border-2 rounded-sm'
            />
            {error.password && <Error message={error.password} />}
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleLogin} disabled={loading}>
          {loading ? <BeatLoader color="#fff" /> : "Login"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;