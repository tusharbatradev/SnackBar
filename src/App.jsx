import { useState } from "react";
import SnackBar from "../Components/SnackBar";

function App() {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(true);
  }

  return (
    <div style={{ height: "100vh", display : 'flex', flexDirection : 'column',
      alignItems : 'center'
     }}>
      <p style={{
        fontSize : '22px',
        fontFamily : 'Montserrat'
      }}>
        The Snackbar component appears temporarily and floats above the UI to
        provide users with (non-critical) updates on an app's processes. The
        demo below, shows a basic Snackbar with a text
        element and two actions:
      </p>
      <button style={{ 
        height: "40px", 
        width : '200px', 
        fontSize : '20px',
        fontFamily : 'Montserrat',
        backgroundColor : '#0f0f0f',
        color : 'white',
        borderRadius : '8px',
        border : '0px' 
        }} onClick={handleClick}>
        Open SnackBar
      </button>
      <SnackBar
        height={"25px"}
        width={"200px"}
        message={"Error Message"}
        variant={"error"}
        open={open}
        setOpen={setOpen}
        direction={"bottom-left"}
        autoHideDuration={2000}
      />
    </div>
  );
}

export default App;
