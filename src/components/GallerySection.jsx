import ConeDesktop from "../assets/images/desktop/image-gallery-cone.jpg";
import ConeMobile from "../assets/images/mobile/image-gallery-cone.jpg";
import CubesDesktop from "../assets/images/desktop/image-gallery-sugarcubes.jpg";
import CubesMobile from "../assets/images/mobile/image-gallery-sugar-cubes.jpg";
import OrangeDesktop from "../assets/images/desktop/image-gallery-orange.jpg";
import OrangeMobile from "../assets/images/mobile/image-gallery-orange.jpg";
import MilkDesktop from "../assets/images/desktop/image-gallery-milkbottles.jpg";
import MilkMobile from "../assets/images/mobile/image-gallery-milkbottles.jpg";

const GallerySection = () => {
  return (
    <section>
      <div className="grid grid-cols-2 lg:grid-cols-4">
        <>
          <img
            src={MilkDesktop}
            alt="milk bottles"
            className="object-cover hidden md:block"
          />
          <img
            src={MilkMobile}
            alt="milk bottles"
            className="object-cover md:hidden"
          />
        </>
        <>
          <img
            src={OrangeDesktop}
            alt="orange"
            className="object-cover hidden md:block"
          />
          <img
            src={OrangeMobile}
            alt="orange"
            className="object-cover md:hidden"
          />
        </>
        <>
          <img
            src={ConeDesktop}
            alt="cone"
            className="object-cover hidden md:block"
          />
          <img src={ConeMobile} alt="cone" className="object-cover md:hidden" />
        </>
        <>
          <img
            src={CubesDesktop}
            alt="sugar-cubes"
            className="object-cover hidden md:block"
          />
          <img
            src={CubesMobile}
            alt="sugar-cubes"
            className="object-cover md:hidden"
          />
        </>
      </div>
    </section>
  );
};

export default GallerySection;
