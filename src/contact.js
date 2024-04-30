
export default function Contact() {

  return (
    <div className="min-w-screen min-h-screen flex items-center">
      <div className="shadow-2xl max-w-2xl py-10 flex flex-col justify-center items-center rounded-xl mx-auto border border-1 border-orange-500">

        <h2 className="text-2xl font-bold text-white sm:text-4xl">Contact Us</h2>
        <p className="pt-4 text-sm text-white sm:text-lg">
          Get in touch with us to know more.
        </p>

        <form action="#" method="POST" className="sm:mt-20 min-w-full px-12" style={{marginTop:30}}>
          <div className="min-w-full flex flex-col justify-between">
            
            <div className="flex flex-row justify-between">
                <div className="mr-4">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="w-full rounded-md bg-transparent border-2 border-gray-400 text-white shadow-sm placeholder-gray-400 focus:ring focus:ring-white focus:border-0"
                    placeholder="First Name"
                  />
                </div>
                <div className="ml-4">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="w-full rounded-md bg-transparent border-2 border-gray-400 text-white shadow-sm placeholder-gray-400 focus:ring focus:ring-white focus:border-0"
                    placeholder="Last Name"
                  />
                </div>
            </div>
            
              <div className="mt-4">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="w-full rounded-md bg-transparent border-2 border-gray-400 text-white shadow-sm placeholder-gray-400 focus:ring focus:ring-white focus:border-0"
                  placeholder="Email Address"
                />
              </div>
              <div className="mt-4">
                <input
                  type="tel"
                  name="phone-number"
                  id="phone-number"
                  autoComplete="tel"
                  className="w-full rounded-md bg-transparent border-2 border-gray-400 text-white shadow-sm placeholder-gray-400 focus:ring focus:ring-white focus:border-0"
                  placeholder="Phone Number"
                />
              </div>
              <div className="mt-4">
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="w-full rounded-md bg-transparent border-2 border-gray-400 text-white shadow-sm placeholder-gray-400 focus:ring focus:ring-white focus:border-0"
                  placeholder="Type your message here ..."
                  defaultValue={''}
                />
              </div>
            
          </div>

          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-lg bg-orange-500 px-3.5 py-2.5 text-center text-md font-semibold text-white shadow-sm hover:bg-orange-600"
            >
              Let's talk
            </button>
          </div>
        </form>
      </div>

    </div>
  )
}
