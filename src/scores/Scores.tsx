import type { Score } from "./interfaces";
import { useLoaderData } from "react-router";

function Scores() {
  const scores = useLoaderData() as Score[];

  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-2xl font-bold">All-time Scores</h2>

      <table className="table-auto w-full border-collapse border border-pink-500">
        <thead>
          <tr>
            <th className="px-4 py-2 ">Player Name</th>
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
