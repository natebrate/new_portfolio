import React from "react";

import {positions, Provider} from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import SplashScreen from "./Pages/SplashPage/splashscreen.component";
import HomeScreen from "./Pages/Homepage/homepage.component";


const options = {
    timeout: 3500,
    position: positions.TOP_CENTER
};

const App  = () => {
    return (
        <div style={{ height: "100%" }}>
            <Provider template={AlertTemplate} {...options}>
                    <main>
                        <HomeScreen/>
                    </main>
            </Provider>
        </div>
    );
}

export default App;

