import React from 'react'
import { FormContext } from './FormContext'


const Button = ({ children }) => {
  const { form, setForm, confirmacao, setConfirmacao } = React.useContext(FormContext)

  async function handleClick(event) {

    event.preventDefault()
    console.log(form)
    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // form é o objeto com os dados do formulário
      body: JSON.stringify(form),
    }).then((response) => {
      response.ok ? setConfirmacao('Enviado com sucesso') : setConfirmacao('Falha ao enviar!')
    }).finally(() => {
      setTimeout(() => {
        setConfirmacao(null)
      }, 5000)

    })

  }

  return (
    <>
      <span style={{ display: 'block', marginBottom: '10px' }}>{confirmacao}</span>

      <button onClick={handleClick}>
        {children}
      </button>
    </>
  )
}

export default Button
