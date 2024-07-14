import { Route, Routes } from "react-router"
import SignIn from "./views/SignIn"
import PageNotFound from "./views/PageNotFound"
import SignUp from "./views/SignUp"
import { Link } from "react-router-dom"
import AccountView from "./views/AccountView"

let links = [
 { text: "Sign in", link: "sign-in" },
 { text: "Sign up", link: "sign-up" },
 { text: "Account", link: "account" },
]

// main App component
function App() {

  return (
    <div className="flex">
      <div className="flex">
        {links.map(link => {
          return <Link className="p-1" to={link.link}>{link.text}</Link>
        })}
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
