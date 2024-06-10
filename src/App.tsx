import "./App.css";
import Root from "@/routes/Root.js";
import SidebarLink from "@/components/SidebarDirect";
function App() {
  return (
    <div className="p-0 m-0 mx-auto relative bg-gradient-to-r from-gray-300 to-gray-500 h-screen w-screeen">
      <SidebarLink />
      <Root></Root>
    </div>
  );
}

export default App;
