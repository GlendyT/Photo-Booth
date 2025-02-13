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
const commontStyles = "font-montserrat text-pink-400 font-bold text-xs absolute";
const commonfStyles = "font-montserrat text-pink-400 font-bold text-xs absolute";

export const membersBts = {
  btsflower: {
    div1: `${commonStylesDiv1}`,
    div2: "flex flex-col gap-20",
    div3: `${commonTextStyles} top-[63px] left-[60px] text-pink-600`,
    p: `${commonPStyles} top-[145px] right-[180px] text-pink-600 `,
    to: `${commontStyles} top-[63px] left-[85px] text-pink-600`,
    from: `${commonfStyles} top-[145px] left-[224px] text-pink-600`,
  },
  rmflower: {
    div1: `${commonStylesDiv1}`,
    div2: "flex flex-col gap-20",
    div3: `${commonTextStyles} bottom-[263px] left-[59px] text-pink-600 `,
    p: `${commonPStyles} bottom-[245px] left-[59px] text-pink-600`,
    to: `${commontStyles} bottom-[263px] left-[80px] text-pink-600`,
    from: `${commonfStyles} bottom-[245px] left-[95px] text-pink-600`,
  },
  jinflower: {
    div1: `${commonStylesDiv1}`,
    div2: "flex flex-col gap-20",
    div3: `${commonTextStyles}  top-[205px] right-[130px] text-pink-600 `,
    p: `${commonPStyles}   right-[115px] bottom-[244px]  text-pink-600`,
    to: `${commontStyles} top-[219px] left-[253px] text-pink-600`,
    from: `${commonfStyles} bottom-[230px] left-[253px] text-pink-600`,
  },
  sugaflower: {
    div1: `${commonStylesDiv1}`,
    div2: "flex flex-col gap-20",
    div3: `${commonTextStyles} bottom-[270px] left-[57px] text-pink-600 `,
    p: `${commonPStyles} bottom-[250px] left-[57px] text-pink-600`,
    to: `${commontStyles} bottom-[270px] left-[79px] text-pink-600`,
    from: `${commonfStyles} bottom-[250px] left-[94px] text-pink-600`,
  },
  jhopeflower: {
    div1: `${commonStylesDiv1}`,
    div2: "flex flex-col gap-20",
    div3: `${commonTextStyles} bottom-[110px] right-[235px]  `,
    p: `${commonPStyles} bottom-[95px] right-[220px] `,
    to: `${commontStyles} bottom-[110px] left-[170px] `,
    from: `${commonfStyles} bottom-[95px] left-[185px] `,
  },
  jiminflower: {
    div1: `${commonStylesDiv1}`,
    div2: "flex flex-col gap-20",
    div3: `${commonTextStyles} bottom-[100px] right-[180px] `,
    p: `${commonPStyles} bottom-[80px] right-[165px]  `,
    to: `${commontStyles} bottom-[100px] left-[225px]`,
    from: `${commonfStyles} bottom-[80px] left-[240px] `,
  },
  vflower: {
    div1: `${commonStylesDiv1}`,
    div2: "flex flex-col gap-20",
    div3: `${commonTextStyles} bottom-[100px] right-[246px] `,
    p: `${commonPStyles} bottom-[80px] right-[230px]  `,
    to: `${commontStyles} bottom-[100px] left-[159px] `,
    from: `${commonfStyles} bottom-[80px] left-[175px]`,
  },
  jungkookflower: {
    div1: `${commonStylesDiv1}`,
    div2: "flex flex-col gap-20",
    div3: `${commonTextStyles} top-[190px] right-[127px]  `,
    p: `${commonPStyles}  bottom-[264px] right-[111px] `,
    to: `${commontStyles} top-[203px] left-[255px] `,
    from: `${commonfStyles} bottom-[252px] left-[256px] `,
  },
};
