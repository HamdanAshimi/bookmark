export default function Newsletter() {
  return (
    <section id="newsletter" className="bg-softBlue">
      {/* Main Container */}
      <div className="mx-auto max-w-lg py-24">
        <p className="mb-6 text-center text-lg uppercase tracking-widest text-white">
          35,000+ Already Joined
        </p>

        <h2 className="mb-6 px-3 text-center text-3xl font-semibold text-white md:text-4xl">
          Stay up-to-date with what we're doing
        </h2>

        {/* Form */}
        <form className="mx-auto flex max-w-2xl flex-col items-start justify-center space-y-6 md:flex-row md:space-x-4 md:space-y-0 md:px-0">
          {/* Input & Button Container */}
          <div className="mx-auto flex flex-col items-center justify-between md:mx-0 md:flex-row">
            <input
              type="text"
              className="mb-4 flex-1 rounded-lg border border-white bg-white px-6 pb-2 pt-3 focus:outline-none md:mb-0 md:mr-3"
              placeholder="Enter your email address"
            />

            <input
              type="submit"
              className="inline-flex cursor-pointer rounded-lg bg-softRed px-6 py-3 text-center font-semibold text-white duration-200 hover:opacity-90 focus:outline-none"
              value="Contact Us"
            />
          </div>
        </form>
      </div>
    </section>
  );
}
