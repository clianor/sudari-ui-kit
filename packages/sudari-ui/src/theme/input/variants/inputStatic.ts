import tw from 'twin.macro';

export default {
  container: [],
  input: [tw`text-slate-700`],
  label: [
    tw`transition-all`,
    tw`-top-1.5`,
    tw`h-[calc(100% + 0.375rem)]`,
    tw`text-inherit`,
    tw`border-b border-inherit`,
    tw`peer-focus:(text-inherit)`,
    tw`peer-focus:(border-b-2 border-inherit)`,
    tw`peer-placeholder-shown:(leading-[1rem])`,
  ],
};
