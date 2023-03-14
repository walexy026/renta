import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.scss";
import "./HeroTab.scss";
import { CiSearch } from "react-icons/ci";

const HeroTab = () => {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>For sale</Tab>
          <Tab>To rent</Tab>
        </TabList>

        <TabPanel>
          <div>
            <form action="">
              <label htmlFor="">Search city or state</label>
              <input
                type="text"
                name=""
                id=""
                placeholder="eg. Lekki or Enugu"
              />
              <button>
                {" "}
                <CiSearch fontSize="1rem" /> Search
              </button>
            </form>
          </div>
        </TabPanel>
        <TabPanel>
          <div>
            <form action="">
              <label htmlFor="">Search city or state</label>
              <input
                type="text"
                name=""
                id=""
                placeholder="eg. Lekki or Enugu"
              />
              <button>
                {" "}
                <CiSearch /> Search
              </button>
            </form>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default HeroTab;
