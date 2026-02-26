import type { ScoresOptions, ScoresResponse } from "./interfaces";
import { useLoaderData, useNavigate } from "react-router";
import ScoreTable from "./ScoreTable";
import Paginator from "./Paginator";
import { useEffect, useState } from "react";
import Dropdown from "../forms/Dropdown";
import FilterField from "../forms/FilterField";

function Scores() {
  const { scores, currentPage, totalPages } = useLoaderData() as ScoresResponse;
  const navigate = useNavigate();
  const [filters, setFilters] = useState<ScoresOptions>({
    juniors: false,
    page: 1,
    items: 10,
  });

  const handleOutcomeChange = (event: React.ChangeEvent<HTMLSelectElement>) =>
    setFilters((prev) => ({
      ...prev,
      outcome:
        event.target.value === ""
          ? undefined
          : (event.target.value as "WIN" | "LOSS"),
      page: 1,
    }));

  const handlePageChange = (page: number) =>
    setFilters((prev) => ({ ...prev, page }));

  const handleJuniorOnlyCheck = (event: React.ChangeEvent<HTMLInputElement>) =>
    setFilters((prev) => ({ ...prev, juniors: event.target.checked, page: 1 }));

  useEffect(() => {
    navigate(
      `/scores?${Object.entries(filters)
        .filter(([, value]) => value)
        .map(([key, value]) => `${key}=${value === true ? "1" : value}`)
        .join("&")}`,
    );
  }, [filters, navigate]);

  return (
    <div className="flex flex-col gap-3">
      <header className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">All-time Scores</h2>
        <div className="flex gap-3">
          <Dropdown
            id="outcomes-select"
            label="Outcomes"
            onChange={handleOutcomeChange}
            options={[
              { label: "All", value: "" },
              { label: "Wins", value: "win" },
              { label: "Losses", value: "loss" },
            ]}
          />
          <FilterField>
            <label htmlFor="juniors-checkbox" className="text-sm font-semibold">
              Juniors only (Under 16)
            </label>
            <input
              type="checkbox"
              id="juniors-checkbox"
              className="appearance-none checked:bg-primary w-4 h-4 rounded-sm focus:ring-1 focus:ring-primary border border-primary"
              onChange={handleJuniorOnlyCheck}
            />
          </FilterField>
        </div>
      </header>
      {scores.length ? (
        <div className="border border-primary rounded-sm overflow-auto">
          <ScoreTable scores={scores} />
        </div>
      ) : (
        <span className="text-lg font-bold">
          No scores found yet... Please broaden your filters!
        </span>
      )}
      <Paginator
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default Scores;
