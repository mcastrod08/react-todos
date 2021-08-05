import React from "react";


function Footer(props) {
  let footerStyle = {
    textAlign: "center",
  };
  return (
    <div className="footer" style={footerStyle}>
      {props.text}  
    </div>
  );
}

export default Footer;