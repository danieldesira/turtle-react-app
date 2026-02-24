import { Link, Outlet } from "react-router";

function Layout() {
  return (
    <div className="min-h-screen flex flex-col dark:bg-slate-900 dark:text-white font-sans">
      <header className="flex justify-between bg-primary text-white p-4">
        <img
          src="https://turtle-quest.vercel.app/assets/favicon-B1ZwkIgi.svg"
          alt="MSTN Logo"
          className="w-8 h-8 animate-bounce-once"
        />
        <menu className="flex gap-2 items-center">
          <Link to="/" className="hover:bg-pink-400 p-2 rounded-sm">
            Home
          </Link>
          <Link to="/scores" className="hover:bg-pink-400 p-2 rounded-sm">
            Scores
          </Link>
        </menu>
      </header>
      <main className="flex-1 p-4">
        <Outlet />
      </main>
      <footer className="bg-primary text-white p-4 text-center">
        Built by Daniel Desira with React, React Router and Tailwindcss.
      </footer>
    </div>
  );
}

export default Layout;
