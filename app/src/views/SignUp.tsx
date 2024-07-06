import { FormEvent } from "react";
import { FormInput, GenerateFormElements } from "./SignIn";

const SignUp = () => {
  let formInputs: FormInput[] = [
    {label: "Email", id: "email", type: "email"},
    {label: "Password", id: "password", type: "password"}
  ];

  const signUp = (event: FormEvent) => {
    event.preventDefault();

    // @ts-ignore
    const elementsArray = [...event.target.elements];

    const data = elementsArray.reduce((acc, element) => {
      if (element.id) {
        acc[element.id] = element.value;
      }

      return acc;
    }, {});

    try {
      if (data.email === '') throw("Please enter an email")
      if (data.password === '') throw("Please enter a password")
      if (data.password.length < 8) throw("Your password should be at least 8 characters long")
    }
    catch (error) {
      alert(error);
    }

  }

  return (<form onSubmit={signUp}>
    <h1>Sign up</h1>
    {GenerateFormElements(formInputs)}
    <button>Submit</button>
  </form>)
}

export default SignUp