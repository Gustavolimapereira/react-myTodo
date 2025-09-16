import { BrowserRouter, Route, Routes } from "react-router";
import PageComponents from "./pages/page-components";


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/components" element={<PageComponents/>}>

      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
