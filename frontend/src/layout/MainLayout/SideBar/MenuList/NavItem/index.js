import PropTypes from 'prop-types';
import { forwardRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Chip, Icon, ListItemButton, ListItemIcon, ListItemText, Typography, useMediaQuery } from '@mui/material';

// project imports
import { MENU_OPEN, SET_MENU } from '../../../../../actions';

// assets
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

// ==============================|| SIDEBAR MENU LIST ITEMS ||============================== //

const NavItem = ({ item, level, sideBarStatus }) => {
    console.log('INSIDE NAVITEM: ', sideBarStatus)
    const theme = useTheme();
    // const dispatch = useDispatch();
    // const customization = useSelector((state) => state.customization);
    const matchesSM = useMediaQuery(theme.breakpoints.down('lg'));

    const Icon = item.icon;
    const itemIcon = item?.icon ? (
        <Icon stroke={1.5} size="1.3rem" />
    ) : (
        <FiberManualRecordIcon
            sx={{
                // width: customization.isOpen.findIndex((id) => id === item?.id) > -1 ? 8 : 6,
                // height: customization.isOpen.findIndex((id) => id === item?.id) > -1 ? 8 : 6
            }}
            fontSize={level > 0 ? 'inherit' : 'medium'}
        />
    );

    let itemTarget = '_self';
    if (item.target) {
        itemTarget = '_blank';
    }

    let listItemProps = {
        component: forwardRef((props, ref) => <Link ref={ref} {...props} to={item.url} target={itemTarget} />)
    };
    // if (item?.external) {
    //     listItemProps = { component: 'a', href: item.url, target: itemTarget };
    // }

    // const itemHandler = (id) => {
    //     dispatch({ type: MENU_OPEN, id });
    //     if (matchesSM) dispatch({ type: SET_MENU, opened: false });
    // };

    // // active menu item on page load
    // useEffect(() => {
    //     const currentIndex = document.location.pathname
    //         .toString()
    //         .split('/')
    //         .findIndex((id) => id === item.id);
    //     if (currentIndex > -1) {
    //         dispatch({ type: MENU_OPEN, id: item.id });
    //     }
    //     // eslint-disable-next-line
    // }, []);
    { console.log('inside navitem outside listitembutton') }

    return (
        <ListItemButton
            href={item.url}
            // {...listItemProps}
            sx={{
                borderRadius: `10px`,
                paddingLeft: sideBarStatus ? '' : 1,
                '&:hover': {
                    background: 'rgba(0,28,219,0.13)',
                }
                // mb: 0.5,
                // alignItems: 'flex-start',
                // backgroundColor: level > 1 ? 'transparent !important' : 'inherit',
                // py: level > 1 ? 1 : 1.25,
                // pl: `${level * 24}px`
            }
            }
        // selected={customization.isOpen.findIndex((id) => id === item.id) > -1}
        // onClick={() => itemHandler(item.id)}
        >
            {/* <Link to={item.url} target={itemTarget} >fff</Link> */}
            {console.log('inside navitem listitembutton')}
            <ListItemIcon sx={{ my: 'auto', minWidth: !item?.icon ? 18 : 36 }}>{itemIcon}</ListItemIcon>
            <ListItemText
                primary={
                    // <Typography variant={customization.isOpen.findIndex((id) => id === item.id) > -1 ? 'h5' : 'body1'} color="inherit">
                    <Typography variant="span" sx={{ color: 'rgba(60,69,132,1)', fontSize: 15 }}>
                        {sideBarStatus ? item.title : ''}
                    </Typography>
                }
            // secondary={
            //     // item.caption && (
            //     //     // <Typography variant="caption" sx={{ ...theme.typography.subMenuCaption }} display="block" gutterBottom>
            //     //     //     {item.caption}caaa
            //     //     // </Typography>
            //     // )
            // }
            />
            {/* {item.chip && (
                <Chip
                    color={item.chip.color}
                    variant={item.chip.variant}
                    size={item.chip.size}
                    label={item.chip.label}
                    avatar={item.chip.avatar && <Avatar>{item.chip.avatar}</Avatar>}
                />
            )} */}
        </ListItemButton >
    );
};

NavItem.propTypes = {
    item: PropTypes.object,
    level: PropTypes.number
};

export default NavItem;
