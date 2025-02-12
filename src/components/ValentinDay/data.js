import btsflower from "./assetsBts/btsflower.webp";
import rmflower from "./assetsBts/rmflower.webp";
import jinflower from "./assetsBts/jinflower.webp";
import sugaflower from "./assetsBts/sugaflower.webp";
import jhopeflower from "./assetsBts/jhopeflower.webp";
import jiminflower from "./assetsBts/jiminflower.webp";
import vflower from "./assetsBts/vflower.webp";
import jungkookflower from "./assetsBts/jungkookflower.webp";

export const btsImg = {
  btsflower,
  rmflower,
  jinflower,
  sugaflower,
  jhopeflower,
  jiminflower,
  vflower,
  jungkookflower,
};

const commonStylesDiv1 = " relative h-[500px] w-[400px] shadow-lg outline-none focus:outline-none bg-no-repeat bg-cover bg-center";

const commonTextStyles = " font-dancing text-pink-700 text-2xl font-bold absolute";
const commonPStyles = "font-dancing text-pink-700 font-bold text-2xl absolute";

export const membersBts = {
  btsflower: {
    div1: `${commonStylesDiv1}`,
    div2: "flex flex-col gap-20",
    div3: `${commonTextStyles} top-[57px] left-[60px]`,
    p: `${commonPStyles} right-[55px] top-[145px] `,
  },
  rmflower: {
    div1: `${commonStylesDiv1}`,
    div2: "flex flex-col gap-20",
    div3: `${commonTextStyles} top-[68px] left-[59px] `,
    p: `${commonPStyles} bottom-[250px] left-[53px]`,
  },
  jinflower: {
    div1: `${commonStylesDiv1}`,
    div2: "flex flex-col gap-20",
    div3: `${commonTextStyles} top-[80px] right-[80px]`,
    p: `${commonPStyles} right-[55px] bottom-[260px] `,
  },
  sugaflower: {
    div1: `${commonStylesDiv1}`,
    div2: "flex flex-col gap-20",
    div3: `${commonTextStyles} top-[65px] left-[60px] `,
    p: `${commonPStyles} bottom-[260px] left-[60px] `,
  },
  jhopeflower: {
    div1: `${commonStylesDiv1}`,
    div2: "flex flex-col gap-20",
    div3: `${commonTextStyles} top-[90px] right-[80px] `,
    p: `${commonPStyles} bottom-[90px] right-[95px]`,
  },
  jiminflower: {
    div1: `${commonStylesDiv1}`,
    div2: "flex flex-col gap-20",
    div3: `${commonTextStyles} top-[64px] left-[60px]`,
    p: `${commonPStyles} bottom-[105px] right-[70px] `,
  },
  vflower: {
    div1: `${commonStylesDiv1}`,
    div2: "flex flex-col gap-20",
    div3: `${commonTextStyles} bottom-[235px] right-[130px]  `,
    p: `${commonPStyles} bottom-[130px] right-[82px]  `,
  },
  jungkookflower: {
    div1: `${commonStylesDiv1}`,
    div2: "flex flex-col gap-20",
    div3: `${commonTextStyles} top-[80px] right-[90px] `,
    p: `${commonPStyles}  bottom-[230px] right-[60px] `,
  },
};
