import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Thanks from "./pages/Thanks"


export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/thanks' element={<Thanks/>}/>
      </Routes>
    </div>
  )
}
