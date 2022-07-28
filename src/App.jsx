import { useState, useEffect } from "react";
import AddMessage from "./components/AddMessage";
import FriendCardList from "./components/FriendCardList";
import MessageCardList from "./components/MessageCardList";
import NavBar from "./components/NavBar";
import Splashscreen from "./components/Splashscreen";
import "./App.css";

function App() {
  const [isRenderedList, setRenderedList] = useState(false);
  const [isSplashscreenVisible, setSplashscreenVisibility] = useState(true);

  useEffect(() => {
    if(localStorage.getItem('username')) {
      setSplashscreenVisibility(false);
    }
  }, [])


  return (
    <div className="App">
      {isSplashscreenVisible ? 
        <Splashscreen onHandleClick={setSplashscreenVisibility} />
       : 
        <>
          <NavBar />
          <main className="App__main">
            <div className="App__friends">
              <h3>Lista degli amici</h3>
              <FriendCardList />
            </div>
            <div className="App_messages">
              <AddMessage
                isRenderedList={isRenderedList}
                onAddButton={setRenderedList}
              />
              <MessageCardList
                isRenderedList={isRenderedList}
                setRenderedList={setRenderedList}
              />
            </div>
          </main>
        </>
      }
    </div>
  );
}
export default App;
