import css from "../pages/style.scss";
import NavLink from "./NavLink";
import Link from "next/link";

function Nav({ href, name }) {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <Link scroll={true} href="/" name="Home">
          <span className={css.logoContainer}>
            <span className={css.logo} />
            <span className={css.logoText}>Läke</span>
          </span>
        </Link>
        <NavLink scroll={true} href="/" name="Home" />
        <NavLink scroll={true} href="/terms" name="Terms" />
        <NavLink scroll={true} href="/privacy" name="Privacy" />
      </nav>
    </header>
  );
}

export default Nav;
