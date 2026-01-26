export default function HeroSection({title1 = '', title2 = ''}) {

  return (
    <div
      id="home"
      className="
        relative
        min-h-[50svh]
        flex items-center justify-center
        bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900
      "
      style={{height: '400px'}}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div
        className="
          absolute inset-0
          bg-[url('assets/hero-bg.png')]
          bg-cover bg-center
          opacity-20
        "
      ></div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
          {title1}
          <br className="hidden sm:block" />
            {title2}
        </h1>
      </div>
    </div>
  );
}
