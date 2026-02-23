import type { ScoresResponse } from "./interfaces";
import { useLoaderData, useNavigate } from "react-router";
import ScoreTable from "./ScoreTable";
import Paginator from "./Paginator";
import { useState } from "react";

function Scores() {
  const { scores, currentPage, totalPages } = useLoaderData() as ScoresResponse;
  const navigate = useNavigate();
  const [outcomeFilter, setOutcomeFilter] = useState<string>("all");

  const handleOutcomeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setOutcomeFilter(event.target.value);
    navigate(
      `/scores?outcome=${event.target.value === "all" ? "" : event.target.value}`,
    );
  };

  const handlePageChange = (page: number) =>
    navigate(
      `/scores?page=${page}&outcome=${outcomeFilter === "all" ? "" : outcomeFilter}`,
    );

  return (
    <div className="flex flex-col gap-3">
      <header className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">All-time Scores</h2>
        <div className="flex gap-1 items-center">
          <label htmlFor="outcomes-select" className="text-sm font-semibold">
            Outcomes
          </label>
          <select
            id="outcomes-select"
            className="p-2 border border-primary rounded-sm"
            onChange={handleOutcomeChange}
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
      </header>
      <ScoreTable scores={scores} />
      <Paginator
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default Scores;
