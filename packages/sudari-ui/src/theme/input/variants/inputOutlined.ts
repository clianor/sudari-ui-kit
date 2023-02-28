import tw from 'twin.macro';

export default {
  container: [],
  input: [
    tw`placeholder-transparent`,
    tw`text-slate-700`,
    tw`border rounded-md border-inherit`,
    tw`bg-transparent`,
    tw`px-3`,
    tw`border-t-transparent`,
    tw`placeholder-shown:border-inherit`,
    tw`focus:(border-inherit border-2 border-t-transparent)`,
    tw`disabled:(border-0 bg-slate-50)`,
  ],
  label: [
    tw`transition-all`,
    tw`-top-1.5`,
    tw`text-inherit`,
    tw`border-inherit`,
    // before
    tw`before:[content:' ']`,
    tw`before:(w-3 h-2 mt-1.5 mr-0.5)`,
    tw`before:(border-t border-l rounded-tl-md)`,
    tw`before:border-inherit`,
    tw`peer-placeholder-shown:before:border-0`,
    tw`peer-focus:before:(border-t-2 border-l-2 border-inherit rounded-tl-md)`,
    // after
    tw`after:[content:' ']`,
    tw`after:(w-full h-2 mt-1.5 ml-0.5)`,
    tw`after:(border-t border-r rounded-tr-md)`,
    tw`after:border-inherit`,
    tw`peer-placeholder-shown:after:border-0`,
    tw`peer-focus:after:(border-t-2 border-r-2 border-inherit rounded-tr-md)`,
  ],
};
