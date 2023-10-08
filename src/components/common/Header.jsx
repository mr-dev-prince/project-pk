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
import logo from "../common/logo/loopiemail1.png"
import {AiOutlineMenuUnfold} from "react-icons/ai"


// header - #333333
// primary = #7fc37e
//secondary - #7fc37e
// accent - #fefee2

const Header = () => {
  const [state, setState] = React.useState({
    left: false,
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
    <div className=" fixed h-12 md:pl-20 md:h-20 w-full bg-[#333333] text-white flex justify-between z-50 p-8 md:p-4  items-center">
      <img className=" h-14" src={logo} alt="" />
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
      <div className=" w-48 flex gap-8 md:hidden ">
        <HashLink to={"#Contact"}>
          <button className=" text-black h-9 rounded-full w-28 bg-[#fefee2]" >
            Get Started
          </button>
        </HashLink>
        <button onClick={() => toggleDrawer()}>
          <div>
            {["left"].map((anchor) => (
              <React.Fragment key={anchor}>
                <button className=" text-4xl" onClick={toggleDrawer(anchor, true)}>
                  <AiOutlineMenuUnfold/>
                </button>
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
    </div>
  );
};

export default Header;
