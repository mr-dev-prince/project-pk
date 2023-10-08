import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import DescriptionIcon from "@mui/icons-material/Description";
import React from "react";
import { HashLink } from "react-router-hash-link";
import { Menu } from "lucide-react";

const Header = () => {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Home", "About", "Team", "Portfolio"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <HashLink to={`#${text}`}>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <HomeIcon /> : <DescriptionIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </HashLink>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Services", "Contact"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <HashLink to={`#${text}`}>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <HomeIcon /> : <DescriptionIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </HashLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <div className=" fixed h-12 w-full bg-[#1a76a4] text-white flex justify-between z-50 p-8 md:p-12 md:justify-around  items-center ">
      <p className=" text-2xl font-semibold tracking-wider">
        CircuitMinds Agency{" "}
      </p>
      <div className="gap-12 hidden md:flex font-semibold text-lg">
        <HashLink to={"#Home"}>Home</HashLink>
        <HashLink to={"#About"}>About</HashLink>
        <HashLink to={"#Services"}>Services</HashLink>
        <HashLink to={"#Team"}>Team</HashLink>
        <HashLink to={"#Portfolio"}>Portfolio</HashLink>
        <HashLink to={"#Contact"}>Contact Us</HashLink>
        <HashLink to={"#Contact"}>
          <button className=" h-8 w-28 bg-yellow-300 text-black rounded-xl">
            Get Started
          </button>
        </HashLink>
      </div>
      <button className=" md:hidden" onClick={() => toggleDrawer()}>
        <div>
          {["Menu"].map((anchor) => (
            <React.Fragment key={anchor}>
              <button onClick={toggleDrawer(anchor, true)}><Menu /></button>
              <SwipeableDrawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
                onOpen={toggleDrawer(anchor, true)}
              >
                {list(anchor)}
              </SwipeableDrawer>
            </React.Fragment>
          ))}
        </div>
      </button>
    </div>
  );
};

export default Header;
