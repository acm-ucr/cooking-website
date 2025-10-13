const Example = (props: {
  text1: string;
  text2: string;
  text3: string;
  text4: string;
}) => {
  return (
    <div className="flex w-full justify-center">
      <div className="bg-cooking-brown-dark flex w-3/4 flex-col items-center gap-6 rounded-xl p-10">
        <div className="bg-cooking-green w-1/4 rounded-md p-5 text-center text-white">
          {props.text1}
        </div>
        <div className="between my-2 flex w-1/4 flex-row justify-center gap-4">
          <div className="bg-cooking-brown-light flex-1 rounded-full px-8 py-4 text-center text-white">
            {props.text2}
          </div>
          <div className="bg-cooking-cream-light flex-1 rounded-full px-8 py-4 text-center text-white">
            {props.text3}
          </div>
        </div>
        <div className="bg-cooking-gray w-1/4 rounded-md p-5 text-center text-white">
          {props.text4}
        </div>
      </div>
    </div>
  );
};

export default Example;
