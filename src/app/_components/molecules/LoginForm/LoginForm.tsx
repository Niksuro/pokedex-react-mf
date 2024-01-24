'use client'
import { useFormik } from 'formik'
import Button from '../../atoms/Button/Button'
import InputField from '../../atoms/InputField/InputField'
import { Container } from './LoginForm.style'
import { validateLogin } from '@/app/_helpers/validationsForms'
import { useState } from 'react'
import { signIn } from 'next-auth/react'
import {
  ICON_CLOSE_EYE,
  ICON_EYE,
  ICON_PASSWORD,
  ICON_USER,
  LABEL_BUTTON_SIGN_IN,
  LABEL_EMAIL,
  LABEL_PASSWORD,
  PLACEHOLDER_EMAIL,
  PLACEHOLDER_PASSWORD,
  TEXT_ERROR,
  TEXT_ERROR_TRY_AGAIN,
  TEXT_ERROR_USER_SIGN_IN,
  TEXT_ERROR_USER_UNEXPECTED,
  TEXT_SUCCESS,
  TEXT_SUCCESS_USER_SIGN_IN,
} from '@/app/_constants/constants'
import Spinner from '../../atoms/Spinner/Spinner'
import { useRouter } from 'next/navigation'
import { openModalError, openModalSuccess } from '@/app/_helpers/openModal'
import ModalError from '@/app/_interfaces/ModalError'
import ModalSuccess from '@/app/_interfaces/ModalSuccess'

const LoginForm = () => {
  /**
   * Router instance to manage the routes
   */
  const router = useRouter()
  /**
   * State to manage the visualization of the password
   */
  const [showPassword, setShowPassword] = useState(false)
  /**
   * State to manage the loading
   */
  const [loading, setLoading] = useState(false)
  /**
   * Formik instance to manage the forms
   */
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validateOnChange: false,
    validate: (values) => validateLogin(values),
    onSubmit: (values) => {
      onSubmitData()
    },
  })
  /**
   * Function to manage the submit of the form
   * @returns if find an error after request signIn
   */
  const onSubmitData = async () => {
    try {
      setLoading(true)
      const res = await signIn('credentials', {
        email: formik.values.email.toLowerCase(),
        password: formik.values.password,
        redirect: false,
      })
      if (res?.error) {
        setLoading(false)
        const errorModalData: ModalError = {
          title: TEXT_ERROR,
          text: TEXT_ERROR_USER_SIGN_IN,
          textButton: TEXT_ERROR_TRY_AGAIN,
        }
        openModalError(errorModalData)
        return
      }
      const successModalData: ModalSuccess = {
        title: TEXT_SUCCESS,
        text: TEXT_SUCCESS_USER_SIGN_IN,
      }
      openModalSuccess(successModalData)
      router.push('/dashboard')
    } catch (error: any) {
      const errorModalData: ModalError = {
        title: TEXT_ERROR,
        text: TEXT_ERROR_USER_UNEXPECTED,
        textButton: TEXT_ERROR_TRY_AGAIN,
      }
      openModalError(errorModalData)
      setLoading(false)
    }
  }

  return (
    <Container onSubmit={formik.handleSubmit}>
      {loading && <Spinner />}
      <InputField
        label={LABEL_EMAIL}
        type="text"
        leftIcon={ICON_USER}
        error={formik.errors.email}
        value={formik.values.email}
        name={'email'}
        onChange={formik.handleChange}
        placeholder={PLACEHOLDER_EMAIL}
      />
      <InputField
        label={LABEL_PASSWORD}
        type={showPassword ? 'text' : 'password'}
        leftIcon={ICON_PASSWORD}
        rightIcon={showPassword ? ICON_EYE : ICON_CLOSE_EYE}
        error={formik.errors.password}
        value={formik.values.password}
        name={'password'}
        idRightIcon="showPassword"
        onChange={formik.handleChange}
        onClickRightIcon={() => setShowPassword(!showPassword)}
        placeholder={PLACEHOLDER_PASSWORD}
      />
      <Button text={LABEL_BUTTON_SIGN_IN} variant="primary" />
    </Container>
  )
}

export default LoginForm
