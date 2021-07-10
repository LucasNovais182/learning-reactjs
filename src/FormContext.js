import React from 'react'

export const FormContext = React.createContext()

export const FormList = ({ children }) => {
  const [form, setForm] = React.useState({
    nome: null,
    email: null,
    senha: null,
    cep: null,
    rua: null,
    numero: null,
    bairro: null,
    cidade: null,
    estado: null
  })
  const [confirmacao, setConfirmacao] = React.useState(null)

  return (
    <FormContext.Provider value={{ form, setForm, confirmacao, setConfirmacao }}>
      {children}
    </FormContext.Provider>
  )
}

// export function FormProvider() {
//   const [form, setForm] = React.useState({
//     nome: 'lucas',
//     // email: null,
//     // senha: null,
//     // cep: null,
//     // rua: null,
//     // numero: null,
//     // bairro: null,
//     // cidade: null,
//     // estado: null
//   })

//   return {
//     form, setForm
//   }
// }

// export function useForm() {
//   const context = React.useContext(FormContext);
//   const { form, setForm } = context
//   return { form, setForm }
// }