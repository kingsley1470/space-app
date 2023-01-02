import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Locations from "./Components/MainPage/Locations";
import Community from "./Components/MainPage/Community";
import Signin from "./Components/MainPage/Signin";
import SignUp from "./Components/MainPage/SignUp";
import Home from "./Components/MainPage/Home/Home";
import MyProfileLeftSide from "./Components/MyProfileLeftSide/MyProfileLeftSide";
import MyProfile from "./Components/MyProfile/MyProfile";
import Space from "./Components/MyProfile/Space/Space";
import Profile from "./Components/ProfilePage/Profile";

function App() {
  return (
    <div>
<BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/community" element={<Community />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/myprofileftside" element={<MyProfileLeftSide />} />
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/space" element={<Space />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
    <Footer />
    </div>
  );
}
export default App;
