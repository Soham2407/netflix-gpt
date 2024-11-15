import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "./features/userAuth/userAuthSlice";
import LoginPage from "./routes/LoginPage";
import RootLayout from "./routes/RootLayout";
import Browse from "./components/Browse";
import { auth } from "./utils/firebase";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        // if user sign in or sign up then dispatch action
        dispatch(addUser({ uid, email, displayName }));
      } else {
        // User is signed out the dispatch action
        dispatch(removeUser());
      }
    });
  }, []);

  const router = createBrowserRouter([
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/browse",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Browse />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
