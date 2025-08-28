
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import assets from "../../../assets/assets";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const FeaturedProjects=React.memo(()=>{
    const [topTab, setTopTab] = useState("RealEstate");
    const [subTab, setSubTab] = useState("All");

    const PROJECTS = {
        RealEstate: {
            All: [
                {
                    title: "Folium by Sumadhura",
                    location: "Whitefield, Bengaluru",
                    config: "Premium 3 & 4 BHK Residences",
                    possession: "Dec 2025",
                    rera: "PRM/KA/RERA/1251/446/PR",
                    image: assets.apt1,
                },
                {
                    title: "Gardens by the Brook",
                    location: "Shamshabad, Hyderabad",
                    config: "2, 2.5 & 3 Bed Residences",
                    possession: "Feb 2028",
                    rera: "P02400004441",
                    image: assets.apt3,
                },
                {
                    title: "Olympus by Sumadhura",
                    location: "Nanakramguda, Hyderabad",
                    config: "Ultra-luxe 2, 2.5, 3 & 3.5 BHK",
                    possession: "Jan 2027",
                    rera: "P02400003072",
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
            ],
            // Villas: [
            //     {
            //         title: "Pebble County",
            //         location: "Devanahalli, Bengaluru",
            //         config: "4 & 5 BHK Villas",
            //         possession: "Mar 2027",
            //         rera: "PRM/KA/1234/5678",
            //         image: assets.apt1,
            //     },
            // ],
        },
        FarmLands: {
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
        "Open Plots": {
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
        "Construction": {
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
        <div className="w-full h-full bg-gradient-to-b from-black to-green-900   ">

            <section className=" text-white  gap-9 px-4 py-4  md:px-2 lg:px-30">
                <motion.h2
                
                 initial={{ opacity: 0,  y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.2 }} className="text-lg sm:text-xl md:text-2xl font-semibold mb-6 text-left">
                    FEATURED PROJECTS
                </motion.h2>



                <div className="grid grid-cols-2 sm:grid-cols-3 md:flex gap-2 md:gap-[1px]  mb-6 justify-center ">
                    {topTabs.map((t) => (
                        < motion.button
              initial={{ opacity: 0,  y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.2 }}
                            key={t}
                            onClick={() => {
                                setTopTab(t);
                                setSubTab(Object.keys(PROJECTS[t])[0]);
                            }}
                            className={`px-4 py-2 cursor-pointer md:px-10 lg:px-26 transition text-xs sm:text-sm md:text-base lg:text-[12px] text-center border border-orange-500 
                            ${topTab === t
                                    ? "bg-slate-300 text-green-900 "
                                    : "bg-white text-[#a01d23] "}`} >
                            {t}
                        </motion.button>
                    ))}
                </div>



                {/* Sub Tabs + Navigation */}
                <div className="flex flex-wrap justify-between items-center border-b  border-white mb-3 ">
                    <div className="flex gap-6 flex-wrap">
                        {subTabs.map((s) => (
                            <button
                                key={s}
                                onClick={() => setSubTab(s)}
                                className={`py-2 relative text-md md:text-base mb-2 ${subTab === s
                                    ? "text-white font-semibold"
                                    : "text-white hover:text-orange-400"
                                    }`}
                            >
                                {s}
                                {subTab === s && (
                                    <span className="absolute left-0 -bottom-[1px] h-[2px] w-full bg-orange-400/70" />
                                )}
                            </button>
                        ))}

                    </div>

                    <div className="flex gap-1 mt-3 md:mt-0">
                        <div className="custom-prev bg-orange-400 text-white w-9 h-9 flex items-center justify-center hover:bg-[#8a171c] transition cursor-pointer">
                            <ChevronLeft size={20} />
                        </div>
                        <div className="custom-next bg-orange-400 text-white w-9 h-9 flex items-center justify-center border-l border-[#a01d23]/30 hover:bg-[#8a171c] transition cursor-pointer">
                            <ChevronRight size={20} />
                        </div>
                    </div>


                </div>

                <Swiper 
                    modules={[Navigation]}
                    navigation={{
                        nextEl: ".custom-next",
                        prevEl: ".custom-prev",
                    }}
                    loop={projects.length > 0}
                    watchOverflow={false}
                    spaceBetween={30}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: {
                            slidesPerView: 3

                        },
                    }}
                    className="pb-10"
                >


                    {projects.map((p, i) => (
                        <SwiperSlide key={i}>
                            <div className="bg-slate-100 rounded-t-full  overflow-hidden rounded-md transition flex flex-col h-full border-1">

                                {/* Fixed height image wrapper */}
                                <div className="w-full  h-100 overflow-hidden px-3 py-3 rounded-md ">
                                    <img
                                        src={p.image}
                                        alt={p.title}
                                        className="w-full h-full  object-cover rounded-t-full"
                                        loading="lazy"
                                    />
                                </div>

                                <div className="p-4 flex flex-col flex-grow">
                                    <h3 className="text-lg text-black font-semibold">{p.title}</h3>
                                    <p className="text-black">{p.location}</p>
                                    <p className="text-sm mt-2 text-slate-600">{p.config}</p>
                                    <p className="text-sm text-slate-600">Possession: {p.possession}</p>
                                    <p className="text-xs text-slate-400">RERA: {p.rera}</p>
                                    <button className="mt-3 w-40 bg-orange-400 text-white px-4 py-2 cursor-pointer  hover:bg-[#ff6600] transition">
                                        View Details →
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>
                {projects.length > 0 ? null : (
                    <p className="text-center text-gray-500">No projects available.</p>
                )}

            </section>
        </div>
    );
})

export default FeaturedProjects