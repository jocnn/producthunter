import Link from "next/link"
import Search from "../ui/search"

import Navigation from "./navigation"

const Header = () => {
	return (
		<header>
			<div>
				<div>
					<p>P</p>

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
			</div>
		</header>
	)
}

export default Header
