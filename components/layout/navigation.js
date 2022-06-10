import Link from "next/link"
import css from '../../styles/Header.module.css'

const Navigation = () => {
	return (
		<nav className={css.navEnlace}>
			<Link href={"/"}>Inicio</Link>
			<Link href={"/popular"}>Populares</Link>
			<Link href={"/new-product"}>Nuevo Producto</Link>
		</nav>
	)
}

export default Navigation
