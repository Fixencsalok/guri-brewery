import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 py-4 mt-10">
      <div className="container mx-auto text-center text-sm">
        {/* copyright szöveg */}
        &copy; {new Date().getFullYear()} Guri Sörfőzde. Minden jog fenntartva.
      </div>
    </footer>
  );
};

export default Footer;
