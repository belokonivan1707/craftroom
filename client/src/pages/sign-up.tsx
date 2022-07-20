import React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box/Box';
import Grid from '@mui/material/Grid/Grid';
import { Form, Formik } from 'formik';
import { LoadingButton } from '../ui/buttons/loading-button';
import { TextFormField } from '../ui/fields/text-form-field';
import * as Yup from 'yup';
import { useAuth } from '../hooks/useAuth';

interface SignUpFormData {
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const initialValues: SignUpFormData = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: ''
};

const validationSchema = Yup.object().shape({
  //   firstName: Yup.string().required('This field is required.'),
  //   lastName: Yup.string().required('This field is required.'),
  email: Yup.string().email('Invalid email').required('This field is required.'),
  password: Yup.string()
    .min(6, 'Password should contain at least 8 characters')
    .required('This field is required.'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match.')
    .required('This field is required.')
});

export const SignUp = () => {
  const navigate = useNavigate();
  const { signup } = useAuth();

  const onSubmit = async (values: SignUpFormData) => {
    const { email, password } = values;
    try {
      await signup(email, password);
      navigate('/dashboard/home');
    } catch (err: any) {
      alert(err?.code);
    }
  };

  return (
    <Box>
      <h1>sign in page</h1>
      <Formik onSubmit={onSubmit} initialValues={initialValues} validationSchema={validationSchema}>
        {({ submitForm, isSubmitting }) => (
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextFormField type="email" name="email" label="Email" />
              </Grid>
              <Grid item xs={12}>
                <TextFormField type="password" name="password" label="Password" />
              </Grid>
              <Grid item xs={12}>
                <TextFormField name="confirmPassword" type="password" label={'Confirm Password'} />
              </Grid>

              <LoadingButton
                color="primary"
                variant="contained"
                disabled={isSubmitting}
                loading={isSubmitting}
                onClick={submitForm}
              >
                Sign Up
              </LoadingButton>
            </Grid>
          </Form>
        )}
      </Formik>
    </Box>
  );
};
