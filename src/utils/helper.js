export const validate = (isSignIn, email, password, fullName) => {
  let errors = {};

  const emailRegEx = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
  const passwordRegEx =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  const fullNameRegEx = /^[a-zA-Z]+ [a-zA-Z]+$/;

  if (!email) {
    errors.email = "Email is required";
  } else if (!emailRegEx.test(email)) {
    errors.email = "Invalid Email Address";
  }

  if (!password) {
    errors.password = "Password is required";
  } else if (!passwordRegEx.test(password)) {
    errors.password = "Invalid Password";
  }

  if (!isSignIn) {
    if (!fullName) {
      errors.fullName = "Full Name is required";
    } else if (!fullNameRegEx.test(fullName)) {
      errors.fullName = "Invalid Full Name";
    }
  }

  return errors;
};

export const toastConfig = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  progress: undefined,
  theme: "colored",
};
