import {Link} from "react-router-dom"
import { AppBar, Box, Divider, Drawer, Grid, IconButton,  List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'
import React from 'react';


export default function Dashboard() {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
      });
    
      const toggleDrawer =
        (anchor = 'left', open) =>
        (event) => {
          if (
            event.type === 'keydown' &&
            (event.key === 'Tab' ||
              event.key === 'Shift')
          ) {
            return;
          }
    
          setState({ ...state, [anchor]: open });
        };

        const list = (anchor) => {
            const sectionOne = [
                {
                    name: 'Home',
                    link: '/Home',
                    key: "one",
                },               
            ]
            const sectionTwo = [
                {
                  name: "Idola Deus ~ The Creator",
                  link: '/TheCreator',
                  key: "two",
                },
                {
                  name: "Hanipaganda",
                  link: '/Hanipaganda',
                  key: "two",
                },
                {
                  name: "Like An Animal",
                  link: '/LikeAnAnimal',
                  key: "two",
                },
                {
                  name: "Step123",
                  link: '/Step123',
                  key: "two",
                },
                {
                  name: "Rock! Rock A Bye Baby",
                  link: '/RockAByeBaby',
                  key: "two",
                },
                {
                  name: "Every Day is a Good Day",
                  link: '/EveryDayIsAGoodDay',
                  key: "two",
                },
                {
                  name: "Wilderness Pegasus",
                  link: '/WildernessPegasus',
                  key: "two",
                },
                {
                  name: "Prayer Vessel",
                  link: '/PrayerVessel',
                  key: "two",
                },

            ]           

        return (
            <Box
              sx={{width: 250}}
              role="presentation"
              onClick={toggleDrawer(anchor, false)}
              onKeyDown={toggleDrawer(anchor, false)}
            >
              <List>
                {sectionOne.map((item, index) => (
                  <Link className="navigationLink" to={item.link} key={`sectionOne-${index}`}>
                    <ListItem>
                      <ListItemIcon>
                      </ListItemIcon>
                          <ListItemText primary={item.name} />
                    </ListItem>
                  </Link>
                ))}
              </List>
              <Divider />
              <List>
                <ListItem>
                  <Typography className="navigationText"> Song Translations </Typography>
                </ListItem>
                {sectionTwo.map((item, index) => (
                  <Link className="navigationLink" to={item.link} key={`sectionTwo-${index}`}>
                    <ListItem>
                      <ListItemText primary={item.name} />
                    </ListItem>
                  </Link>
                ))}
              </List>
              <Divider />
              <List>
                <ListItem>
                  <Typography className="navigationText"> Text Translations </Typography>
                </ListItem>
                {/* {sectionThree.map((item, index) => (
                  <Link className="navigationLink" to={item.link} key={`sectionTwo-${index}`}>
                    <ListItem>
                      <ListItemText primary={item.name} />
                    </ListItem>
                  </Link>
                ))} */}
              </List>
            </Box>
          )};
        

  return (
    <AppBar position="sticky" className="DashboardContainer">
        <Grid container item className="DashboardButtonHolder" justifyContent="space-between">
            <Toolbar variant="dense">
                <IconButton edge="start" onClick={toggleDrawer('left', true)}
                    color="inherit" 
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" color="inherit">
                    Translations
                </Typography>
            </Toolbar>
            <Drawer
            PaperProps={{classes: {root: "drawerClass"}}}
            anchor="left"
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
            >
                {list("left")}
            </Drawer>
        </Grid>
    </AppBar>
  );
}
