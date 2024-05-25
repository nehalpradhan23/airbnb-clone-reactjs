import { useContext, useState } from "react";
import { UserContext } from "../UserContext.jsx";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";
import PlacesPage from "./PlacesPage.jsx";
import AccountNav from "../AccountNav.jsx";

export default function ProfilePage() {
  const [redirect, setRedirect] = useState(null);
  let { subpage } = useParams();
  const { ready, user, setUser } = useContext(UserContext);

  if (subpage === undefined) {
    subpage = "profile";
  }

  async function logout() {
    await axios.post("/logout");
    setRedirect("/");
    setUser(null);
  }

  if (!ready) {
    return "Loading";
  }
  //  check if data is fetched and user is logged in
  if (ready && !user && !redirect) {
    return <Navigate to={"/login"} />;
  }

  // goto homepage after successful logout
  if (redirect) {
    return <Navigate to={redirect} />;
  }

  return (
    <div>
      <AccountNav />
      {/* my profile page */}
      {subpage === "profile" && (
        <div className="text-center max-w-xl mx-auto">
          Logged in as {user.name} ({user.email})<br />
          <button
            onClick={logout}
            className="primary max-w-sm mt-2 hover:bg-opacity-80"
          >
            Logout
          </button>
        </div>
      )}
      {/* my accomodations page */}
      {subpage === "places" && <PlacesPage />}
    </div>
  );
}
