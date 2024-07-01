import { FormEvent } from "react"

const SignIn = () => {
  // write code here

  const signIn = (event: FormEvent) => {
    event.preventDefault();
    
    // write function code here
  }

  return (<form onSubmit={signIn}>
    <h1>Sign in</h1>
    {/* create components here */}
  </form>)
}

export default SignIn