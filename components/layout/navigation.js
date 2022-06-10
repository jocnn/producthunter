import Link from "next/link"
import css from '../../styles/Header.module.css'

const Navigation = () => {
	return (
		<nav className={css.navEnlace}>
			<Link href={"/"}>Inicio</Link>
			<Link href={"/"}>Populares</Link>
			<Link href={"/"}>Nuevo Producto</Link>
		</nav>
	)
}

export default Navigation
