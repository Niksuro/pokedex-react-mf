import { EMAIL_REGEX } from '../_constants/constants'

/**
 * Function to validate the login form
 * @param values Values of the form, in this case the email and the password
 * @returns An object with the errors of the form if exists
 */
export const validateLogin = (
  values: { email: string; password: string }
) => {
  const errors: any = {}
  // Validate email
  if (!EMAIL_REGEX.test(values.email)) {
    errors.email = 'Debe ingresar un correo electrónico válido'
  }
  // Validate password
  if (values.password.length < 1) {
    errors.password = 'Debe ingresar una contraseña'
    return errors
  }
  return errors
}
