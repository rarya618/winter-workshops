import { FormEvent } from "react";
import { FormInput, GenerateFormElements } from "./SignIn";

const SignUp = () => {
  let formInputs: FormInput[] = [
    {label: "First Name", id: "firstName", type: "text"},
    {label: "Last Name", id: "lastName", type: "text"},
    {label: "Email", id: "email", type: "email"},
    {label: "Password", id: "password", type: "password"},
    {label: "Confirm Password", id: "confirmPassword", type: "password"}
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

    // error handling
    try {
      if (data.firstName === '') throw("Please enter your first name")
      if (data.lastName === '') throw("Please enter your last name")
      if (data.email === '') throw("Please enter an email")
      if (data.password === '') throw("Please enter a password")
      if (data.password.length < 8) throw("Your password should be at least 8 characters long")
      if (data.confirmPassword === '') throw("Please confirm your password")
      if (data.password !== data.confirmPassword) throw("Passwords do not match")
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