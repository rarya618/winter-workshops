import { FormEvent } from "react"
import { FormInput } from "./SignIn";

const SignUp = () => {
  let formInputs: FormInput[] = [
    {label: "First Name", id: "firstName", type: "text"},
    {label: "Last Name", id: "lastName", type: "text"},
    {label: "Email", id: "email", type: "email"},
    {label: "Password", id: "password", type: "password"},
    {label: "Confirm Password", id: "confirmPassword", type: "password"}
  ];
  
  // write code here

  const signUp = (event: FormEvent) => {
    event.preventDefault();
    
    // write function code here
  }

  return (<form onSubmit={signUp}>
    <h1>Sign up</h1>
    {/* create components here */}
  </form>)
}

export default SignUp