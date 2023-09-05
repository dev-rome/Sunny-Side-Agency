import StandOutDesktop from "../assets/images/desktop/image-stand-out.jpg";
import StandOutMobile from "../assets/images/mobile/image-stand-out.jpg";

const StandOutSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center">
        <img
          src={StandOutDesktop}
          alt="transform section image"
          className="object-cover w-full h-full hidden md:block"
        />
        <img
          src={StandOutMobile}
          alt="transform section image"
          className="object-cover w-full h-full md:hidden"
        />
        <div className="text-center lg:text-left py-16 px-6">
          <h1 className="font-fraunces font-black text-3xl md:text-4xl lg:max-w-sm text-desaturated-blue">
            Stand out to the right audience
          </h1>
          <p className="font-barlow font-semibold text-lg max-w-sm mx-auto lg:max-w-md lg:mx-0 text-dark-grayish-blue pt-8 pb-10">
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </p>
          <button className="font-fraunces font-black text-sm border-button border-red">
            LEARN MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default StandOutSection;
