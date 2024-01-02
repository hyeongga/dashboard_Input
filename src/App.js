import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import { createContext } from "react";

// import Artist from "./pages/Artist";
// import Album from "./pages/Album";
// import RegisterArtist from "./pages/RegisterArtist";
// import RegisterAlbum from "./pages/RegisterAlbum";
// import Event from "./pages/Event";
// import RegisterEvent from "./pages/RegisterEvent";
// import EventTrigger from "./pages/EventTrigger";
// import PurchaseHistory from "./pages/PurchaseHistory";
import Login from "./pages/Login/Login";
import ArtistInformation from "./pages/AtristInromation/ArtistInformation";
import DashboardHome from "./pages/Dashboard/DashboardHome";
import SoundPackList from "./pages/Dashboard/SoundPackList";
import SuperFanList from "./pages/Dashboard/SuperFanList";
import DashboardLayout from "./components/Dashboard/DashboardLayout";
import SoundPackDetail from "./pages/Dashboard/SoundPackDetail";
import UploadArtist from "./pages/UploadInformation/ArtistInformation";
import UploadSoundPack from "./pages/UploadInformation/SoundPackInformation";
import UploadTrack from "./pages/UploadInformation/TrackInformation";
import UploadConnect from "./pages/UploadInformation/ConnectInformation";

export const AppContext = createContext();

function App() {
  const [fanNumber, setFanNumber] = useState(0);
  const [superFanList, setSuperFanList] = useState([]);
  const [soundPackList, setSoundPackList] = useState([]);
  const [superFanTop10, setSuperFanTop10] = useState([]);
  const [nickName, setNickName] = useState("");
  const [cookieEarning, setCookieEarning] = useState(0);
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div>
      <BrowserRouter>
        <AppContext.Provider
          value={{
            isLogin,
            setIsLogin,
            fanNumber,
            setFanNumber,
            nickName,
            setNickName,
            cookieEarning,
            setCookieEarning,
            superFanList,
            setSuperFanList,
            soundPackList,
            setSoundPackList,
            superFanTop10,
            setSuperFanTop10,
          }}
        >
          <Routes>
            <Route
              path={"/login"}
              element={<Login />}
              render={() => (isLogin ? <Link to="/" /> : <Login />)}
            ></Route>
            <Route
              path={"/ArtistInformation"}
              element={<DashboardLayout children={<ArtistInformation />} />}
            ></Route>
            <Route
              path={"/Upload/Artist"}
              element={<DashboardLayout children={<UploadArtist />} />}
            ></Route>
            <Route
              path={"/Upload/SoundPack"}
              element={<DashboardLayout children={<UploadSoundPack />} />}
            ></Route>
            <Route
              path={"/Upload/Track"}
              element={<DashboardLayout children={<UploadTrack />} />}
            ></Route>
            <Route
              path={"/Upload/Connect"}
              element={<DashboardLayout children={<UploadConnect />} />}
            ></Route>
            <Route
              path={"/dashboard"}
              element={
                <DashboardLayout
                  children={<DashboardHome />}
                  childrenLayout="home"
                />
              }
            ></Route>
            <Route
              path={"/dashboard/superfan"}
              element={<DashboardLayout children={<SuperFanList />} />}
            ></Route>
            <Route
              path={"/dashboard/soundpack"}
              element={<DashboardLayout children={<SoundPackList />} />}
            ></Route>
            <Route
              path={"/dashboard/soundpack/:id"}
              element={<DashboardLayout children={<SoundPackDetail />} />}
            ></Route>
            {/* <Route path={"/album"} element={<Album />}></Route>
            <Route path={"/album/create"} element={<RegisterAlbum />}></Route>
            <Route path={"/album/update"} element={<RegisterAlbum />}></Route>
            <Route
              path={"/album/history"}
              element={<PurchaseHistory />}
            ></Route>
            <Route path={"/artist"} element={<Artist />}></Route>
            <Route path={"/artist/create"} element={<RegisterArtist />}></Route>
            <Route path={"/artist/update"} element={<RegisterArtist />}></Route>
            <Route path={"/event"} element={<Event />}></Route>
            <Route path={"/event/create"} element={<RegisterEvent />}></Route>
            <Route path={"/event/update"} element={<RegisterEvent />}></Route>
            <Route path={"/event/trigger"} element={<EventTrigger />}></Route> */}
          </Routes>
        </AppContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
