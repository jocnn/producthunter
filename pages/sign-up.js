import css from "../styles/SignUp.module.css";
import useValidation from "../hooks/useValidation";
import validateSignUp from "../validation/validarSignUp";

import Layout from "../components/layout/layout";

const SignUp = () => {

	const STATE_INITIAL = {
		nombre: "",
		email: "",
		password: "",
	};

	const {
    valores,
    errores,
    handleChange,
    handleSubmit,
    handleBlur,
  } = useValidation(STATE_INITIAL, validateSignUp, createAccount)

  const { nombre, email, password } = valores

  function createAccount() {
    console.log('creando cuenta...')
  }

	return (
		<div>
			<Layout>

        <h1 id="my_h1">SignUp</h1>

        <form 
          onSubmit={handleSubmit}
          className={css.form}
        >
          <div className={css.field}>
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              placeholder="Tu nombre"
              name="nombre"
              autoComplete="username"
              value={nombre}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>

          {
            errores.nombre && <p className={css.errors}>{errores.nombre}</p>
          }

          <div className={css.field}>
            <label htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              placeholder="Tu correo electrónico"
              name="email"
              autoComplete="new-email"
              validate="true"
              value={email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>

          {
            errores.email && <p className={css.errors}>{errores.email}</p>
          }

          <div className={css.field}>
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              placeholder="Tu contraseña"
              name="password"
              autoComplete="new-password"
              value={password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>

          {
            errores.password && <p className={css.errors}>{errores.password}</p>
          }

          <input
            className={css.inputSubmitField}
            type="submit"
            value="Crear Cuenta"
          />

        </form>

			</Layout>
		</div>
	);
};

export default SignUp;
