import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [

  {
    title: 'Project',
    icon: 'nb-compose',
    expanded: true,
    children: [

      {
        title: 'Create Project',
        icon: 'nb-arrow-thin-right',
        expanded: true,
        children: [
          {
            title: 'from Computer',
            link: '/pages/project/project-from-local',
            // icon: 'nb-layout-centre'

          },
          {
            title: 'from URL',
            link: '/pages/project/project-from-url',
            // icon: 'nb-cloudy'
          },
          {
            title: 'from Clipboard',
            link: '/pages/project/project-from-clipboard',
            // icon: 'nb-coffee-maker'
          },
          {
            title: 'from Database',
            link: '/pages/project/project-from-database',
            // icon: 'nb-checkmark-circle'
          },
          {
            title: 'from Google Data',
            link: '/pages/project/project-from-gdata',
            // icon: 'nb-grid-a-outline'
          },

        ]



      },

      {
        title: 'Open Project',
        link: '/pages/project/open-project',
        icon: 'nb-search'
      },
      {
        title: 'Import Project',
        link: '/pages/project/import-project',
        icon: 'nb-arrow-retweet'
      },
      
      
    ],
  },
  {

    title: 'Settings',
    icon: 'nb-gear',
    expanded: false,
    children: [
      {
        title: 'Language Settings',
        link: '/pages/settings/language',
      },
      {

        title: 'Manage Preferences',
        link: '/pages/settings/preferences'

      },

    ]

  },

];
