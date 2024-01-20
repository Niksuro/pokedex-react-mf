import Swal from 'sweetalert2'
import ModalError from '../_interfaces/ModalError'

/**
 * Function that open a modal with a message, stylized to be a ModalError
 * @param title Title of the modal
 * @param text Text of the modal
 * @param textButton Text of the button of the modal 
 */
export const openModalError = ({ title, text, textButton }: ModalError) => {
  Swal.fire({
    title: title,
    text: text,
    icon: 'error',
    confirmButtonColor: '#16a34a',
    confirmButtonText: textButton,
  })
}
