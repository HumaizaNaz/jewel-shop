import Link from "next/link"
export default function HeroSection() {
    return (
      <section
        className="relative h-[550px] w-full bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('backgroundhero.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
  
        <div className="relative z-10 text-center px-6 md:px-12">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Discover Luxury Like Never Before
          </h1>
          <p className="text-lg md:text-xl mb-8 text-orange-200">
            Explore our exclusive collection of premium products tailored to your taste.
          </p>
  
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              href="/Shop"
              className="px-8 py-4 bg-gradient-to-r from-orange-800 to-orange-950 rounded-lg text-lg font-semibold shadow-lg hover:scale-105 transition-transform"
            >
              Shop Now
            </Link>
            <Link
              href="/About"
              className="px-8 py-4 bg-transparent border-2 border-white rounded-lg text-lg font-semibold hover:bg-white hover:text-black transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    );
  }
  