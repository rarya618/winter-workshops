import { FormEvent } from "react"

export type FormInput = {
  label: string, 
  id: string, 
  type: string
}

export const GenerateFormElements = (formInputs: FormInput[]) => {
  // write element generation code here
  return
}

const SignIn = () => {
  let formInputs = [
    {label: "Email", id: "email", type: "email"},
    {label: "Password", id: "password", type: "password"}
  ];

  // write code here

  const signIn = (event: FormEvent) => {
    event.preventDefault();
    
    // write function code here
  }

  return (<form onSubmit={signIn}>
    <h1 className="text-center">Sign in</h1>
    {/* create components here */}
  </form>)
}

export default SignIn