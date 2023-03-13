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

// const Div = styled.div`
//   max-width: 100vw;
//   .none {
//     opacity: 0;
//     visibility: hidden;
//   }
//   a {
//     position: fixed;
//     bottom: 40px;
//     right: 40px;
//     background-color: #2d69fd;
//     padding: 1rem;
//     border-radius: 100%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     transition: 0.4s ease-in-out;
//     z-index: 25;
//     svg {
//       color: white;
//       font-size: 1.3rem;
//     }
//     @media screen and (min-width: 280px) and (max-width: 1080px) {
//       left: 75vw;
//       right: initial;
//     }
//   }
// `;
