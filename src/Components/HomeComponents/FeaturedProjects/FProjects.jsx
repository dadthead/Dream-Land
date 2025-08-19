// import React, { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import assets from "../../../assets/assets";

// export default function FeaturedProjects() {
//   const [topTab, setTopTab] = useState("Residential");
//   const [subTab, setSubTab] = useState("Apartment");

//   const PROJECTS = {
//     Residential: {
//       Apartment: [
//         {
//           title: "Folium by Sumadhura",
//           location: "Whitefield, Bengaluru",
//           config: "Premium 3 & 4 BHK Residences",
//           possession: "Dec 2025",
//           rera: "PRM/KA/RERA/1251/446/PR/280222/004738",
//           image: assets.apt1,
//         },
//         {
//           title: "Gardens by the Brook",
//           location: "Shamshabad, Hyderabad",
//           config: "2, 2.5 & 3 Bed Residences",
//           possession: "Feb 2028",
//           rera: "P02400004441",
//           image: assets.apt4,
//         },
//         {
//           title: "The Olympus by Sumadhura",
//           location: "Nanakramguda, Hyderabad",
//           config: "Ultra-luxe 2, 2.5, 3 & 3.5 BHK",
//           possession: "Jan 2027",
//           rera: "P02400003072",
//           image: assets.apt3,
//         },
//       ],
//       Villas: [
//         {
//           title: "Pebble County",
//           location: "Devanahalli, Bengaluru",
//           config: "4 & 5 BHK Villas",
//           possession: "Mar 2027",
//           rera: "PRM/KA/1234/5678",
//           image: assets.apt4,
//         },
//       ],
//     },
//     Commercial: {
//       All: [
//         {
//           title: "Sumadhura Business Park",
//           location: "ORR, Hyderabad",
//           config: "Grade A Office Spaces",
//           possession: "Q4 2026",
//           rera: "P02400001234",
//           image: assets.apt1,
//         },
//       ],
//     },
//     "Plotted Development": {
//       All: [
//         {
//           title: "Verdant Enclave",
//           location: "Sarjapur Road, Bengaluru",
//           config: "Premium Villa Plots",
//           possession: "Ready to Register",
//           rera: "PRM/KA/9988/7766",
//           image: assets.apt2,
//         },
//       ],
//     },
//     "Logistics & Warehousing": {
//       All: [
//         {
//           title: "LogiHub West",
//           location: "Bachupally, Hyderabad",
//           config: "Built-to-suit Warehouses",
//           possession: "Phase 1 – 2026",
//           rera: "N/A",
//           image: assets.apt3,
//         },
//       ],
//     },
//   };

//   const topTabs = Object.keys(PROJECTS);
//   const subTabs = Object.keys(PROJECTS[topTab]);
//   const projects = PROJECTS[topTab][subTab] || [];

//   return (
//     <section className="bg-white text-[#a01d23] py-12 px-46">
//       <h2 className="text-3xl font-bold mb-6 text-center">FEATURED PROJECTS</h2>

//       {/* Top Tabs */}
//       <div className="flex gap-4 mb-6 flex-wrap items-center justify-center ">
//         {topTabs.map((t) => (
//           <button
//             key={t}
//             onClick={() => {
//               setTopTab(t);
//               setSubTab(Object.keys(PROJECTS[t])[0]);
//             }}
//             className={`px-6 py-2 rounded-md transition  ${
//               topTab === t
//                 ? "bg-[#f16507] text-white"
//                 : "bg-white text-black hover:border-2 hover:text-[#f16507]"
//             }`}
//           >
//             {t}
//           </button>
//         ))}
//       </div>

//       {/* Sub Tabs */}
//       <div className="flex gap-8 border-b border-[#a01d23]/30 mb-6">
//         {subTabs.map((s) => (
//           <button
//             key={s}
//             onClick={() => setSubTab(s)}
//             className={`py-2 relative ${
//               subTab === s ? "text-[#a01d23] font-semibold" : "text-[#a01d23]/90"
//             }`}
//           >
//             {s}
//             {subTab === s && (
//               <span className="absolute left-0 -bottom-[1px] h-[2px] w-full bg-[#a01d23]/70" />
//             )}
//           </button>

