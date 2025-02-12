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

const commonTextStyles = " font-montserrat text-pink-400 text-xs font-bold absolute";
const commonPStyles = "font-montserrat text-pink-400 font-bold text-xs absolute";

export const membersBts = {
  btsflower: {
    div1: `${commonStylesDiv1}`,
    div2: "flex flex-col gap-20",
    div3: `${commonTextStyles} top-[63px] left-[60px] text-pink-600`,
    p: `${commonPStyles} top-[145px] right-[58px] text-pink-600 `,
  },
  rmflower: {
    div1: `${commonStylesDiv1}`,
    div2: "flex flex-col gap-20",
    div3: `${commonTextStyles} bottom-[263px] left-[59px] text-pink-600 `,
    p: `${commonPStyles} bottom-[245px] left-[65px] text-pink-600`,
  },
  jinflower: {
    div1: `${commonStylesDiv1}`,
    div2: "flex flex-col gap-20",
    div3: `${commonTextStyles} top-[81px] right-[60px] text-purple-700`,
    p: `${commonPStyles} right-[44px] top-[100px] text-purple-700 `,
  },
  sugaflower: {
    div1: `${commonStylesDiv1}`,
    div2: "flex flex-col gap-20",
    div3: `${commonTextStyles} bottom-[270px] left-[57px] text-pink-600 `,
    p: `${commonPStyles} bottom-[250px] left-[57px] text-pink-600`,
  },
  jhopeflower: {
    div1: `${commonStylesDiv1}`,
    div2: "flex flex-col gap-20",
    div3: `${commonTextStyles} bottom-[110px] right-[80px] text-pink-700 `,
    p: `${commonPStyles} bottom-[95px] right-[60px] text-pink-700`,
  },
  jiminflower: {
    div1: `${commonStylesDiv1}`,
    div2: "flex flex-col gap-20",
    div3: `${commonTextStyles} bottom-[180px] right-[100px] `,
    p: `${commonPStyles} bottom-[160px] right-[70px]  `,
  },
  vflower: {
    div1: `${commonStylesDiv1}`,
    div2: "flex flex-col gap-20",
    div3: `${commonTextStyles} bottom-[150px] right-[80px]  `,
    p: `${commonPStyles} bottom-[130px] right-[58px]  `,
  },
  jungkookflower: {
    div1: `${commonStylesDiv1}`,
    div2: "flex flex-col gap-20",
    div3: `${commonTextStyles} top-[194px] right-[58px] text-pink-600 `,
    p: `${commonPStyles}  bottom-[273px] right-[58px] text-pink-600`,
  },
};
