export default function Updates() {
  return (
    // style={{
    //   backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1037%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='url(%26quot%3b%23SvgjsLinearGradient1038%26quot%3b)'%3e%3c/rect%3e%3cpath d='M 0%2c71 C 57.6%2c100.6 172.8%2c229.6 288%2c219 C 403.2%2c208.4 460.8%2c5.8 576%2c18 C 691.2%2c30.2 748.8%2c269.6 864%2c280 C 979.2%2c290.4 1036.8%2c83.4 1152%2c70 C 1267.2%2c56.6 1382.4%2c184.4 1440%2c213L1440 560L0 560z' fill='%23184a7e'%3e%3c/path%3e%3cpath d='M 0%2c353 C 72%2c374.6 216%2c450 360%2c461 C 504%2c472 576%2c407.2 720%2c408 C 864%2c408.8 936%2c470 1080%2c465 C 1224%2c460 1368%2c399.4 1440%2c383L1440 560L0 560z' fill='%232264ab'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1037'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='15.28%25' y1='-39.29%25' x2='84.72%25' y2='139.29%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1038'%3e%3cstop stop-color='%230e2a47' offset='0'%3e%3c/stop%3e%3cstop stop-color='%2300459e' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e")`
    // }}
    <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 sm:py-24 lg:py-32" >
      <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
        <div className="max-w-xl lg:max-w-lg">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Subscribe for latest collections.</h2>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            Get an email for every new arrivals of shirts and best designs with their pricing.
          </p>
          <div className="mt-6 flex max-w-md gap-x-4">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="flex-none rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
            >
              Subscribe
            </button>
          </div>
        </div>
        <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
          <div className="flex flex-col items-start">
            <dt className="mt-4 font-semibold text-white">Important Aspects</dt>
            <dd className="mt-2 leading-7 text-gray-400">
              Get information about the latest trends, design, patterns and lot more informative stuff.
            </dd>
          </div>
          <div className="flex flex-col items-start">
            <dt className="mt-4 font-semibold text-white">No Advertisment</dt>
            <dd className="mt-2 leading-7 text-gray-400">
              We only sent you mail regarding latest designs without any drama.
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}
