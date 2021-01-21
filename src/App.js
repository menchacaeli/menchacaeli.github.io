import withRoot from "./withRoot.js";
import AppAppBar from "./AppAppBar.js";
import AppHero from "./AppHero.js";
import AppValues from "./AppValues.js";
import AppProjects from "./AppProjects.js";

function App() {
  return (
    <div className="App">
      <AppAppBar />
      <AppHero />
      <AppValues />
      <AppProjects />
    </div>
  );
}

export default withRoot(App);
