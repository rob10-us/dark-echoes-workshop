import { episodeList } from "./data";
import { useState } from "react";

function App() {
  const [episodes] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState();

  return (
    <>
      <header>
        <h1>Dark Echoes</h1>
      </header>

      <main></main>
    </>
  );
}
export default App;
