// To create new react project run this command in VS code terminal "npx create-react-app projectName"
// then run this "cd my-app"
// then run this "npm start"

// For using Bootstrap check the procedure in App2

import Login from "./Login";
import AboutUs from "./AboutUs";
import Contactus from "./Contactus";
import App2 from "../Second/App2"

function App1()
 {
  return (
    <div>
    <Contactus></Contactus>
    <AboutUs></AboutUs>
    <Login></Login>
    </div>
  );
}

export default App1;
