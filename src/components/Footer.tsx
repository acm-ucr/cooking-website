const Footer = () => {
  return (
    <div className="flex h-1/8 w-screen flex-col items-center justify-center bg-gray-100">
      <div className="flex h-full w-full flex-row items-center gap-6">
        <div className="flex h-1/64 w-full bg-black"></div>
        {/* <Icon icon="ph:linktree-logo-bold" width="64" height="64" />
        <Icon icon="mdi:instagram" width="64" height="64" />
        <Icon icon="ic:baseline-discord" width="64" height="64" /> */}
        <div className="flex h-1/64 w-full bg-black"></div>
      </div>

      <div className="font-cooking-main text-cooking-gray flex h-full w-full justify-center font-extralight">
        cooking club @ ucr
      </div>
    </div>
  );
};

export default Footer;
