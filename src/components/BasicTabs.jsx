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
          <Tab label="Customization" {...a11yProps(1)} />
          <Tab label="Team Dedication" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        With years of industry experience, our team possesses a deep understanding of the email marketing landscape.
        <br />
        <Button variant="text">
          Learn More <ArrowRightAltIcon />
        </Button>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        We adapt our strategies to <span className=" text-green-500">your</span> buisness needs ensuring email-marketing success.
        <br />
        <Button variant="text">
          Learn More <ArrowRightAltIcon />
        </Button>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        We at LoopiEmail are dedicated to the growth and marketing of your buisness through our engaging and attractive emails.
        <br />
        <Button variant="text">
          Learn More <ArrowRightAltIcon />
        </Button>
      </CustomTabPanel>
    </Box>
  );
}
