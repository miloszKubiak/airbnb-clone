import {
  BiGlasses,
  BsDoorClosed,
  FaWater,
  GiDesert,
  GiGreenhouse,
  GiPalmTree,
  GiRiver,
  MdMeetingRoom,
  MdOutlineHouse,
  TbBuildingCastle,
  TbMountain,
} from "react-icons/all";

export const categories = [
  {
    id: 1,
    name: "houses on the water",
    icon: <FaWater />,
  },
  {
    id: 2,
    name: "amazing views",
    icon: <BiGlasses />,
  },
  {
    id: 3,
    name: "private rooms",
    icon: <MdMeetingRoom />,
  },
  {
    id: 4,
    name: "small houses",
    icon: <MdOutlineHouse />,
  },
  {
    id: 5,
    name: "castles",
    icon: <TbBuildingCastle />,
  },
  {
    id: 6,
    name: "cottages in mountains",
    icon: <TbMountain />,
  },
  {
    id: 7,
    name: "in the tropics",
    icon: <GiPalmTree />,
  },
  {
    id: 8,
    name: "agritourism",
    icon: <GiGreenhouse />,
  },
  {
    id: 9,
    name: "in the desert",
    icon: <GiDesert />,
  },
  {
    id: 10,
    name: "at the lake",
    icon: <GiRiver />,
  },
];
