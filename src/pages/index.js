import axios from "axios";
import Footer from "@/componets/Footer";
import Header from "@/componets/Header";
import ComapnyCore from "@/componets/ComapnyCore";
import ProductHome from "@/componets/ProductHome";
import CarouselHome from "@/componets/CarouselHome";

// ✅ Fetch "home-page" data with ACF at build time
export async function getStaticProps() {
  try {
    const res = await axios.get("http://localhost/wordpress/wp-json/wp/v2/pages?slug=home-page");
    const page = res.data[0]; // Get the first (and likely only) result
    console.log(page);
    

    return {
      props: {
        pageData: page || null,
      },
    };
  } catch (error) {
    console.error("Error fetching home page data:", error.message);
    return {
      props: {
        pageData: null,
      },
    };
  }
}

export default function Home({ pageData }) {
  const acf = pageData?.acf || {};

  return (
    <>
      <Header />
      <CarouselHome
        heading1={acf["carousel-heading-1"]}
        heading2={acf["carousel-heading-2"]}
        para={acf["carousel-para"]}
        imageUrl={acf["carousel-image"]}
      />
      <ComapnyCore />
      <ProductHome />
      <Footer />
    </>
  );
}
