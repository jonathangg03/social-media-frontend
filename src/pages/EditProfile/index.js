import React from 'react'

export default function EditProfile() {
  return (
    <div>
      <h2>Selecciona los elementos que deseas cambiar en tu perfil</h2>
      <form>
        <input type='text' placeholder='Nombre' />
        <input type='text' placeholder='Descripción'></input>
      </form>
    </div>
  )
}
