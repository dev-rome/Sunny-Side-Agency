
import Header from "./components/Header";
import TransformSection from "./components/TransformSection";
import StandOutSection from "./components/StandOutSection";
import MediaSection from "./components/MediaSection";
import TestimonialSection from "./components/TestimonialSection";
import GallerySection from "./components/GallerySection";
import Footer from "./components/Footer";


export default function App() {
  return (
    <>
      <main>
        <Header />

        {/* transform section */}
        <TransformSection />

        {/* stand-out section */}
        <StandOutSection />

        {/* graphic design & photography section */}
        <MediaSection />

        {/* testimonials section */}
        <TestimonialSection />

        {/* gallery section */}
        <GallerySection />

        {/* footer */}
        <Footer />
      </main>
    </>
  );
}
