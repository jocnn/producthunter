import Link from "next/link"
import styled from "@emotion/styled"
import css from '../../styles/Header.module.css'

import Search from "../ui/search"
import Navigation from "./navigation"
import Buttom from "../ui/buttom"

const Div_Query_Display = styled.div`
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;
  @media(min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`

const Header = () => {

  const usuario = false

	return (
		<header className={css.header}>
			<Div_Query_Display>
				<div>
          <Link href={'/'}>
					  <p className={css.logo}>P</p>
          </Link>

					<Search />

					<Navigation />

				</div>

				<div className={css.display}>

          {
            usuario ? (
              <>
                <p className={css.marginRight}>Hola: usuario</p>

                <Buttom
                  bgColor='true'
                >Cerrar Sesión</Buttom>

              </>
            ) : (
              <>
                <Link href={'/'}>
                  <Buttom
                    bgColor='true'
                  >
                    Iniciar Sesión
                  </Buttom>
                </Link>
                <Link href={'/'}>
                  <Buttom>
                    Crear Cuenta
                  </Buttom>
                </Link>              
              </>
            )
          }

        </div>
			</Div_Query_Display>
		</header>
	)
}

export default Header
