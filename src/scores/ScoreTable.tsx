import type { Score } from "./interfaces";

type Props = {
  scores: Score[];
};

function ScoreTable({ scores }: Props) {
  return (
    <table className="table-auto w-full border-collapse border border-primary rounded-sm">
      <thead>
        <tr>
          <th className="px-4 py-2">Player Name</th>
          <th className="px-4 py-2">Level</th>
          <th className="px-4 py-2">Duration</th>
          <th className="px-4 py-2">Points</th>
          <th className="px-4 py-2">Outcome</th>
        </tr>
      </thead>
      <tbody>
        {scores.map(
          ({ playerName, level, duration, points, outcome }, index) => (
            <tr key={index}>
              <td className="border px-4 py-2 border-primary">{playerName}</td>
              <td className="border px-4 py-2 border-primary text-right">
                {level}
              </td>
              <td className="border px-4 py-2 border-primary text-right">
                {duration}
              </td>
              <td className="border px-4 py-2 border-primary text-right">
                {points}
              </td>
              <td className="border px-4 py-2 border-primary text-right">
                {outcome}
              </td>
            </tr>
          ),
        )}
      </tbody>
    </table>
  );
}

export default ScoreTable;
