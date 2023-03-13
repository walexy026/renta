import React from "react";
import Collapsible from "react-collapsible";
import { BsChevronDown } from "react-icons/bs";
import "./Faq.scss";
export default function Faq() {
  return (
    <div className="faqs">
      <h2>FAQs</h2>
      <p>
        You’ve got questions, we have answers. You can contact us if you have
        more questions.
      </p>

      <div className="faq">
        <div>
          <div className="wrapper">
            <Collapsible
              trigger="What is Renta ?"
              triggerElementProps={<BsChevronDown />}
              triggerTagName="div"
              triggerClassName="CustomTriggerCSS"
            >
              <BsChevronDown className="che" />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut nam
                quas quibusdam tenetur dolores animi eligendi nihil cum, quam
                sint.
              </p>
            </Collapsible>
          </div>
          <div className="wrapper2">
            <Collapsible trigger="What is Renta ?" triggerTagName="div">
              <BsChevronDown className="che2" />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut nam
                quas quibusdam tenetur dolores animi eligendi nihil cum, quam
                sint.
              </p>
            </Collapsible>
          </div>
          <div className="wrapper3">
            <Collapsible trigger="What is Renta ?" triggerTagName="div">
              <BsChevronDown className="che3" />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut nam
                quas quibusdam tenetur dolores animi eligendi nihil cum, quam
                sint.
              </p>
            </Collapsible>
          </div>
        </div>
        <div>
          <div>
            <div className="wrapper4">
              <Collapsible trigger="What is Renta ? " triggerTagName="div">
                <BsChevronDown className="che4" />
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut
                  nam quas quibusdam tenetur dolores animi eligendi nihil cum,
                  quam sint.
                </p>
              </Collapsible>
            </div>
            <div className="wrapper5">
              <Collapsible trigger="What is Renta ? " triggerTagName="div">
                <BsChevronDown className="che5" />
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut
                  nam quas quibusdam tenetur dolores animi eligendi nihil cum,
                  quam sint.
                </p>
              </Collapsible>
            </div>
            <div className="wrapper6">
              <Collapsible trigger="What is Renta ? " triggerTagName="div">
                <BsChevronDown className="che6" />
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut
                  nam quas quibusdam tenetur dolores animi eligendi nihil cum,
                  quam sint.
                </p>
              </Collapsible>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
