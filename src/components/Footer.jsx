import React from "react";

//to show a copyright message in a <p> with a dynamically updated year.
function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer>
      <p>Copyright ⓒ{year}</p>
    </footer>
  );
}

export default Footer;
