const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="flex w-3/4 items-center gap-1 bg-cooking-brown-light p-10">
      <div className="w-1/2 bg-cooking-green p-5 text-left">
        {props.text1}
      </div>
      <div className="flex w-1/2 flex-row gap-1">
        <div className="w-full bg-cooking-brown-dark p-5 text-left">
          props.text2
        </div>
        <div className="w-full bg-cooking-gray p-5 text-right">
          {props.text2}
        </div>
      </div>
      {/* Hint: Add another box/div here similarly to line 4 */}
    </div>
  );
};

export default Example;