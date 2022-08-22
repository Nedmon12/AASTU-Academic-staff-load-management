import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Divider, List, Typography } from '@mui/material';

// project imports
import NavItem from '../NavItem';
import NavCollapse from '../NavCollapse';

// ==============================|| SIDEBAR MENU LIST GROUP ||============================== //

const NavGroup = (props) => {
    console.log('in NAVGROUP: ', props.sideBarStatus)
    // const theme = useTheme();

    // menu list collapse & items
    const items = props.item.children?.map((menu) => {
        switch (menu.type) {
            case 'item':
                return <NavItem key={menu.id} item={menu} level={1} sideBarStatus={props.sideBarStatus} />;
            default:
                return (
                    <Typography key={menu.id} variant="h6" color="error" align="center">
                        Menu Items Error
                    </Typography>
                );
        }
    });

    return (
        <>
            <List
                sx={{ marginTop: '10px' }}
                subheader={
                    props.item.title && (
                        <Typography variant="span" sx={{
                            // ...theme.typography.menuCaption 
                            fontSize: '17px',
                            color: 'rgba(164,164,164,1)'
                        }} display="block" gutterBottom>
                            {props.sideBarStatus ? props.item.title : ''}
                            {props.item.caption && (
                                <Typography variant="caption" sx={{
                                    // ...theme.typography.subMenuCaption 
                                }} display="block" gutterBottom>
                                    {props.item.caption}
                                </Typography>
                            )}
                        </Typography>
                    )
                }
            >
                {items}
            </List>

            {/* group divider */}
            <Divider sx={{ mt: 0.25, mb: 1.25 }} />
        </>
    );
};

NavGroup.propTypes = {
    item: PropTypes.object
};

export default NavGroup;
