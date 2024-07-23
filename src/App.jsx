import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Homepage from "./pages/Homepage"
import Watchpage from "./pages/Watchpage"
import { Provider } from "react-redux"
import store from "./utils/store"


function App() {

  return (
    <Provider store={store}>
      <div>
        <BrowserRouter>
          <div>
            <Navbar />
            <Routes>
              <Route path='/' Component={Homepage} />
              <Route path='/watch' Component={Watchpage} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </Provider>
  )
}

export default App
