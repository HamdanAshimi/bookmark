import { useState } from "react";

import Tab1Image from "../assets/images/illustration-features-tab-1.svg";
import Tab2Image from "../assets/images/illustration-features-tab-2.svg";
import Tab3Image from "../assets/images/illustration-features-tab-3.svg";

export default function FeaturesTabs() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <section id="tabs">
      <div className="container relative mx-auto my-6 mb-32 mt-12 px-6">
        <div className="bg-tabs"></div>

        {/* Tabs */}
        <div className="mx-auto mb-6 flex max-w-xl flex-col justify-center border-b md:flex-row md:space-x-10">
          {/* Tab 1 */}
          <button
            onClick={() => setActiveTab(1)}
            className={`flex justify-center border-b text-center text-gray-600 hover:text-softRed md:w-1/3 md:border-b-0 ${
              activeTab === 1 ? "border-softRed" : ""
            }`}
          >
            <div
              className={`py-5 ${
                activeTab === 1 ? "border-b-4 border-softRed" : ""
              }`}
            >
              Simple Bookmarking
            </div>
          </button>

          {/* Tab 2 */}
          <button
            onClick={() => setActiveTab(2)}
            className={`flex justify-center border-b text-center text-gray-600 hover:text-softRed md:w-1/3 md:border-b-0 ${
              activeTab === 2 ? "border-softRed" : ""
            }`}
          >
            <div
              className={`py-5 ${
                activeTab === 2 ? "border-b-4 border-softRed" : ""
              }`}
            >
              Speedy Searching
            </div>
          </button>

          {/* Tab 3 */}
          <button
            onClick={() => setActiveTab(3)}
            className={`flex justify-center border-b text-center text-gray-600 hover:text-softRed md:w-1/3 md:border-b-0 ${
              activeTab === 3 ? "border-softRed" : ""
            }`}
          >
            <div
              className={`py-5 ${
                activeTab === 3 ? "border-b-4 border-softRed" : ""
              }`}
            >
              Easy Sharing
            </div>
          </button>
        </div>

        {/* Panel 1 */}
        {activeTab === 1 && (
          <div className="flex flex-col py-5 md:flex-row md:space-x-7">
            <div className="flex justify-center md:w-1/2">
              <img src={Tab1Image} alt="" className="relative z-10" />
            </div>

            <div className="flex flex-col space-y-8 md:w-1/2">
              <h3 className="mt-32 text-center text-3xl font-semibold md:mt-0 md:text-left">
                Bookmark in one click
              </h3>

              <p className="max-w-md text-center text-grayishBlue md:text-left">
                Organize your bookmarks however you like. Our simple
                drag-and-drop interface gives you complete control over how you
                manage your favourite sites.
              </p>

              <div className="mx-auto md:mx-0">
                <a
                  href="#"
                  className="mt-4 rounded-lg border-2 border-white bg-softBlue px-6 py-3 font-semibold text-white hover:border-softBlue hover:bg-white hover:text-softBlue md:inline-flex"
                >
                  More Info
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Panel 2 */}
        {activeTab === 2 && (
          <div className="flex flex-col py-5 md:flex-row md:space-x-7">
            <div className="flex justify-center md:w-1/2">
              <img src={Tab2Image} alt="" className="relative z-10" />
            </div>

            <div className="flex flex-col space-y-8 md:w-1/2">
              <h3 className="mt-14 text-center text-3xl font-semibold md:mt-0 md:text-left">
                Intelligent search
              </h3>

              <p className="max-w-md text-center text-grayishBlue md:text-left">
                Our powerful search feature will help you find saved sites in no
                time at all. No need to trawl through all of your bookmarks.
              </p>

              <div className="mx-auto md:mx-0">
                <a
                  href="#"
                  className="mt-4 rounded-lg border-2 border-white bg-softBlue px-6 py-3 font-semibold text-white hover:border-softBlue hover:bg-white hover:text-softBlue md:inline-flex"
                >
                  More Info
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Panel 3 */}
        {activeTab === 3 && (
          <div className="flex flex-col py-5 md:flex-row md:space-x-7">
            <div className="flex justify-center md:w-1/2">
              <img src={Tab3Image} alt="" className="relative z-10" />
            </div>

            <div className="flex flex-col space-y-8 md:w-1/2">
              <h3 className="mt-14 text-center text-3xl font-semibold md:mt-0 md:text-left">
                Share your bookmarks
              </h3>

              <p className="max-w-md text-center text-grayishBlue md:text-left">
                Easily share your bookmarks and collections with others. Create
                a shareable link that you can send at the click of a button.
              </p>

              <div className="mx-auto md:mx-0">
                <a
                  href="#"
                  className="mt-4 rounded-lg border-2 border-white bg-softBlue px-6 py-3 font-semibold text-white hover:border-softBlue hover:bg-white hover:text-softBlue md:inline-flex"
                >
                  More Info
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
