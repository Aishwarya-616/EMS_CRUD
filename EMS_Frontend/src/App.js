import NavBar from "./components/Navbar";
import HomePage from "./components/HomePage";
import EmployeeData from "./components/EmployeeData";
import AddEmployee from "./components/AddEmployee";
import NotFound from "./components/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import EditEmployee from "./components/EditEmployee";


function App() {
  return (
    <div>
      
      <BrowserRouter>
        <NavBar />
     

        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/employeedata" element={<EmployeeData />}></Route>
          <Route path="/addemployee" element={<AddEmployee />}></Route>
          <Route path="/editemployee/:id" element={<EditEmployee />}></Route>
          <Route path="*" element={<NotFound />}></Route>

        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;