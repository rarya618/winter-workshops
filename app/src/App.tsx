import { Route, Routes } from "react-router"
import SignIn from "./views/SignIn"
import PageNotFound from "./views/PageNotFound"

// main App component
function App() {

  return (
    <div>
      <Routes>
        <Route 
          index 
          element={<SignIn />}
        />
        <Route 
          path="sign-in" 
          element={<SignIn />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  )
}

export default App
