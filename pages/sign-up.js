import css from '../styles/SignUp.module.css'

import Layout from "../components/layout/layout"

const SignUp = () => {
  return (
    <div>
      <Layout>
        <>
          <h1 id='my_h1'>SignUp</h1>
          <form className={css.form}>
            <div className={css.field}>
              <label htmlFor="nombre">Nombre</label>
              <input 
                type="text" 
                id="nombre"
                placeholder="Tu nombre"
                name="nombre"
                autoComplete="username"
              />
            </div>

            <div className={css.field}>
              <label htmlFor="email">Correo Electrónico</label>
              <input 
                type="email" 
                id="email"
                placeholder="Tu correo electrónico"
                name="email"
                autoComplete="new-email"
              />
            </div>

            <div className={css.field}>
              <label htmlFor="password">Contraseña</label>
              <input 
                type="password" 
                id="password"
                placeholder="Tu contraseña"
                name="password"
                autoComplete="new-password"
              />
            </div>

            <input 
              className={css.inputSubmitField}
              type="submit" 
              value="Crear Cuenta" 
            />
          </form>
        </>
      </Layout>
    </div>
  )
}

export default SignUp