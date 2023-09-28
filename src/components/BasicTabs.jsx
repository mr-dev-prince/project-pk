import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Experience" {...a11yProps(0)} />
          <Tab label="flexibility" {...a11yProps(1)} />
          <Tab label="Results" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
        architecto, suscipit magni, consequatur temporibus quisquam molestias
        placeat quaerat eius aliquam, natus quo dolores reprehenderit?
        Voluptates.
        <br />
        <Button variant="text">
          Learn More <ArrowRightAltIcon />
        </Button>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, debitis
        labore. Quam, dolor fugit? Eaque placeat odit neque quis corporis
        doloribus necessitatibus illum quaerat quos totam autem, saepe, laborum
        doloremque magnam eligendi vero sapiente nesciunt!
        <br />
        <Button variant="text">
          Learn More <ArrowRightAltIcon />
        </Button>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum hic
        ipsum quas voluptatibus! Quam, iste! Eaque tempore maiores, reiciendis
        similique nisi iste rem vel maxime amet magnam perferendis praesentium.
        <br />
        <Button variant="text">
          Learn More <ArrowRightAltIcon />
        </Button>
      </CustomTabPanel>
    </Box>
  );
}
