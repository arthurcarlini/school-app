import { useState } from 'react';
import { useEffect } from 'react';

// Styles
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import FormHelperText from '@mui/material/FormHelperText';

// Form validation
import { Formik } from 'formik'
import * as Yup from 'yup'

// Firebase auth
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase/config.js'

import { useNavigate } from 'react-router-dom'

function signUpModal() {

  const navigate = useNavigate()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate('/dashboard')
      }
    })
  })

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Modal styles
  const style = {
    position: 'absolute' as 'absolute',
    top: '40%',
    left: '60%',
    transform: 'translate(-100%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    borderRadius: '5px',
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <Button onClick={handleShow}>Sign Up</Button>
      <Modal
        open={show}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" component="h2">
            Sign In
          </Typography>
          <Typography>Enter your details</Typography>
          <Box id="modal-modal-description" sx={{ mt: 2 }}>
            <Formik
              initialValues={{
                email: '',
                password: '',
              }}
              validationSchema={Yup.object({
                password: Yup.string()
                  .min(8, 'Must be 8 characters or more')
                  .required('Required'),
                email: Yup.string().email('Invalid email address').required('Required'),
              })}
              onSubmit={value => {
                createUserWithEmailAndPassword(auth, value.email, value.password)
              }}
            >
              {formik => (
                <Box component="form" onSubmit={formik.handleSubmit}>
                  {/* <TextField label="Name" margin="normal" {...formik.getFieldProps('userName')} fullWidth />
                  {formik.touched.userName && formik.errors.userName ? <FormHelperText>{formik.errors.userName}</FormHelperText> : null} */}

                  <TextField label="Email" margin="normal" {...formik.getFieldProps('email')} fullWidth />
                  {formik.touched.email && formik.errors.email ? <FormHelperText>{formik.errors.email}</FormHelperText> : null}

                  <TextField type="password" label="Password" margin="normal" {...formik.getFieldProps('password')} fullWidth />
                  {formik.touched.password && formik.errors.password ? <FormHelperText>{formik.errors.password}</FormHelperText> : null}

                  {/* <TextField type="password" label="Confirm password" margin="normal" {...formik.getFieldProps('confirmPassword')} fullWidth />
                  {formik.touched.confirmPassword && formik.errors.confirmPassword ? <FormHelperText>{formik.errors.confirmPassword}</FormHelperText> : null} */}

                  <Button type="submit" variant="contained" fullWidth sx={{ mt: 1 }}>Ok</Button>
                </Box>
              )}
            </Formik>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

export default signUpModal