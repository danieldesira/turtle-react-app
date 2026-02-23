import { createBrowserRouter } from "react-router";
import Layout from "./layout/Layout";
import Homepage from "./Homepage";
import Scores from "./scores/Scores";
import { fetchScores } from "./scores/service";
import ErrorComponent from "./ErrorComponent";

export const routes = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Homepage,
      },
      {
        path: "/scores",
        Component: Scores,
        loader: async ({ request }) => {
          const url = new URL(request.url);
          const outcome = url.searchParams.get("outcome") || undefined;
          return await fetchScores({outcome});
        },
        ErrorBoundary: ErrorComponent,
      },
    ],
  },
]);
