import { Outlet } from "react-router";
import Menu from "./Menu";
import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa6";
import type { IconType } from "react-icons";

type SocialIcon = {
  Icon: IconType;
  url: string;
};

function Layout() {
  const socialIcons = [
    {
      Icon: FaInstagram,
      url: "https://www.instagram.com/turtlequest.webgame/",
    },
    { Icon: FaYoutube, url: "https://www.youtube.com/@SeaTurtleQuestGame" },
    {
      Icon: FaLinkedin,
      url: "https://www.linkedin.com/in/daniel-desira-50045b97/",
    },
    {
      Icon: FaGithub,
      url: "https://github.com/danieldesira/MissionSeaTurtleNest",
    },
  ] satisfies SocialIcon[];

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
      <footer className="fixed bottom-0 w-full bg-primary text-white p-4 flex gap-4 justify-center items-center opacity-85">
        {socialIcons.map(({ Icon, url }) => (
          <a href={url} target="_blank">
            <Icon className="w-8 h-8" />
          </a>
        ))}
      </footer>
    </div>
  );
}

export default Layout;
