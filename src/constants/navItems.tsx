import { HiOutlineLibrary } from 'react-icons/hi';
import { AiFillSetting } from 'react-icons/ai';
import { BiTestTube } from 'react-icons/bi';
import { MdHouse } from 'react-icons/md';

export const NavItems = [
  {
    menuId: 14,
    menuCaption: 'Hrms',
    icon: <HiOutlineLibrary />,
  },
  {
    menuId: 1,
    menuCaption: 'Parameter Setup',
    icon: <AiFillSetting />,
    children: [
      {
        menuId: 2,
        menuCaption: 'System Parameter',
        children: [
          {
            menuId: 4,
            menuCaption: 'System start',
          },
          {
            menuId: 5,
            menuCaption: 'System stop',
          },
        ],
      },
      { menuId: 3, menuCaption: 'User Parameter' },
    ],
  },
  { menuId: 13, menuCaption: 'Test', icon: <BiTestTube /> },
  {
    menuId: 6,
    menuCaption: 'Company Setup',
    icon: <MdHouse />,
    children: [
      { menuId: 7, menuCaption: 'Company info' },
      {
        menuId: 8,
        menuCaption: 'Branch',
      },
      { menuId: 9, menuCaption: 'Bussiness Unit' },
      {
        menuId: 10,
        menuCaption: 'Division',
      },
      { menuId: 11, menuCaption: 'Department' },
      {
        menuId: 12,
        menuCaption: 'Section',
      },
    ],
  },
];
