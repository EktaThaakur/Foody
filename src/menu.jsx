import Footer from "./footer";
import FoodNavbar from "./header";
import MenuCardSwiper from "./menucard";
import AccordionComponentMenu from "./menulist";


export default function Menu() {
  return (
    <div>
      <FoodNavbar />
      <section  style={{
      backgroundImage: "url('/wallpaper.jpeg')",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
    
      backgroundSize: "cover",
    }} >
      <div className="pt-20">
       <MenuCardSwiper />
       </div>
      <div className="md:block md:px-12 px-4 pb-4">
        <AccordionComponentMenu />
      </div>
      </section>
       <Footer />
    </div>
  );
}