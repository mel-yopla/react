import hero from "../assets/hero.png";
const Header = () => {
  return (
    <header>
      <img
        src={hero}
        alt="error "
      />
      <nav>
        <ul>
          <li>Inicio</li>
          <li>Acerca de</li>
          <li>Contacto</li>
        </ul>
      </nav>
      <button>Iniciar Sesión</button>
    </header>
  );
};

export default Header;
