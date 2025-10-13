const Example = (props: {
  text1: string;
  text2: string;
  text3: string;
  text4: string;
}) => {
  return (
    <div className="bg-cooking-brown-dark w-2/3 flex-col gap-1 rounded-lg p-10">
      <div className="bg-cooking-green m-auto mb-12 w-1/2 p-5 text-center text-white">
        {props.text1}
      </div>
      <div className="m-auto flex w-1/2 flex-row gap-1">
        <div className="bg-cooking-brown-light w-full rounded-full p-5 text-center text-white">
          {props.text2}
        </div>
        <div className="bg-cooking-cream-light w-full rounded-full p-5 text-center text-white">
          {props.text3}
        </div>
      </div>
      <div className="bg-cooking-gray m-auto mt-12 w-1/2 p-5 text-center text-white">
        {props.text4}
      </div>
    </div>
  );
};

export default Example;
