// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill, IconUser } from '@tabler/icons';

// constant
const icons = {
    IconTypography,
    IconPalette,
    IconShadow,
    IconWindmill,
    IconUser
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const reports = {
    id: 'reports',
    title: 'Reports',
    type: 'group',
    children: [
        {
            id: 'report-staff',
            title: 'Staff',
            type: 'item',
            url: '/utils/util-typography',
            icon: icons.IconUser,
            breadcrumbs: false
        },
        {
            id: 'report-course',
            title: 'Course',
            type: 'item',
            url: '/utils/util-color',
            icon: icons.IconUser,
            breadcrumbs: false
        },
        {
            id: 'report-research',
            title: 'Research',
            type: 'item',
            url: '/utils/util-shadow',
            icon: icons.IconUser,
            breadcrumbs: false
        },
    ]
};

export default reports;
