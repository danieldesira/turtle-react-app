import type { Score } from "./interfaces";
import { useLoaderData, useNavigate } from "react-router";
import ScoreTable from "./ScoreTable";

function Scores() {
  const scores = useLoaderData() as Score[];
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-2xl font-bold">All-time Scores</h2>
      <div className="flex gap-2">
        <div className="flex gap-1 items-center">
          <label htmlFor="outcomes-select" className="text-sm font-semibold">
            Outcomes
          </label>
          <select
            id="outcomes-select"
            className="p-2 border border-primary rounded-sm"
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
      <ScoreTable scores={scores} />
    </div>
  );
}

export default Scores;
