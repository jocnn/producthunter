import Link from "next/link"
import styled from "@emotion/styled"

import Search from "../ui/search"
import Navigation from "./navigation"

const Header_Styled = styled.header`
  border-bottom: 2px solid var(--gris3);
  padding: 1rem 0;
`

const Div_Styled = styled.div`
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;
  @media(min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`

const P_Styled = styled.p`
  color: var(--naranja);
  font-size: 4rem;
  line-height: 0;
  font-weight: 700;
  font-family: 'Roboto Slab', serif;
  margin-right: 2rem;
`

const Header = () => {
	return (
		<Header_Styled>
			<Div_Styled>
				<div>
          <Link href={'/'}>
					  <P_Styled>P</P_Styled>
          </Link>

					<Search />

					<Navigation />

				</div>
				<div>

          <p>Hola: usuario</p>

          <button
            type="button"
          >Cerrar Sesión</button>
        
          <Link href={'/'}>Iniciar Sesión</Link>
          <Link href={'/'}>Crear Cuenta</Link>
        </div>
			</Div_Styled>
		</Header_Styled>
	)
}

export default Header
