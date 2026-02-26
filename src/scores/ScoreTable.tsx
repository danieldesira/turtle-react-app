import type { Score } from "./interfaces";

type Props = {
  scores: Score[];
};

function ScoreTable({ scores }: Props) {
  return (
    <table className="table-auto w-full border-collapse">
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
            <tr
              key={index}
              className={index % 2 ? "bg-gray-600 text-white" : ""}
            >
              <td className="p-2">
                {playerProfilePicUrl && (
                  <img
                    className="w-8 h-8 rounded-sm m-auto"
                    src={playerProfilePicUrl}
                    alt="Player picture"
                  />
                )}
              </td>
              <td className="p-2 text-center">{playerName}</td>
              <td className="p-2 text-right">{playerAge}</td>
              <td className="p-2 text-right">{level}</td>
              <td className="p-2 text-right">{duration}</td>
              <td className="p-2 text-right">{points}</td>
              <td className="p-2 text-center">{outcome}</td>
            </tr>
          ),
        )}
      </tbody>
    </table>
  );
}

export default ScoreTable;
