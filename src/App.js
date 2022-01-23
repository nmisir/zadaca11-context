import React from "react";
import { FirstComponent } from "./components/FirstComponent";
import { MyContext } from "./components/MyContext";
import { SecoundComponent } from "./components/SecoundComponent";
import { ThirdComponent } from "./components/ThirdComponent";

export default function App() {
    return (
      <>
        <MyContext.Provider value={'Test broj 1'}>
            <FirstComponent />
            <SecoundComponent />
            <ThirdComponent />
        </MyContext.Provider>
      </>
    );
 }
