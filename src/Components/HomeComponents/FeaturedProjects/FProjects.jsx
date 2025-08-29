import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import assets from "../../../assets/assets";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const FeaturedProjects = React.memo(() => {
    const [topTab, setTopTab] = useState("RealEstate");
    const [subTab, setSubTab] = useState("All");

    const PROJECTS = {
        RealEstate: {
            All: [
                {
                    title: "Godavari Near Vijayawada - 15km Venture",
                    location: "Vijayawada, Andhra Pradesh",
                    config: "350 Plots Sold",
                    image: assets.apt1,
                },
                {
                    title: "Royyuru Near Vijyawadda 2006 - 2009 Venture",
                    location: "Vijayawada, Andhra Pradesh",
                    config: "300 Plats Sold All",
                    image: assets.apt3,
                },
                {
                    title: "Hyderabad Near Yadagiri gutta Kolanupaka",
                    location: "Hyderabad, Telangana",
                    config: "250 Plots Sold 150",
                    image: assets.apt1,
                },
            ],
        },
        FarmLands: {
            All: [
                {
                    title: "Dasrshi Praksham District",
                    location: "Praksham District, Andhra Pradesh",
                    config: "Red Sandle 2 Farm Lands",
                    image: assets.apt1,
                },
                {
                    title: "Podhili Mandal - Kesavbatla Village",
                    location: "Prakasam District, Andhra Pradesh",
                    config: "Total 30 Acres | 20 Acres Sold",
                    image: assets.apt1,
                },
                {
                    title: "Nearby Venture - Podhili Mandal",
                    location: "Prakasam District, Andhra Pradesh",
                    config: "Total 30 Acres | 10 Acres Sold",
                    image: assets.apt1,
                },
            ],
        },
        "Open Plots": {
            All: [
                {
                    title: "Godavaru Near Vijayawada 15km Venture",
                    location: "Vijayawada, Andhra Pradesh",
                    config: "350 Plats | Sold All",
                    image: assets.apt2,
                },
                {
                    title: "Chalivedhula Palem - Vijayawada 16km",
                    location: "Vijayawada, Andhra Pradesh",
                    config: "200 Plots | All Sold",
                    image: assets.apt2,
                },
                {
                    title: "Gudlavalleru - Vijayawada 50km",
                    location: "Vijayawada, Andhra Pradesh",
                    config: "Venture 3: 300 Plots | All Sold",
                    image: assets.apt2,
                },
                {
                    title: "Peda Pulipaka (Yanamalakudhuru) - Venture 1",
                    location: "Vijayawada, Andhra Pradesh",
                    config: "250 Plots | All Sold",
                    image: assets.apt1,
                },
                {
                    title: "Peda Pulipaka (Yanamalakudhuru) - Venture 2",
                    location: "Vijayawada, Andhra Pradesh",
                    config: "300 Plots | All Sold",
                    image: assets.apt1,
                },
                {
                    title: "Peda Pulipaka (Yanamalakudhuru) - Venture 3",
                    location: "Vijayawada, Andhra Pradesh",
                    config: "200 Plots | All Sold",
                    image: assets.apt1,
                },
                {
                    title: "Kapilswrapuram Vijaywada 25 Venture",
                    location: "Vijayawada, Andhra Pradesh",
                    config: "350 Plats | Sold All",
                    image: assets.apt1,
                },
                {
                    title: "Thotla Valluru Vijaywada 20Km Venture",
                    location: "Vijayawada, Andhra Pradesh",
                    config: "200 Plots | All Sold",
                    image: assets.apt1,
                },
            ],
        },
        Construction: {
            All: [
                {
                    image: assets.apt1, 
                },
            ],
        },
    };

    const topTabs = Object.keys(PROJECTS);
    const subTabs = Object.keys(PROJECTS[topTab]);
    const projects = PROJECTS[topTab][subTab] || [];

    return (
        <div className="w-full h-full bg-gradient-to-b from-black to-green-900">
            <div className="text-white gap-9 px-4 py-4 md:px-2 lg:px-30">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg sm:text-xl md:text-2xl font-semibold mb-6 text-left"
                >
                    FEATURED PROJECTS
                </motion.h2>

                {/* Top Tabs */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:flex gap-2 md:gap-[1px] mb-6 justify-center">
                    {topTabs.map((t) => (
                        <motion.button
                            initial={{ opacity: 0, y: 30 }}
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
                                    ? "bg-slate-300 text-green-900"
                                    : "bg-white text-[#a01d23]"
                                }`}
                        >
                            {t}
                        </motion.button>
                    ))}
                </div>

                {/* Sub Tabs + Navigation */}
                <div className="flex flex-wrap justify-between items-center border-b border-white mb-3">
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

                {/* Slider */}
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
                        1024: { slidesPerView: 3 },
                    }}
                    className="pb-10"
                >
                    {projects.map((p, i) => (
                        <SwiperSlide key={i}>
                            {p.title ? (
                                // Normal card
                                <div className="bg-slate-100 overflow-hidden transition flex flex-col h-full border-1">
                                    <div className="w-full h-100 overflow-hidden px-3 py-3">
                                        <img
                                            src={p.image}
                                            alt={p.title}
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="p-4 flex flex-col flex-grow space-y-3">
                                        <h3 className="text-[12px] text-black">{p.title}</h3>
                                        <p className="text-black text-[12px]">{p.location}</p>
                                        <p className="text-[12px] text-black">{p.config}</p>
                                        <button className="mt-3 w-50 bg-orange-400 text-white text-[12px] px-2 py-2 cursor-pointer hover:bg-[#ff6600] transition">
                                            View Details →
                                        </button>
                                    </div>
                                </div>
                            ) : (

                                // Construction Banner
                                <div className="w-screen">
                                    <img
                                        src={p.image}
                                        alt="img"
                                        className="w-screen h-[700px] object-cover  shadow-xl"
                                    />
                                </div>

                            )}
                        </SwiperSlide>
                    ))}
                </Swiper>

                {projects.length === 0 && (
                    <p className="text-center text-gray-500">No projects available.</p>
                )}
            </div>
        </div>
    );
});

export default FeaturedProjects;
