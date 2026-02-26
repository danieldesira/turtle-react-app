import { Link } from "react-router";
import "./Menu.css";

type MenuItem = { url: string; label: string };

function Menu() {
  const menuItems = [
    { url: "/", label: "Home" },
    { url: "/scores", label: "Scores" },
  ] satisfies MenuItem[];

  const menuItemsJsx = menuItems.map(({ url, label }) => (
    <Link key={url} to={url} className="hover:bg-pink-400 p-2 rounded-sm text-white text-lg font-bold">
      {label}
    </Link>
  ));

  return (
    <>
      <menu className="md:flex gap-2 items-center hidden">{menuItemsJsx}</menu>
      <menu className="flex flex-col md:hidden">
        <button type="button" className="" popoverTarget="burgerMenu">
          V
        </button>
      </menu>
      <dialog
        id="burgerMenu"
        popover=""
        className="fixed top-20 bg-primary flex-col gap-10 justify-center items-center min-h-2/3 w-full rounded-sm opacity-85"
      >
        {menuItemsJsx}
      </dialog>
    </>
  );
}

export default Menu;
