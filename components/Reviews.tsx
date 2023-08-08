'use client'
import { useState } from "react";

export default function Reviews() {

  let reviews = [
    {name: "Viv B.", stars: "5 Stars", source: "Yelp", review: "Best barber I've had 100% no doubt trust me. Great skills. Master of his craft. Very sociable."},
    {name: "Vinay S.", stars: "5 Stars", source: "Yelp", review: "Been going to Rod since before 2015. He's a great barber and that is rare these days. Once you get a good haircut, you can never go back to anything else. I'm glad I was able to discover him, and experience the skills he has to offer which includes years of experience and a master of art..."},
    {name: "Mahasvin", stars: "4 Stars", source: "Yelp", review: "Test Review 1"},
  ]
  
  let [currentReview, setCurrentReview] = useState(0);

  let changeReview = (arrow) => {
    if (arrow === "left") {
      if (currentReview === 0) {
        setCurrentReview(reviews.length - 1);
      } else {
        setCurrentReview(currentReview - 1);
      }
    } else if (arrow === "right") {
      if (currentReview === reviews.length - 1) {
        setCurrentReview(0);
      } else {
        setCurrentReview(currentReview + 1);
      }
    }

    console.log(currentReview);
    console.log(`Length: ${reviews.length}`);
  };

  return (
    <div className="flex flex-column flex-wrap justify-center p-12 sm:p-12 md:p-24 lg:px-48 gap-12 fade-in reviews">
      <div id="reviews-text">
        <h1 className="text-4xl md:text-5xl font-light main-font text-white">
          What our customers are saying...
        </h1>
      </div>

      <br />

      <div className="flex flex-row flex-wrap justify-center gap-12 arrows">
        <button className="arrow-button" onClick={() => changeReview("left")}>&lt;</button>
      </div>

      <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8 rounded-lg" id="review-panel">
        <div className="absolute inset-0 -z-10 bg-gradient-radial from-indigo-100 to-white opacity-20"></div>
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <figure className="mt-10">
            <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
              <p>
              {reviews[currentReview].review}
              </p>
            </blockquote>
            <figcaption className="mt-10">
              <img
                className="mx-auto h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="User Avatar"
              />
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-gray-900">{reviews[currentReview].name}</div>
                <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" className="fill-gray-900">
                  <circle cx="1" cy="1" r="1" />
                </svg>
                <div className="text-gray-600">{reviews[currentReview].source}</div>
                <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" className="fill-gray-900">
                  <circle cx="1" cy="1" r="1" />
                </svg>
                <div>
                {
                  // This is a hacky way to do this, but it works.
                  // I'm not sure how to do this with a for loop.
                  // I'm also not sure how to do this with a map function.
                  // I'm also not sure how to do this with a forEach function.
                  // I'm also not sure how to do this with a for...in loop.
                  // I'm also not sure how to do this with a for...of loop.
                  // I'm also not sure how to do this with a while loop.
                  // I'm also not sure how to do this with a do...while loop.

                  <svg
                      key={index}
                      className="h-4 w-4 fill-current text-yellow-500"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 2.5L9.09 8.5H2.5L7.18 12.84L5.09 18.5L12 14.5L18.91 18.5L16.82 12.84L21.5 8.5H14.91L12 2.5Z"
                      />
                    </svg>
                }
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>

      <div className="flex flex-row flex-wrap justify-center gap-12 arrows">
        <button className="arrow-button" onClick={() => changeReview("right")}>&gt;</button>
      </div>
    </div>
  );
}
