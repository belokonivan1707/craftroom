import React from 'react';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid/Grid';
import Box from '@mui/material/Box/Box';
import { TextFormField } from '../lib/fields/text-form-field';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { LoadingButton } from '../lib/buttons/loading-button';
import { useAuth } from '../hooks/useAuth';

interface SignInFormData {
  email: string;
  password: string;
}

const initialValues: SignInFormData = {
  email: '',
  password: ''
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(6, 'Password should contain at least 6 characters')
    .required('Password is required')
});

export const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const { signin } = useAuth();

  const onSubmitSignInWithEmailAndPassword = async (values: SignInFormData) => {
    const { email, password } = values;
    try {
      await signin(email, password);
      navigate('/dashboard/home');
    } catch (err: any) {
      alert(err?.code);
    }
  };

  return (
    <Box>
      <h1>sign in page</h1>
      <Formik
        onSubmit={onSubmitSignInWithEmailAndPassword}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {({ submitForm, isSubmitting }) => (
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextFormField type="email" name="email" label="Email" />
              </Grid>
              <Grid item xs={12}>
                <TextFormField type="password" name="password" label="Password" />
              </Grid>
              <LoadingButton
                color="primary"
                variant="contained"
                disabled={isSubmitting}
                loading={isSubmitting}
                onClick={submitForm}
              >
                Sign In
              </LoadingButton>
            </Grid>
          </Form>
        )}
      </Formik>
    </Box>
  );
};
