import { NavLink } from "react-router-dom";
import {
  House,
  CheckSquare,
  Timer as TimerIcon,
  ChartNoAxesColumn,
  Settings,
} from "lucide-react";

function Sidebar() {
  const linkStyle = ({ isActive }) =>
    `flex items-center gap-3 rounded-xl px-4 py-3 transition ${
      isActive
        ? "bg-red-400 font-medium text-black"
        : "text-neutral-400 hover:bg-neutral-800 hover:text-white"
    }`;

  return (
    <aside className="flex flex-col border-b border-neutral-800 bg-neutral-950 p-5 md:min-h-screen md:w-64 md:border-b-0 md:border-r">
      <h1 className="text-2xl font-bold tracking-tight">
        Vega<span className="text-red-400">m</span>
      </h1>

      <p className="mt-1 text-xs text-neutral-500">YOUR PRODUCTIVITY SPACE</p>

      <nav className="mt-10 space-y-2">
        <NavLink to="/" end className={linkStyle}>
          <House size={19} />
          Dashboard
        </NavLink>

        <NavLink to="/tasks" className={linkStyle}>
          <CheckSquare size={19} />
          My Tasks
        </NavLink>

        <NavLink to="/timer" className={linkStyle}>
          <TimerIcon size={19} />
          Focus Timer
        </NavLink>

        <NavLink to="/statistics" className={linkStyle}>
          <ChartNoAxesColumn size={19} />
          Statistics
        </NavLink>

        <NavLink to="/settings" className={linkStyle}>
          <Settings size={19} />
          Settings
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;
