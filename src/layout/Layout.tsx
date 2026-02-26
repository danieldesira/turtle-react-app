import { Outlet } from "react-router";
import Menu from "./Menu";

function Layout() {
  return (
    <div className="min-h-screen flex flex-col dark:bg-slate-900 dark:text-white font-sans">
      <header className="fixed w-full flex justify-between items-center bg-primary text-white p-4 opacity-85">
        <img
          src="https://turtle-quest.vercel.app/assets/favicon-B1ZwkIgi.svg"
          alt="MSTN Logo"
          className="w-8 h-8 animate-bounce-once"
        />
        <Menu />
      </header>
      <main className="flex-1 p-4 my-20">
        <Outlet />
      </main>
      <footer className="fixed bottom-0 bg-primary text-white p-4 text-center opacity-85">
        Built by Daniel Desira with React, React Router and Tailwindcss.
      </footer>
    </div>
  );
}

export default Layout;
