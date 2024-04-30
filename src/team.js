    export default function Team() {
      const people = [
        {
          name: 'Lokesh Kodiya',
          role: 'Owner',
          imageUrl:
            'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
        {
          name: 'Rajesh Kodiya',
          role: 'Owner',
          imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          name: 'Vaibhav Kodiya',
          role: 'Co-Founder / CEO',
          imageUrl:
            'https://images.pexels.com/photos/20042419/pexels-photo-20042419/free-photo-of-a-pheasant-with-a-bright-red-blue-and-green-head.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
        {
          name: 'Ronit Sanghvi',
          role: 'Digital Department Head',
          imageUrl:
            'https://images.pexels.com/photos/14279332/pexels-photo-14279332.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
    
      ]
    
      return (
      <div className="py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-l from-teal-500 to-orange-500 text-transparent bg-clip-text sm:text-4xl">Meet our team</h2>
            <p className="mt-6 text-lg leading-8 text-gray-400 text-justify">
                Where Creative Minds Seamlessly Unite to Craft Quality Threads, Fashioning Success Stories Stitch by Stitch.
            </p>
          </div>
          
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img className="h-20 w-20 rounded-full" src={person.imageUrl} alt="" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-white">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-orange-500">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  