import Footer from "./footer";
import FoodNavbar from "./header";
import MenuCardSwiper from "./menucard";
import AccordionComponentMenu from "./menulist";


export default function Menu() {
  return (
    <div>
      <FoodNavbar />
      <section  style={{
      padding: 90,
      backgroundImage: "url('/wallpaper.jpeg')",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
    
      backgroundSize: "cover",
    }} >
       <MenuCardSwiper />
      <AccordionComponentMenu />
      </section>
       <Footer />
    </div>
  );
}