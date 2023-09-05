import Emily from "../assets/images/image-emily.jpg";
import Jennie from "../assets/images/image-jennie.jpg";
import Thomas from "../assets/images/image-thomas.jpg";

const TestimonialSection = () => {
  return (
    <section className="max-w-[70rem] mx-auto py-40 px-6">
      <h1 className="text-center font-fraunces font-black md:text-xl text-grayish-blue tracking-widest mb-16 md:mb-20">
        CLIENT TESTIMONIALS
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-8">
        <div className="flex flex-col justify-center items-center text-center">
          <img
            src={Emily}
            alt="emily"
            className="object-cover w-16 h-16 rounded-full mb-8 md:mb-14"
          />
          <p className="max-w-sm font-barlow font-semibold text-lg text-very-grayish-blue mb-6 md:mb-16">
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </p>
          <p className="font-fraunces font-black text-lg text-desaturated-blue">
            Emily R.
          </p>
          <p className="font-barlow font-semibold text-xm text-grayish-blue">
            Marketing Director
          </p>
        </div>
        <div className="flex flex-col justify-center items-center text-center">
          <img
            src={Thomas}
            alt="thomas"
            className="object-cover w-16 h-16 rounded-full mb-8 md:mb-14"
          />
          <p className="max-w-sm font-barlow font-semibold text-lg text-very-grayish-blue mb-6 md:mb-16">
            Sunnyside’s enthusiasm coupled with their keen interest in our
            brand’s success made it a satisfying and enjoyable experience.
          </p>
          <p className="font-fraunces font-black text-lg text-desaturated-blue">
            Thomas S.
          </p>
          <p className="font-barlow font-semibold text-xm text-grayish-blue">
            Chief Operating Officer
          </p>
        </div>
        <div className="flex flex-col justify-center items-center text-center">
          <img
            src={Jennie}
            alt="jennie"
            className="object-cover w-16 h-16 rounded-full mb-8 md:mb-14"
          />
          <p className="max-w-sm font-barlow font-semibold text-lg text-very-grayish-blue mb-6 md:mb-16">
            Incredible end result! Our sales increased over 400% when we worked
            with Sunnyside. Highly recommended!
          </p>
          <p className="font-fraunces font-black text-lg text-desaturated-blue">
            Jennie F.
          </p>
          <p className="font-barlow font-semibold text-xm text-grayish-blue ">
            Business Owner
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
