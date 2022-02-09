import { useState } from 'react'

const DRAG_IMAGE_STATES = {
  ERROR: -1,
  NONE: 0,
  DRAG_OVER: 1, //Cunado ya colocamos una imagen
  COMPLETE: 2 // Cuando la imagen ya se subió
}

export default function useDrag({ action }) {
  const [drag, setDrag] = useState(DRAG_IMAGE_STATES.NONE)

  const handleDragEnter = (e) => {
    //Cuando colocamos el archivo sobre el elemento
    //Debemos prevenir en todos los eventos, para que no abra la imagen en el navegador
    e.preventDefault()
    setDrag(DRAG_IMAGE_STATES.DRAG_OVER)
  }

  const handleDragLeave = (e) => {
    //Cuando soltamos el archivo
    e.preventDefault()
    setDrag(DRAG_IMAGE_STATES.NONE)
  }

  const handleDrop = (e) => {
    //Cuando el achivo está colocado por haberlo soltado
    e.preventDefault()
    setDrag(DRAG_IMAGE_STATES.NONE)
    action(e)
  }

  return {
    drag,
    handleDragEnter,
    handleDragLeave,
    handleDrop
  }
}