//         ))}

//         <div className="flex px-220 gap-1">
//           <button className="custom-prev bg-[#a01d23] text-white w-10 h-10 flex items-center justify-center ">
//             ‹
//           </button>
//           <button className="custom-next bg-[#a01d23] text-white w-10 h-10 flex items-center justify-center border-l border-[#a01d23]/30">
//             ›
//           </button>
//         </div>
//       </div>


//       {/* Swiper Carousel */}
//       {projects.length > 0 ? (
//         <Swiper
//           modules={[Navigation]}
//           navigation
//           spaceBetween={20}
//           slidesPerView={3}
//           loop
//           className="pb-10"
//         >
//           {projects.map((p, i) => (
//             <SwiperSlide key={i}>
//               <div className="bg-[#a01d23]  text-white rounded-lg shadow-md overflow-hidden">
//                 <img
//                   src={p.image}
//                   alt={p.title}
//                   className="h-56 w-full object-cover"
//                 />
//                 <div className="p-4 ">
//                   <h3 className="text-lg font-semibold">{p.title}</h3>
//                   <p className="text-[#ff6600]">{p.location}</p>
//                   <p className="text-sm mt-2">{p.config}</p>
//                   <p className="text-sm">Possession: {p.possession}</p>
//                   <p className="text-xs text-[#ff6600]">RERA: {p.rera}</p>
//                   <button className="mt-3 bg-[#ff6600] text-white px-4 py-2 rounded-md hover:bg-[#a01d23] ">
//                     View Details →
//                   </button>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       ) : (
//         <p>No projects available.</p>
//       )}
//     </section>
//   );
// }






import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import assets from "../../../assets/assets";

