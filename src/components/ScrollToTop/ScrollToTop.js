import React, { useState } from "react";
import "./ScrollToTop.scss";
import { BsChevronDoubleUp } from "react-icons/bs";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  window.addEventListener("scroll", () => {
    window.pageYOffset > 100 ? setVisible(true) : setVisible(false);
  });
  return (
    <div className="scroll">
      <a href="#" className={`${visible ? "block" : "none"}`}>
        <BsChevronDoubleUp />
      </a>
    </div>
  );
}
