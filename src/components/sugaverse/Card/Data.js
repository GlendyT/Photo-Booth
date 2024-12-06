// Data.js - Simplificado y mejorado para uniformidad
import dday from "../assetsSuga/dday.avif";
import d2 from "../assetsSuga/d2.avif";
import agustd from "../assetsSuga/agustd.avif";
import pp2 from "../assetsSuga/pp2.avif";
import hgm from "../assetsSuga/hgm.avif";
import yc from "../assetsSuga/agustdd.avif";

export const dicImg = {
  dday,
  d2,
  agustd,
  pp2,
  hgm,
  yc,
};

const commonDiv1Styles = "flex justify-center bg-no-repeat bg-cover bg-center aspect-[9/9] p-8 max-sm:p-4";
const commonTextStyles = "text-sm font-dmmono max-sm:text-xs tracking-tight";
const commonPStyles = "font-dmmono text-right max-sm:text-xs";

export const styles = {
  dday: {
    div1: `${commonDiv1Styles}`,
    div2: "flex flex-col gap-20",
    div3: `${commonTextStyles} text-white pb-20 max-sm:pb-5`,
    p: `${commonPStyles} text-white`,
  },
  d2: {
    div1: `${commonDiv1Styles}`,
    div2: "flex flex-col gap-20",
    div3: `${commonTextStyles} text-white text-center`,
    p: `${commonPStyles} text-white`,
  },
  agustd: {
    div1: `${commonDiv1Styles} flex items-center `,
    div2: "bg-black w-full h-auto gap-20",
    div3: `${commonTextStyles} text-white py-4 text-justify`,
    p: `${commonPStyles} text-white bg-black`,
  },
  pp2: {
    div1: `${commonDiv1Styles}`,
    div2: " flex flex-col gap-20 ",
    div3: `${commonTextStyles} text-black text-justify`,
    p: `${commonPStyles} text-black `,
  },
  hgm: {
    div1: `${commonDiv1Styles}  flex items-center`,
    div2: "bg-orange-600 w-full h-auto flex flex-col gap-20",
    div3: `${commonTextStyles} text-white bg-orange-600`,
    p: `${commonPStyles} text-white bg-orange-600`,
  },
  yc: {
    div1: `${commonDiv1Styles} flex items-center`,
    div2: "flex flex-col w-full h-auto ",
    div3: `${commonTextStyles} text-white text-center backdrop-blur-sm bg-black/30`,
    p: `${commonPStyles} text-white backdrop-blur-sm bg-black/30`,
  },
};
