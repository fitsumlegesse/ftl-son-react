import { Routes, Route } from "react-router-dom"
import {Home} from "./components/Home"
import {AddSong} from "./components/AddSong"
import { ViewSong } from "./components/ViewSong"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="addsong" element={ <AddSong/> } />
        <Route path="viewsong" element={ <ViewSong/> } />
      </Routes>
    </div>
  )
}

export default App

