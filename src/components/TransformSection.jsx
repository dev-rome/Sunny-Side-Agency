import TransformDesktop from "../assets/images/desktop/image-transform.jpg";
import TransformMobile from "../assets/images/mobile/image-transform.jpg";

const TransformSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center">
        <div className="text-center lg:text-left py-16 px-6 order-2 lg:order-1">
          <h1 className="font-fraunces font-black text-3xl md:text-4xl lg:max-w-sm text-desaturated-blue">
            Transform your brand
          </h1>
          <p className="font-barlow font-semibold text-lg max-w-sm mx-auto lg:max-w-md lg:mx-0 text-dark-grayish-blue pt-8 pb-10">
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <button className="font-fraunces font-black text-sm border-button border-yellow">
            LEARN MORE
          </button>
        </div>
        <img
          src={TransformDesktop}
          alt="transform section image"
          className="object-cover order-1 lg:order-2 w-full h-full hidden md:block"
        />
        <img
          src={TransformMobile}
          alt="transform section image"
          className="object-cover order-1 lg:order-2 w-full h-full md:hidden"
        />
      </div>
    </section>
  );
};

export default TransformSection;
