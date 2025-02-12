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

const commonTextStyles = " font-montserrat text-pink-400 text-xl font-bold absolute";
const commonPStyles = "font-montserrat text-pink-400 font-bold text-xl absolute";

export const membersBts = {
  btsflower: {
    div1: `${commonStylesDiv1}`,
    div2: "flex flex-col gap-20",
    div3: `${commonTextStyles} top-[57px] left-[60px] text-pink-600`,
    p: `${commonPStyles} top-[145px] right-[58px] text-pink-600 `,
  },
  rmflower: {
    div1: `${commonStylesDiv1}`,
    div2: "flex flex-col gap-20",
    div3: `${commonTextStyles} bottom-[170px] left-[59px] text-pink-600 `,
    p: `${commonPStyles} bottom-[100px] right-[70px] text-pink-600`,
  },
  jinflower: {
    div1: `${commonStylesDiv1}`,
    div2: "flex flex-col gap-20",
    div3: `${commonTextStyles} bottom-[160px] left-[60px]`,
    p: `${commonPStyles} right-[55px] bottom-[100px] text-pink-500`,
  },
  sugaflower: {
    div1: `${commonStylesDiv1}`,
    div2: "flex flex-col gap-20",
    div3: `${commonTextStyles} bottom-[165px] left-[60px] text-pink-600 `,
    p: `${commonPStyles} bottom-[100px] right-[60px] text-pink-400`,
  },
  jhopeflower: {
    div1: `${commonStylesDiv1}`,
    div2: "flex flex-col gap-20",
    div3: `${commonTextStyles} bottom-[210px] left-[60px] `,
    p: `${commonPStyles} bottom-[80px] right-[70px]`,
  },
  jiminflower: {
    div1: `${commonStylesDiv1}`,
    div2: "flex flex-col gap-20",
    div3: `${commonTextStyles} bottom-[135px] left-[100px]`,
    p: `${commonPStyles} bottom-[110px] right-[70px] `,
  },
  vflower: {
    div1: `${commonStylesDiv1}`,
    div2: "flex flex-col gap-20",
    div3: `${commonTextStyles} bottom-[135px] left-[60px]  `,
    p: `${commonPStyles} bottom-[100px] right-[60px]  `,
  },
  jungkookflower: {
    div1: `${commonStylesDiv1}`,
    div2: "flex flex-col gap-20",
    div3: `${commonTextStyles} bottom-[139px] left-[60px] `,
    p: `${commonPStyles}  bottom-[100px] right-[60px] `,
  },
};
