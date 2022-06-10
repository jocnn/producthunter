import { useState, useEffect } from 'react'

const useValidation = (stateInit, validar, fn) => {
  
  const [ valores, setValores ] = useState(stateInit)
  const [ errores, setErrores ] = useState({})
  const [ submitForm, setSubmitForm ] = useState(false)
  
  useEffect(() => {
    if (submitForm) {
      const noErrores = Object.keys(errores).length === 0

      if (noErrores) {
        fn()
      }

      setSubmitForm(false)
    }
  }, [errores])

  const handleChange = e => {
    setValores({
      ...valores,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()

    const erroresValidation = validar(valores)
    setErrores(erroresValidation)
    setSubmitForm(true)
  }

  return {
    valores,
    errores,
    submitForm,
    handleChange,
    handleSubmit,
  };
}

export default useValidation