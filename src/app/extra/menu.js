export const sidebar = function () {
    return [
        {
            name: 'Course',
            icon: 'fas fa-cogs',
            route: 'lsm.list',
            showChildren: false,
            hasChildren: true,
            menus: [
                {
                    title: 'Course',
                    icon: 'fas fa-file-contract',
                    route: 'lsm.list',
                    isActive: true,
                },
            ],
        },

    ]
}
