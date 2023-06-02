import tw from "tailwind-styled-components";

export const ProductImage = tw.div`
w-64
h-48
rounded-2xl
bg-center
bg-cover
border
border-slate-200
cursor-pointer
relative
shadow-lg
hover:scale-105
duration-300
`;

export const ProductTitle = tw.h3`
text-base
font-semibold
`;

export const ProudctPrice = tw.span`
text-sm
font-light
`;