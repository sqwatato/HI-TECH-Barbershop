/**
 * Hero Landing Page
 */

export default function Hero() {
  return (
    <section className="custom-hidden">
      <div className="flex flex-row flex-wrap p-12 sm:p-12 md:p-24 lg:px-48 gap-12 fade-in" id="intro-container">
        <div className="md:basis-1/2">
          <h1 className="text-4xl md:text-5xl font-light text-black main-font">
            Razor shaves, scissor and clipper cuts for all kinds of hair!
          </h1>
          <p className="text-black py-3">
            Welcome to HI-TECH BarberShop, where our talented stylists provide a
            wide range of services to help you look and feel your best, from
            stylish haircuts to expert beard grooming.
          </p>
          <button type="button" className="focus:outline-none text-white bg-orange-400 hover:bg-orange-500 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-orange-900" id="get-started-button">Get Started <i className="right-arrow"></i></button>
        </div>
        <div className="md:basis-2/5 w-full max-md:py-8 md:py-0">
          <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded dark:bg-gray-700">
            <svg
              className="w-10 h-10 text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
