import withReactContent from "sweetalert2-react-content";
import Swal from 'sweetalert2'

const MySwal = withReactContent(Swal)

export const Alert = (title, text, icon, background) => {

  return (
    MySwal.fire({
      title,
      text,
      icon,
      iconColor: 'white',
      timer: 20000,
      showConfirmButton: false,
      background,
      color: 'white',
      allowOutsideClick: true,
    })
  )



}