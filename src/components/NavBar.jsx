import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="w-full bg-[rgba(212,218,178,1)] text-black p-4 shadow-lg flex flex-col justify-center gap-8 text-center">
      <img
        className="w-30 h-auto flex flex-col items-center justify-center mx-auto"
        src="imagenes/LogoSinFondoHogarVerde.png"
        alt="Logo de HogarVerde"
      />
      <Link to="/">Inicio</Link>
    </nav>
  );
}

export default NavBar;
