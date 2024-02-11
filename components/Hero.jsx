import Link from "next/link";
const Hero = () => {
  return (
    <div className="hero bg-base-200 bg-blend-overlay h-[700px] bg-[url('/static/banner3.jpg')] bg-cover bg-center bg-no-repeat max-[500px]:h-[500px]">
    <div className="hero-content text-center">
      <div className="max-w-xl">
        <h1 className="text-6xl font-bold max-md:text-4xl text-accent-content">Best Clothing Shop Of The Year!</h1>
        <p className="py-6 text-2xl max-md:text-lg text-accent-content">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae
          et a id nisi.
        </p>
        <Link href="/shop" className="btn btn-wide bg-black text-white text-xl border-2 hover:bg-white hover:text-black transition-colors">Shop Now</Link>
      </div>
    </div>
  </div>
  )
}

export default Hero