import { episodeList } from "./data";
import { useState } from "react";

function App() {
  const [episodes] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState();

  function EpisodeList() {
    return (
      <section className="episodes">
        <h2>Episodes</h2>

        <ul>
          {episodes.map((episode) => (
            <li key={episode.id}>{episode.title}</li>
          ))}
        </ul>
      </section>
    );
  }
  return (
    <>
      <header>
        <h1>Dark Echoes</h1>
      </header>

      <main>
        <EpisodeList />
      </main>
    </>
  );
}
export default App;
