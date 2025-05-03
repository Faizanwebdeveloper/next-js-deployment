import dynamic from "next/dynamic";

import Footer from "@/componets/Footer";
import Header from "@/componets/Header";
import ComapnyCore from "@/componets/ComapnyCore";
import ProductHome from "@/componets/ProductHome";

// ✅ Only one dynamic import
const CarouselHome = dynamic(() => import('@/componets/CarouselHome'), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});

export default function Home() {
  return (
    <>
      <Header />
      <CarouselHome />
      <ComapnyCore />
      <ProductHome />
      <Footer />
    </>
  );
}