export default function FeaturedProjects() {
    const [topTab, setTopTab] = useState("Residential");
    const [subTab, setSubTab] = useState("Apartment");

    const PROJECTS = {
        Residential: {
            Apartment: [
                {
                    title: "Folium by Sumadhura",
                    location: "Whitefield, Bengaluru",
                    config: "Premium 3 & 4 BHK Residences",
                    possession: "Dec 2025",
                    rera: "PRM/KA/RERA/1251/446/PR/280222/004738",
                    image: assets.apt1,
                },
                {
                    title: "Gardens by the Brook",
                    location: "Shamshabad, Hyderabad",
                    config: "2, 2.5 & 3 Bed Residences",
                    possession: "Feb 2028",
                    rera: "P02400004441",
                    image: assets.apt4,
                },
                {
                    title: "The Olympus by Sumadhura",
                    location: "Nanakramguda, Hyderabad",
                    config: "Ultra-luxe 2, 2.5, 3 & 3.5 BHK",
                    possession: "Jan 2027",
                    rera: "P02400003072",
                    image: assets.apt3,
                },
            ],
            Villas: [
                {
                    title: "Pebble County",
                    location: "Devanahalli, Bengaluru",
                    config: "4 & 5 BHK Villas",
                    possession: "Mar 2027",
                    rera: "PRM/KA/1234/5678",
                    image: assets.apt4,
                },
            ],
        },
        Commercial: {
            All: [
                {
                    title: "Sumadhura Business Park",
                    location: "ORR, Hyderabad",
                    config: "Grade A Office Spaces",
                    possession: "Q4 2026",
                    rera: "P02400001234",
                    image: assets.apt1,
                },
            ],
        },
        "Plotted Development": {
            All: [
                {
                    title: "Verdant Enclave",
                    location: "Sarjapur Road, Bengaluru",
                    config: "Premium Villa Plots",
                    possession: "Ready to Register",
                    rera: "PRM/KA/9988/7766",
                    image: assets.apt2,
                },
            ],
        },
        "Logistics & Warehousing": {
            All: [
                {
                    title: "LogiHub West",
                    location: "Bachupally, Hyderabad",
                    config: "Built-to-suit Warehouses",
                    possession: "Phase 1 – 2026",
                    rera: "N/A",
                    image: assets.apt3,
                },
            ],
        },
    };

    const topTabs = Object.keys(PROJECTS);
    const subTabs = Object.keys(PROJECTS[topTab]);
    const projects = PROJECTS[topTab][subTab] || [];

    return (
        <section className="bg-white text-[#a01d23] py-12 px-4 md:px-12 lg:px-60">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
                FEATURED PROJECTS
            </h2>

            {/* Top Tabs */}
            <div className="flex flex-wrap gap-3 mb-6 justify-center">
                {topTabs.map((t) => (
                    <button
                        key={t}
                        onClick={() => {
                            setTopTab(t);
                            setSubTab(Object.keys(PROJECTS[t])[0]);
                        }}
                        className={`px-5 py-2 rounded-md transition text-sm md:text-base ${topTab === t
                            ? " text-[#ff6600] : underline "
                            : "bg-white  text-black hover:underline hover:text-[#ff6600]"
                            }`}
                    >
                        {t}
                    </button>
                ))}
            </div>

            {/* Sub Tabs + Navigation */}
            <div className="flex flex-wrap justify-between items-center border-b border-[#a01d23]/30 mb-6 ">
                <div className="flex gap-6 flex-wrap">
                    {subTabs.map((s) => (
                        <button
                            key={s}
                            onClick={() => setSubTab(s)}
                            className={`py-2 relative text-sm md:text-base ${subTab === s
                                ? "text-[#a01d23] font-semibold"
                                : "text-[#a01d23]/90"
                                }`}
                        >
                            {s}
                            {subTab === s && (
                                <span className="absolute left-0 -bottom-[1px] h-[2px] w-full bg-[#a01d23]/70" />
                            )}
                        </button>
                    ))}




                </div>


                {/* Nav buttons */}
                <div className="flex gap-1 mt-3  md:mt-0">
                    <button className="custom-prev bg-[#a01d23] text-white w-9 h-9 flex items-center justify-center hover:bg-[#8a171c] transition ">
                        ‹
                    </button>
                    <button className="custom-next bg-[#a01d23] text-white w-8 h-9 flex items-center justify-center border-l border-[#a01d23]/30 hover:bg-[#8a171c] transition">
                        ›
                    </button>
                </div>

            </div>

            {/* Swiper Carousel */}
            {projects.length > 0 ? (
                <Swiper
                    modules={[Navigation]}
                    navigation={{
                        nextEl: ".custom-next",
                        prevEl: ".custom-prev",
                    }}
                    onSwiper={(swiper) => {
                        setTimeout(() => {
                            swiper.params.navigation.prevEl = ".custom-prev";
                            swiper.params.navigation.nextEl = ".custom-next";
                            swiper.navigation.init();
                            swiper.navigation.update();
                        });
                    }}
                    loop
                    spaceBetween={20}
                    breakpoints={{
                        // 320: { slidesPerView: 1 }, // Mobile
                        // 640: { slidesPerView: 1.2 }, // Small tablets
                        768: { slidesPerView: 2 }, // Tablets
                        1024: { slidesPerView: 2 }, // Laptops
                    }}
                    className="pb-10"
                >
                    {projects.map((p, i) => (
                        <SwiperSlide key={i}>
                            <div className="bg-[#a01d23] text-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                                <img
                                    src={p.image}
                                    alt={p.title}
                                    className="h-56 w-full object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold">{p.title}</h3>
                                    <p className="text-[#ff6600]">{p.location}</p>
                                    <p className="text-sm mt-2">{p.config}</p>
                                    <p className="text-sm">Possession: {p.possession}</p>
                                    <p className="text-xs text-[#ff6600]">RERA: {p.rera}</p>
                                    <button className="mt-3 w-full bg-[#ff6600] text-white px-4 py-2 rounded-md hover:bg-[#a01d23] transition">
                                        View Details →
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : (
                <p className="text-center text-gray-500">No projects available.</p>
            )}
        </section>
    );
}
