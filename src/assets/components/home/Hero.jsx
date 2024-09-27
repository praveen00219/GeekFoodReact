import React from "react";
import styles from "./Home.module.css";

function Hero() {
  return (
    <div className={styles.homeSection}>
      <div className="flex items-center justify-center h-full">
        <div className={styles.text_content}>
          <div className="  flex flex-col text-center gap-3 items-center justify-center">
            <h1 className="text-5xl font-extrabold">
              Let us find your <br />
              <span className="text-[#be113c]">Forever Food.</span>
            </h1>
            <div className="w-10/12">
              <p className="text-lg text-gray-800 font-semibold">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nesciunt illo tenetur fuga ducimus numquam ea!
              </p>
            </div>
            <div className="flex gap-5 text-left mt-4">
              <button className="bg-[#be113c] font-semibold py-2 px-7 text-md text-white rounded">
                Search Now
              </button>
              <button className="py-2 px-7 font-semibold text-md text-gray-800 bg-white rounded">
                Know more
              </button>
            </div>
          </div>
        </div>
        <div className={`${styles.rightpart} w-[50%]`}></div>
      </div>
    </div>
  );
}

export default Hero;
