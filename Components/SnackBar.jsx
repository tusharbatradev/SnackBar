import { useEffect } from "react";

function SnackBar({
  open,
  setOpen,
  height,
  width,
  message,
  variant,
  direction,
  autoHideDuration,
}) {
  let bgColor = "";

  if (variant === "success") {
    bgColor = "#43a047";
  } else if (variant === "error") {
    bgColor = "red";
  } else {
    bgColor = "#323232"
  }

  let directionStyle = {
    position: "fixed",
    zIndex: 1000,
  };

  if (direction === "top-left") {
    directionStyle.top = "10px";
    directionStyle.left = "10px";
  } else if (direction === "top-center") {
    directionStyle.top = "10px";
    directionStyle.left = "50%";
    directionStyle.transform = "translateX(-50%)";
  } else if (direction === "top-right") {
    directionStyle.top = "10px";
    directionStyle.right = "10px";
  } else if (direction === "bottom-left") {
    directionStyle.bottom = "10px";
    directionStyle.left = "10px";
  } else if (direction === "bottom-center") {
    directionStyle.bottom = "10px";
    directionStyle.left = "50%";
    directionStyle.transform = "translateX(-50%)";
  } else if (direction === "bottom-right") {
    directionStyle.bottom = "10px";
    directionStyle.right = "10px";
  }

  useEffect(() => {
    if (open == true) {
      setTimeout(() => {
        setOpen(false);
      }, autoHideDuration);
    }
  }, [open]);

  return (
    open && (
      <div
        style={{
          height: height,
          width: width,
          padding: "8px",
          backgroundColor: bgColor,
          color: "white",
          display: "flex",
          alignItems: "center",
          borderRadius: "8px",
          ...directionStyle,
        }}
      >
        <p style={{fontFamily : 'Montserrat', fontWeight : 500}} >{message}</p>
      </div>
    )
  );
}

export default SnackBar;
