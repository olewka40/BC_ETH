import React, { memo } from "react";
import { AddProduct } from "./AddProduct";
import { BuyProduct } from "./BuyProduct";
import PropTypes from "prop-types";

import { Tabs, Tab } from "@material-ui/core";
import SwipeableViews from "react-swipeable-views";
const Main = memo(() => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  return (
    <>
      <Tabs value={value} onChange={handleChange} variant="fullWidth">
        <Tab label="AddProduct" />
        <Tab label="BuyProduct" />
      </Tabs>
      <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
        <TabPanel value={value} index={0}>
          <AddProduct />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <BuyProduct />
        </TabPanel>
      </SwipeableViews>
    </>
  );
});

export default Main;

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
