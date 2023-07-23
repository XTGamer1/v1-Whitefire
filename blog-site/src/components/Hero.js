import React from 'react';

export default function Hero() {
  return (
    <div class="container-fluid">
      <div class="row  ">
        <div class="col-lg-6 col-md-6 col-sm-12 px-md-5  hero-text lg:text-left px-8 md:px-12 lg:w-1/2 items-center">
          <div class="">
            <h5 class="display-5 fw-bold lh-1 mb-3">
              Welcome to WhiteFireCode
            </h5>
            <p class="fw-light">
              Unlock the world of coding with our interactive course! Learn
              popular languages, web development, OOP, and Git. Build projects
              and deploy websites confidently. Start coding today!"
            </p>
            <button class="px-3 btn bg-purple-700 text-white py-2 lg:px-4 lg:py-3 bg-gray-900 text-gray-200 text-xs font-semibold rounded hover:text-white hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-600 dark:hover:bg-gray-300">Free Notes</button>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 d-none d-md-block hero-img "></div>
      </div>
    </div>
  );
}
