import "./App.css";
import Sidebar from "../components/sidebar";
import NonSideBar from "../components/nonsidebar";

function App() {
  return (
    <div className="col">
      <Sidebar />
      <NonSideBar />
    </div>
  );
}

export default App;
