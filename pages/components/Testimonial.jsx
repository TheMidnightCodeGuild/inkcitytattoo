import React from "react";

const Testi = () => {
  return (
    <div className="bg-[#0039a6] flex justify-center items-center min-h-screen px-4 py-10 border-[10px] border-white">
      <div className="lg:max-w-[1300px] w-full text-left">

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8">
          What Our Clients Say
        </h1>
        <p className="text-lg sm:text-xl text-gray-200 mb-5">
          Discover the experiences of those who have visited us!
        </p>
        <div className="w-20 md:w-24 h-1.5 bg-[#F7A600] mx-auto sm:mx-0 mb-8 sm:mb-12"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              text: "An amazing experience and a must-visit destination for everyone! People of all ages will find joy and wonder at Pagdandi Ecofarms.",
              name: "Priya Agarwal",
            },
            {
              text: "Heaven on Earth - These are the only words which can describe this place. Had our first social gathering here. The food is equally fresh and delicious.",
              name: "BNI Indore (Fortune family)",
            },
            {
              text: "A perfect place to camp, meditate and watch stars! This place is absolute serene and pollution-free to top it all up.",
              name: "Mr. Ramesh Naik",
            },
          ].map((testimonial, index) => (
            <div key={index} className="bg-gray-100 px-5 sm:px-6 py-16 rounded-xl shadow-md border-4 border-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="block w-6 h-6 sm:w-8 sm:h-8 text-black mb-4 mx-auto"
                viewBox="0 0 975.036 975.036"
              >

                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p className="text-sm sm:text-base leading-relaxed mb-2">{testimonial.text}</p>
              <p className="text-sm sm:text-base font-semibold text-gray-800">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testi;
