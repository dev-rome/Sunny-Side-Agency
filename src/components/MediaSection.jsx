const MediaSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-ful h-full">
        <div className="bg-graphic-design-mobile-background md:bg-graphic-design-desktop-background bg-cover bg-center h-[600px] w-full ">
          <div className="flex flex-col justify-end items-center text-center h-full pb-14 px-6">
            <h1 className="font-fraunces font-black text-2xl text-cyan mb-6">
              Graphic Design
            </h1>
            <p className="font-barlow font-semibold text-cyan max-w-lg">
              We handle everything from web assets to print Great design makes
              you memorable. We deliver artwork that underscores your brand
              message and captures potential clients’ attention.
            </p>
          </div>
        </div>
        <div className="bg-photography-mobile-background md:bg-photography-desktop-background bg-cover bg-center h-[600px] w-full">
          <div className="flex flex-col justify-end items-center text-center h-full pb-14 px-6">
            <h1 className="font-fraunces font-black text-2xl text-blue mb-6">
              Photography
            </h1>
            <p className="font-barlow font-semibold text-blue max-w-xs">
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
