import * as LiaIcons from "react-icons/lia"
import { GoHomeFill } from 'react-icons/go'
import { GoPeople } from 'react-icons/go'
import { RiContactsBook2Fill , RiContactsBookFill} from 'react-icons/ri'
import { RiContactsBook2Line , RiContactsBookLine} from 'react-icons/ri'
import { BsFillPeopleFill } from "react-icons/bs";
import { BsClipboardCheck } from "react-icons/bs";
import { BsClipboardCheckFill } from "react-icons/bs";
import { TbCircleLetterJ } from 'react-icons/tb' /*letra j*/

export const NavBarData = [
  {title:'Lista NO-beneficiarios',
    path:'/table/no/beneficiarios',
    icon:<RiContactsBook2Fill/>,
    cName:'nav-text',
    access:['admin']
  },{
    title:'Lista Beneficiarios',
    path:'/credito/persona/natural',
    icon:<RiContactsBook2Line/>,
    cName:'nav-text',
    access:['admin']
  },
  {
    title: "Lista oficial Diiaria",
    path: "/terceros",
    icon: <BsClipboardCheck />,
    cName: "nav-text",
    access: ['admin']
  }
];