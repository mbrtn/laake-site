import css from "../pages/style.scss";
import { withRouter } from "next/router";

function NavLink({ href, name, scroll, router }) {
  const handleClick = e => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={router.pathname === href ? css.activeNav : ""}
    >
      {name}
    </a>
  );
}

export default withRouter(NavLink);
