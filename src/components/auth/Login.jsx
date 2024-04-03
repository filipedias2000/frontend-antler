import { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import { doSignInWithEmailAndPassword } from "../../firebase/auth";
import { useAuth } from "../../context/authContext/index";

function login() {
  const { userLoggedIn } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      try {
        await doSignInWithEmailAndPassword(email, password);
      } catch (error) {
        let message = "";
        switch (error.code) {
          case "auth/user-not-found":
            message = "User not found. Please check your email.";
            break;
          case "auth/wrong-password":
            message = "Incorrect password. Please try again.";
            break;
          case "auth/invalid-email":
            message = "Invalid email. Please check and try again.";
            break;
          default:
            message = "An error occurred. Please try again later.";
        }
        setErrorMessage(message);
      }
      setIsSigningIn(false);
    }
  };

  return (
    <div>
      {userLoggedIn && <Navigate to={"/"} replace={true} />}

      <main className="w-full h-screen flex self-center place-content-center place-items-center">
        <div className="w-96 text-gray-600 space-y-5 p-4 shadow-xl border rounded-xl">
          <div className="text-center">
            <div className="mt-2">
              <h3 className="text-gray-800 text-xl font-semibold sm:text-2xl">
                Welcome Back
              </h3>
            </div>
            <form onSubmit={onSubmit} className="space-y-5">
              <div>
                <label className="text-sm text-gray-600 font-bold">
                  Email:
                </label>
                <input
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
                />
              </div>
              <div>
                <label className="text-sm text-gray-600 font-bold">
                  Password
                </label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
                />
              </div>
              {errorMessage && (
                <span className="text-red-600 font-bold">{errorMessage}</span>
              )}
              <button
                type="submit"
                disabled={isSigningIn}
                className={`w-full px-4 py-2 text-white font-medium rounded-lg ${
                  isSigningIn
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-teal-600 hover:bg-teal-900 hover:shadow-xl transition duration-300"
                }`}
              >
                {isSigningIn ? "Signing In..." : "Sign In"}
              </button>
            </form>
            <p className="text-center text-sm p-2">
              Don't have an account?{" "}
              <Link to={"/signup"} className="hover:underline font-bold">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default login;
