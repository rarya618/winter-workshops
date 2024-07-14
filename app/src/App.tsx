import { Route, Routes } from "react-router"
import SignIn from "./views/SignIn"
import PageNotFound from "./views/PageNotFound"
import SignUp from "./views/SignUp"
import { Link } from "react-router-dom"
import AccountView from "./views/AccountView"

// main App component
function App() {

  return (
    <div>
      <div>
        <Link to={"sign-in"}>Sign in</Link>
        <Link to={"sign-up"}>Sign up</Link>
        <Link to={"account"}>Account</Link>
      </div>
      <Routes>
        <Route 
          index 
          element={<SignIn />}
        />
        <Route 
          path="sign-in" 
          element={<SignIn />}
        />
        <Route 
          path="sign-up" 
          element={<SignUp />}
        />
        <Route 
          path="account" 
          element={<AccountView />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  )
}

export default App
