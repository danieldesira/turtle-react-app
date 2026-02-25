import type { Score } from "./interfaces";

type Props = {
  scores: Score[];
};

function ScoreTable({ scores }: Props) {
  return (
    <table className="table-auto w-full border-collapse border border-primary rounded-sm">
      <thead>
        <tr>
          <th></th>
          <th className="px-2 py-1">Player Name</th>
          <th className="px-2 py-1">Player Age</th>
          <th className="px-2 py-1">Level</th>
          <th className="px-2 py-1">Duration</th>
          <th className="px-2 py-1">Points</th>
          <th className="px-2 py-1">Outcome</th>
        </tr>
      </thead>
      <tbody>
        {scores.map(
          (
            {
              playerProfilePicUrl,
              playerName,
              playerAge,
              level,
              duration,
              points,
              outcome,
            },
            index,
          ) => (
            <tr key={index}>
              <td className="border px-2 py-1 border-primary">
                {playerProfilePicUrl && (
                  <img
                    className="w-8 h-8 rounded-sm m-auto"
                    src={playerProfilePicUrl}
                    alt="Player picture"
                  />
                )}
              </td>
              <td className="border px-2 py-1 border-primary text-center">
                {playerName}
              </td>
              <td className="border px-2 py-1 border-primary text-right">
                {playerAge}
              </td>
              <td className="border px-2 py-1 border-primary text-right">
                {level}
              </td>
              <td className="border px-2 py-1 border-primary text-right">
                {duration}
              </td>
              <td className="border px-2 py-1 border-primary text-right">
                {points}
              </td>
              <td className="border px-2 py-1 border-primary text-center">
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
