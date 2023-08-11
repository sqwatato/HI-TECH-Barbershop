/**
 * About
 */

export default function About() {
  return (
    <section className="custom-hidden">
      <div className="p-6 sm:p-12 bg-white text-black" id="about-container">
      <div className="flex flex-row space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
        <img src="https://freesvg.org/img/abstract-user-flat-4.png" alt="" className="self-center flex-shrink-0 w-100 h-100 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700" id="about-pfp"/>
        <div className="flex flex-col justify-center">
          <h4 className="text-xl font-semibold text-center md:text-left" id="about-name">Rodney Richardson</h4>
          <p className="text-sm" id="about-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis sit error modi voluptates nam, architecto qui itaque beatae magni est accusantium a voluptate culpa dolores quos earum, fugiat sapiente porro! Ab provident cum ducimus ipsum at fugit natus soluta? Optio!</p>
        </div>
      </div>
    </div>
    </section>
  )
}