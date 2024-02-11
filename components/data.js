import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Highlight your benefits",
  desc: "",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Timely Delivery",
      desc: "We consistently meet delivery deadlines.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Understand your customers",
      desc: "We manufacture our products according to the customer's need.",
      icon: <FaceSmileIcon />,
    },
    
    {
      title: "Product Improvement",
      desc: "We consistently improve our product.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "",
  desc: "",
  bullets: [
    // {
    //   title: "Mobile Responsive Template",
    //   desc: "Nextly is designed as a mobile first responsive template.",
    //   icon: <DevicePhoneMobileIcon />,
    // },
    // {
    //   title: "Powered by Next.js & TailwindCSS",
    //   desc: "This template is powered by latest technologies and tools.",
    //   icon: <AdjustmentsHorizontalIcon />,
    // },
    // {
    //   title: "Dark & Light Mode",
    //   desc: "Nextly comes with a zero-config light & dark mode. ",
    //   icon: <SunIcon />,
    // },
  ],
};


export {benefitOne, benefitTwo};
