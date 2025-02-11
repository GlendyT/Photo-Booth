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

const commonStylesDiv1 = " font-bold relative h-[500px] w-[400px] shadow-lg border-lg rounded-lg outline-none focus:outline-none bg-no-repeat bg-cover bg-center";

const commonTextStyles = "  text-pink-700 text-2xl italic absolute";
const commonPStyles = "font-bold text-pink-700 italic text-2xl absolute";

export const membersBts = {
  btsflower: {
    div1: `${commonStylesDiv1}`,
    div2: "flex flex-col gap-20",
    div3: `${commonTextStyles} top-[64px] left-[110px]`,
    p: `${commonPStyles} right-[37px] top-[145px] rotate-[-17deg]`,
  },
  rmflower: {
    div1: `${commonStylesDiv1}`,
    div2: "flex flex-col gap-20",
    div3: `${commonTextStyles} top-[62px] left-[110px] `,
    p: `${commonPStyles} bottom-[203px] left-[109px] rotate-[-23deg]`,
  },
  jinflower: {
    div1: `${commonStylesDiv1}`,
    div2: "flex flex-col gap-20",
    div3: `${commonTextStyles} top-[62px] right-[58px]`,
    p: `${commonPStyles} right-[55px] bottom-[212px] rotate-[-17deg]`,
  },
  sugaflower: {
    div1: `${commonStylesDiv1}`,
    div2: "flex flex-col gap-20",
    div3: `${commonTextStyles} top-[62px] left-[110px] `,
    p: `${commonPStyles} bottom-[238px] left-[100px] rotate-[-20deg]`,
  },
  jhopeflower: {
    div1: `${commonStylesDiv1}`,
    div2: "flex flex-col gap-20",
    div3: `${commonTextStyles} mt-[77px] right-[45px]  `,
    p: `${commonPStyles} bottom-[77px] right-[89px] rotate-[-22deg]`,
  },
  jiminflower: {
    div1: `${commonStylesDiv1}`,
    div2: "flex flex-col gap-20",
    div3: `${commonTextStyles} top-[69px] left-[107px]`,
    p: `${commonPStyles} bottom-[105px] right-[70px] rotate-[-19deg]`,
  },
  vflower: {
    div1: `${commonStylesDiv1}`,
    div2: "flex flex-col gap-20",
    div3: `${commonTextStyles} bottom-[217px] right-[130px] text-2xl `,
    p: `${commonPStyles} bottom-[90px] right-[82px] rotate-[-19deg] `,
  },
  jungkookflower: {
    div1: `${commonStylesDiv1}`,
    div2: "flex flex-col gap-20",
    div3: `${commonTextStyles} top-[70px] right-[66px] `,
    p: `${commonPStyles}  bottom-[208px] right-[50px] rotate-[-19deg]`,
  },
};
