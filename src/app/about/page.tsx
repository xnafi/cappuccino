import Image from "next/image";
import img1 from "../../../public/assets/OurMenu/menu.jpg";

const about = () => {
  return (
    <div className="bg-[#151412] py-12 h-full md:h-screen flex flex-col items-center justify-center">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="text-center">
          <h2 className="text-base text-white/60 font-semibold tracking-wide uppercase">
            About Us
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white/80 sm:text-4xl">
            Welcome to Cappuccino
          </p>
          <p className="mt-4 max-w-2xl text-xl text-white/60 lg:mx-auto">
            At Cappuccino, we believe in brewing the perfect cup of coffee for
            every occasion. Our mission is to provide high-quality coffee and a
            cozy atmosphere for our customers to enjoy.
          </p>
        </div>
        <div className="mt-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 p-4">
              <Image
                className="w-full h-full object-cover"
                src={img1}
                alt="Coffee Shop"
                width={500}
                height={500}
              />
            </div>
            <div className="md:w-1/2 p-4">
              <h3 className="text-2xl font-bold text-white/80">Our Story</h3>
              <p className="mt-4 text-white/60">
                Our journey began in 2010 with a small coffee shop in the heart
                of the city. Over the years, we have grown into a community
                favorite, known for our exceptional coffee, friendly staff, and
                inviting atmosphere.
              </p>
              <p className="mt-4 text-white/60">
                We source our beans from the finest coffee-growing regions
                around the world and roast them to perfection to bring out their
                unique flavors. Whether you are a coffee aficionado or just
                looking for a cozy place to relax, Cappuccino is the perfect
                spot.
              </p>
              <p className="mt-4 text-white/60">
                Our journey began in 2010 with a small coffee shop in the heart
                of the city. Over the years, we have grown into a community
                favorite, known for our exceptional coffee, friendly staff, and
                inviting atmosphere.
              </p>
              <p className="mt-4 text-white/60">
                We source our beans from the finest coffee-growing regions
                around the world and roast them to perfection to bring out their
                unique flavors. Whether you are a coffee aficionado or just
                looking for a cozy place to relax, Cappuccino is the perfect
                spot.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
