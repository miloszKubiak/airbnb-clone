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

export const perksIcons: TPerks[] = [
  {
    title: "wifi",
    icon: <FaWifi />,
  },
  {
    title: "tv",
    icon: <CgScreen />,
  },
  {
    title: "kitchen",
    icon: <TbToolsKitchen2 />,
  },
  {
    title: "parking",
    icon: <FaParking />,
  },
  {
    title: "entrance",
    icon: <BsDoorClosed />,
  },
  {
    title: "pets",
    icon: <MdPets />,
  },
];
