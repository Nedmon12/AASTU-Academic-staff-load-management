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

const activities = {
    id: 'activities',
    title: 'Activities',
    type: 'group',
    children: [
        {
            id: 'util-typography',
            title: 'Staff Management',
            type: 'item',
            url: '/books',
            icon: icons.IconUser,
            breadcrumbs: false
        },
        {
            id: 'activities-course-management',
            title: 'Course Management',
            type: 'item',
            url: '/utils/util-color',
            icon: icons.IconUser,
            breadcrumbs: false
        },
        {
            id: 'activities-research-management',
            title: 'Research Management',
            type: 'item',
            url: '/utils/util-shadow',
            icon: icons.IconUser,
            breadcrumbs: false
        },
        {
            id: 'activities-batch-management',
            title: 'Batch Management',
            type: 'item',
            url: '/utils/util-shadow',
            icon: icons.IconUser,
            breadcrumbs: false
        },
        {
            id: 'activities-course-assignment',
            title: 'Course Assignment',
            type: 'item',
            url: '/utils/util-shadow',
            icon: icons.IconUser,
            breadcrumbs: false
        },
    ]
};

export default activities;
