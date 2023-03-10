import tw from 'twin.macro';

export default {
  container: [],
  input: [tw`placeholder-transparent`, tw`text-slate-700`],
  label: [
    tw`transition-all`,
    tw`-top-1.5`,
    tw`h-[calc(100% + 0.375rem)]`,
    tw`text-slate-700`,
    tw`peer-focus:text-green-500`,
    tw`border-b border-slate-200`,
    tw`peer-focus:(border-b-2 border-green-500)`,
  ],
};
