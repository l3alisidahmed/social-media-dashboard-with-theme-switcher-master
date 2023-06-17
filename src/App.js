import "./app.css";
import OverView from "./component/overView/overView";
import NavBar from "./component/Nav/nav";
import DailyOverView from "./component/dailyOverView/dailyOverView";

function App() {
  return (
    <div className="App">
     <NavBar />
     <OverView />
     <DailyOverView />
    </div>
  );
}

export default App;
