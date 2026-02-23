import type { Score } from "./interfaces";
import { useLoaderData, useNavigate } from "react-router";

function Scores() {
  const scores = useLoaderData() as Score[];
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-2xl font-bold">All-time Scores</h2>
      <div className="flex gap-2">
        <div className="flex flex-col gap-1">
          <label htmlFor="outcomes-select" className="text-sm font-semibold">
            Outcomes
          </label>
          <select
            id="outcomes-select"
            className="p-2 border border-pink-500 rounded-sm"
            onChange={(event) =>
              navigate(
                `/scores?outcome=${event.target.value === "all" ? "" : event.target.value}`,
              )
            }
          >
            <option value="all" className="dark:bg-slate-900">
              All
            </option>
            <option value="win" className="dark:bg-slate-900">
              Wins
            </option>
            <option value="loss" className="dark:bg-slate-900">
              Losses
            </option>
          </select>
        </div>
      </div>
      <table className="table-auto w-full border-collapse border border-pink-500">
        <thead>
          <tr>
            <th className="px-4 py-2">Player Name</th>
            <th className="px-4 py-2">Level</th>
            <th className="px-4 py-2">Duration</th>
            <th className="px-4 py-2">Points</th>
          </tr>
        </thead>
        <tbody className="border-collapse border border-pink-500">
          {scores.map(({ playerName, level, duration, points }, index) => (
            <tr key={index}>
              <td className="border px-4 py-2 border-pink-500">{playerName}</td>
              <td className="border px-4 py-2 border-pink-500 text-right">
                {level}
              </td>
              <td className="border px-4 py-2 border-pink-500 text-right">
                {duration}
              </td>
              <td className="border px-4 py-2 border-pink-500 text-right">
                {points}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Scores;
