import { FormEvent } from "react"

const SignUp = () => {
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