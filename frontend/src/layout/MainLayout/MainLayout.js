import React, { useState } from 'react'
import HeaderMain from "./Header/HeaderMain";
import { AppBar, Box, CssBaseline, Toolbar } from "@mui/material";
import Sidebar from "./SideBar/SideBarMain";

import MUIDataTable from "mui-datatables";

import PropTypes from 'prop-types';

import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const columns = [
    {
     name: "name",
     label: "Name",
     options: {
      filter: true,
      sort: true,
     }
    },
    {
     name: "company",
     label: "Company",
     options: {
      filter: true,
      sort: false,
     }
    },
    {
     name: "city",
     label: "City",
     options: {
      filter: true,
      sort: false,
     }
    },
    {
     name: "state",
     label: "State",
     options: {
      filter: true,
      sort: false,
     }
    },
   ];
   
   const data = [
    { name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY" },
    { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT" },
    { name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL" },
    { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" },
    { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" },
    { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" },
    { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" },
    { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" },
    { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" },
    { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" },
    { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" },
    { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" },
    { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" },
    { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" },
    { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" },
    { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" },
    { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" },
    { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" },
    { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" },
    { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" },
    { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" },
    { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" },
    { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" },
   ];
   
   const options = {
     filterType: 'checkbox',
   };

function TabPanel(props) {
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

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}



const MainLayout = () => {
    const [sideBar, setSideBar] = useState(true)
    const sideBarStatusHandler = sideBarStatus => {
        setSideBar(sideBarStatus)
    }
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            {/* header */}
            <AppBar
                enableColorOnDark
                position="fixed"
                color="inherit"
                elevation={0}
                sx={{
                    margin: "auto"
                }}
            >
                <HeaderMain />
                {/* =========== MAIN WINDOW ========== */}
                <Box component="main"
                    sx={{
                        flexGrow: 1, p: 3,
                        marginLeft: sideBar ? 32 : 7,
                        marginTop: -4,
                        paddingBottom: 10,
                        transition: 'margin 0.2 ease'
                    }}
                >
                    {/* ============= BREADCRUMBS ============= */}
                    <Box sx={{ marginY: 2 }}>
                        <Breadcrumbs
                            separator={<NavigateNextIcon fontSize="small" />}
                            aria-label="breadcrumb"
                            sx={{
                                background: 'rgba(0,28,219,0.1)',
                                paddingY: 0.5,
                                paddingX: 2,
                                borderRadius: 1
                            }}
                        >
                            <Link underline="hover" color="inherit" href="/">
                                MUI
                            </Link>
                            <Link
                                underline="hover"
                                color="inherit"
                                href="/material-ui/getting-started/installation/"
                            >
                                Core
                            </Link>
                            <Typography color="text.primary">Breadcrumbs</Typography>
                        </Breadcrumbs>

                    </Box>
                    <Box sx={{
                        '*::-webkit-scrollbar': {
                            width: '0.4em',
                        },
                        '*::-webkit-scrollbar-track': {
                            '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
                        },
                        '*::-webkit-scrollbar-thumb': {
                            backgroundColor: 'rgba(0,0,0,.1)',
                        }
                    }}>
                        <div style={{
                            overflowY: 'scroll',
                            height: '83vh',

                        }}>
                            {/* <Typography paragraph>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                                enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                                imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
                                Convallis convallis tellus id interdum velit laoreet id donec ultrices.
                                Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                                adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
                                nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
                                leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
                                feugiat vivamus at augue. At augue eget arcu dictum varius duis at
                                consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
                                sapien faucibus et molestie ac.
                            </Typography>
                            <Typography paragraph>
                                Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
                                eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
                                neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
                                tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
                                sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
                                tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
                                gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
                                et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
                                tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
                                eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
                                posuere sollicitudin aliquam ultrices sagittis orci a.
                            </Typography>
                            <Typography paragraph>
                                Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
                                eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
                                neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
                                tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
                                sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
                                tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
                                gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
                                et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
                                tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
                                eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
                                posuere sollicitudin aliquam ultrices sagittis orci a.
                            </Typography>
                            <Typography paragraph>
                                Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
                                eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
                                neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
                                tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
                                sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
                                tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
                                gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
                                et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
                                tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
                                eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
                                posuere sollicitudin aliquam ultrices sagittis orci a.
                            </Typography>
                            <Typography paragraph>
                                Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
                                eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
                                neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
                                tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
                                sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
                                tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
                                gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
                                et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
                                tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
                                eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
                                posuere sollicitudin aliquam ultrices sagittis orci a.
                            </Typography> */}
                            {/* <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <Tabs value={'nahom'} aria-label="basic tabs example">
                                    <Tab label="Item One" 
                                    // {...a11yProps(0)}
                                     />
                                    <Tab label="Item Two" 
                                    // {...a11yProps(1)}
                                     />
                                    <Tab label="Item Three" 
                                    // {...a11yProps(2)} 
                                    />
                                </Tabs>
                            </Box> */}
                            {/* <TabPanel value={'nahom'} index={0}>
                                Item One
                            </TabPanel>
                            <TabPanel value={'nahom'} index={1}>
                                Item Two
                            </TabPanel>
                            <TabPanel value={'nahom'} index={2}>
                                Item Three
                            </TabPanel> */}



                            <Box sx={{ width: '100%' }}>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
                                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                        <Tab label="Item One" {...a11yProps(0)} />
                                        <Tab label="Item Two" {...a11yProps(1)} />
                                        <Tab label="Item Three" {...a11yProps(2)} />
                                    </Tabs>
                                </Box>
                                <TabPanel value={value} index={0}>
                                    <MUIDataTable
                                    sx={{padding: '0', boxShadow: '0'}}
                                        title={"Employee List"}
                                        data={data}
                                        columns={columns}
                                        options={options}
                                        onRowClick={()=>console.log('click')}
                                    />
                                </TabPanel>
                                <TabPanel value={value} index={1}>
                                    Item Two
                                </TabPanel>
                                <TabPanel value={value} index={2}>
                                    Item Three
                                </TabPanel>
                            </Box>
                        </div>
                    </Box>
                </Box>
                <Sidebar sideBarStatus={sideBarStatusHandler} />
            </AppBar >
        </Box >
    )
}

export default MainLayout