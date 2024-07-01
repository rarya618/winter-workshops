const SignIn = () => {
  let formInputs = [
    {label: "Email", id: "email", type: "email"},
    {label: "Password", id: "password", type: "password"}
  ];

  return (<>
    <h1>Sign in</h1>
    {formInputs.map(formInput => {
      return (<div>
        <label>{formInput.label}</label>
        <input id={formInput.id} type={formInput.type}/>
      </div>)
    })}
  </>)
}

export default SignIn