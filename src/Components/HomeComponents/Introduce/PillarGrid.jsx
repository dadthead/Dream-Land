import React from 'react'
import assets from "../../../assets/assets";

const PillarGrid = React.memo(() => {
    const pillars = [
  {
    id: 1,
    title: (<> Prime  <br/>  Location</>),
    img: assets.apt1,
    desc: "With handpicked locations, we ensure that our stakeholders unwind in places that are abound by growth and a remarkable infrastructure.",
    headline: (<>We are where you <br/> want to be</>),


  },
  {
    id: 2,
    title: (<> High  <br/>  Quality</>),
    img: assets.apt2,
    desc: "We ensure that every project is crafted with precision and world-class standards to maintain excellence.",
    headline:(<>imagination is the key  to <br/> architectural innovation</>)
  },
  {
    id: 3,
    title: (<> Smart  <br/>  Design</>),
    img: assets.apt3,
    desc: "Our projects are designed to blend functionality with modern aesthetics, ensuring timeless architecture.",
    headline:(<>Path towards excellence <br/> is paved with diligence</>)
  },
  {
    id: 4,
    title: (<> On Time  <br/>  Delivery</>),
    img: assets.apt4,
    desc: "We value your time — delivering projects promptly while upholding our commitment to quality.",
    headline:(<>Every minute counts for <br/> moments to be created</>)
  }
];

  return (
    <div>
           {/* Pillars Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 mt-27 max-w-screen-xl mx-auto">
        {pillars.map((pillar, id) => (
          <div key={id}>
            <h2 className="text-lg md:text-2xl  font-medium uppercase">
              {pillar.title}
            </h2>
            <p className="text-sm">{pillar.headline}</p>

            <div className="relative group mt-4 shadow-lg shadow-black">
              <img
                src={pillar.img}
                className="w-[500px] h-60 object-cover "
                alt={pillar.title}
                loading="lazy"
              />
              <p className="bg-black/30 absolute bottom-0  flex text-white w-full h-10" >{pillar.id}</p>
              <p className="absolute inset-0 opacity-0 group-hover:opacity-100 
                  transition-opacity duration-300 
                  flex items-center justify-center 
                  bg-black/50 text-center text-white px-3 text-sm rounded-lg">
                {pillar.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
});

export default PillarGrid