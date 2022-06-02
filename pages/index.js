import Hero from "../components/Layout/Hero";
import CardsSection from "../components/Layout/CardsSection";
import Slider from "../components/Layout/Slider";

export default function Home({ services, testimonials }) {
  return (
    <>
      <Hero
        description="Nulla tempus ipsum sed vehicula feugiat. Nunc pretium metus ac porta pulvinar."
        linkText="explore treatments"
      >
        <h1>
          PUT YOUR WELLNESS <br /> IN GOOD HANDS
        </h1>
      </Hero>
      <CardsSection services={services} />
      <Slider testimonials={testimonials} />
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch("http://localhost:1337/api/services?populate=*");
  const { data } = await response.json();

  const testimonialsResponse = await fetch(
    "http://localhost:1337/api/testimonials"
  );
  const { data: testimonials } = await testimonialsResponse.json();

  return {
    props: {
      services: data,
      testimonials,
    },
  };
}
