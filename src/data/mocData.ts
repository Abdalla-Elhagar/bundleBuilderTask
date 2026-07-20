import step1logo from "../assets/stepsLogos/logo1.png";
import step2logo from "../assets/stepsLogos/logo2.png";
import step3logo from "../assets/stepsLogos/logo3.png";
import step4logo from "../assets/stepsLogos/logo4.png";
import Product1Image from "../assets/productsImages/Wyze Cam v4.png";
import Product2Image from "../assets/productsImages/Wyze Cam Pan v3.png";
import Product3Image from "../assets/productsImages/Wyze Cam Floodlight v2.png";
import Product4Image from "../assets/productsImages/Wyze Duo Cam Doorbell.png";
import Product5Image from "../assets/productsImages/Wyze Battery Cam Pro.png";
import Product6Image from "../assets/productsImages/Wyze Sense Motion Sensor.png";
import Product7Image from "../assets/productsImages/Wyze Sense Hub (Required).png";
import Product8Image from "../assets/productsImages/Wyze MicroSD Card (256GB).png";
import v4Black from "../assets/productsImages/cameraColors/Wyze Cam v4 black.png";
import v4White from "../assets/productsImages/cameraColors/Wyze Cam v4 black.png";
import v4Grey from "../assets/productsImages/cameraColors/Wyze Cam v4 gray.png";
import v3White from "../assets/productsImages/cameraColors/Wyze Cam Pan v3 white.png";
import v3Black from "../assets/productsImages/cameraColors/Wyze Cam Pan v3 black.png";
import v2White from "../assets/productsImages/cameraColors/Wyze Cam Floodlight v2 white.png";
import v2Black from "../assets/productsImages/cameraColors/Wyze Cam Floodlight v2 black.png";
import proWhite from "../assets/productsImages/cameraColors/Wyze Battery Cam Pro white.png";
import proBlack from "../assets/productsImages/cameraColors/Wyze Battery Cam Pro black.png";

import type { productsType, stepsType } from "../types/types";

export const products: productsType[] = [
  {
    id: 1,
    name: "Wyze Cam v4",
    description: "The clearest Wyze Cam ever made.",
    discount: 22,
    image: Product1Image,
    colors: [
      {
        name: "White",
        image: v4White,
      },
      {
        name: "Grey",
        image: v4Grey,
      },
      {
        name: "Black",
        image: v4Black,
      },
    ],
    price: 35.98,
    category: "camera",
    isRequired: false,
    selectedColor: "Grey",
  },
  {
    id: 2,
    name: "Wyze Cam Pan v3",
    description: "360° pan and 180° tilt security camera.",
    discount: 12,
    image: Product2Image,
    colors: [
      {
        name: "White",
        image: v3White,
      },
      {
        name: "Black",
        image: v3Black,
      },
    ],
    price: 57.98,
    category: "camera",
    isRequired: false,
    selectedColor: null,
  },
  {
    id: 3,
    name: "Wyze Cam Floodlight v2",
    description:
      "2K floodlight camera with a 160° wide-angle view for your garage.",
    discount: 22,
    image: Product3Image,
    colors: [
      {
        name: "White",
        image: v2White,
      },
      {
        name: "Black",
        image: v2Black,
      },
    ],
    price: 89.98,
    category: "camera",
    isRequired: false,
    selectedColor: null,
  },
  {
    id: 4,
    name: "Wyze Duo Cam Doorbell",
    description: "Two cameras. Two views. Double the porch protection.",
    discount: null,
    image: Product4Image,
    colors: [],
    price: 69.98,
    category: "camera",
    isRequired: false,
    selectedColor: null,
  },
  {
    id: 5,
    name: "Wyze Battery Cam Pro",
    description:
      "Protect anywhere. See everything in 2.5K HDR. No power outlet or electrician needed.",
    discount: null,
    image: Product5Image,
    colors: [
      {
        name: "White",
        image: proWhite,
      },
      {
        name: "Black",
        image: proBlack,
      },
    ],
    price: 89.98,
    category: "camera",
    isRequired: false,
    selectedColor: null,
  },
  {
    id: 6,
    name: "Wyze Sense Motion Sensor",
    description: "Detects motion and triggers your cameras or alerts.",
    discount: null,
    image: Product6Image,
    colors: [],
    price: 59.98,
    category: "sensor",
    isRequired: false,
    selectedColor: null,
  },
  {
    id: 7,
    name: "Wyze Sense Hub (Required)",
    description: "Connects your sensors to the Wyze app.",
    discount: 100,
    image: Product7Image,
    colors: [],
    price: 29.92,
    category: "sensor",
    isRequired: true,
    selectedColor: null,
    require: true,
  },
  {
    id: 8,
    name: "Wyze MicroSD Card (256GB)",
    description: "Local storage for your camera footage.",
    discount: null,
    image: Product8Image,
    colors: [],
    price: 41.96,
    category: "accessory",
    isRequired: false,
    selectedColor: null,
  },
];

export const stepsData: stepsType[] = [
  {
    stepNumber: 1,
    stepTitle: "Choose your cameras",
    stepIcon: step1logo,
    active: true,
    category: "camera",
  },
  {
    stepNumber: 2,
    stepTitle: "Choose your plan",
    stepIcon: step2logo,
    active: false,
    category: "sensor",
  },
  {
    stepNumber: 3,
    stepTitle: "Choose your sensors",
    stepIcon: step3logo,
    active: false,
    category: "accessory",
  },
  {
    stepNumber: 4,
    stepTitle: "Add extra protection",
    stepIcon: step4logo,
    active: false,
  },
];
