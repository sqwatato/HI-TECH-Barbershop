/**
 * Contact
 */
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
export default function Contact() {
  return (
    <section className="bg-gray-900 custom-hidden">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md h-full pb-40">
        {/* <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Contact Us
        </h2> */}
        {/* <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Want to book an appointment? Have questions about HI-TECH Barber Shop?
          Let us know!
        </p> */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Contact Us
            </h2>
            <p className="mb-4 text-4xl tracking-tight font-bold text-center text-gray-900 dark:text-white">
              Get in touch
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Want to book an appointment? Have questions about HI-TECH Barber
              Shop? Let us know!
            </p>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row justify-center space-x-6">
            <div className="flex flex-row items-center mb-4 sm:mb-0 sm:flex-row sm:items-start">
              <div>
                <div className="flex">
                  <FaMapMarkerAlt className="h-6 w-6 text-indigo-600" />
                  <span className="ml-2 text-white">
                    123 Main St, Cupertino, CA 95014
                  </span>
                </div>
                <br />
                <div className="flex">
                  <FaPhone className="h-6 w-6 text-indigo-600" />
                  <span className="ml-2 text-white">(408) 555 - 5555</span>
                </div>
              </div>
            </div>

            <div>
              <table className="table-auto">
                <thead>
                </thead>
                <tbody>
                  <tr>
                    <td className=" px-4 py-2">Mon</td>
                    <td className=" px-4 py-2">Closed</td>
                  </tr>
                  <tr>
                    <td className=" px-4 py-2">Tue - Fri</td>
                    <td className=" px-4 py-2">12:00 PM - 6:30 PM</td>
                  </tr>
                  <tr>
                    <td className=" px-4 py-2">Sat</td>
                    <td className=" px-4 py-2">12:00 PM - 6:00 PM</td>
                  </tr>
                  <tr>
                    <td className=" px-4 py-2">Sun</td>
                    <td className=" px-4 py-2">Closed</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
