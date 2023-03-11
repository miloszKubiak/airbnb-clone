import {
  BsDoorClosed,
  CgScreen,
  FaParking,
  FaWifi,
  MdPets,
  TbToolsKitchen2,
} from "react-icons/all";

type TPerks = {
  title: string;
  icon: JSX.Element;
};

export const perks: TPerks[] = [
  {
    title: "Wifi",
    icon: <FaWifi />,
  },
  {
    title: "TV",
    icon: <CgScreen />,
  },
  {
    title: "Kitchen",
    icon: <TbToolsKitchen2 />,
  },
  {
    title: "Free parking spot",
    icon: <FaParking />,
  },
  {
    title: "Private entrance",
    icon: <BsDoorClosed />,
  },
  {
    title: "Pets",
    icon: <MdPets />,
  },
];
