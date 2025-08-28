import React from 'react'
import { Send } from 'lucide-react'

const ContactForm = () => {

    return (
        <>
        
        <div className='bg-[#55191c] w-full h-[80vh] flex justify-center items-center'>
        <div className="bg-[#fefacf]/10 backdrop-blur-md text-[#fefacf] p-8 md:p-12 w-full max-w-4xl ">
                <form className='space-y-4' >
                    <h2 className='text-2xl md:text-3xl font-semibold mb-4'>GET IN TOUCH</h2>
                    <p>Connect with us to turn your real estate dreams into reality.</p>
                    <hr className='w-full h-[0.5px] bg-gray-300 opacity-40 mb-6' />
                    <div className='flex md:flex-row flex-col gap-4'>
                        <input type="text" placeholder='Name' className='outline-none border-b-1  px-2 py-2 border-slate-400  w-full' />
                        <input type="email" placeholder='Email' className='outline-none  px-2 py-2 border-b-1 border-slate-400 w-full' />
                    </div>
                    <div className="flex md:flex-row flex-col gap-4">
                        <input
                            type="tel"
                            placeholder="Phone"
                            className="outline-none border-b-1 border-slate-400 w-full px-2 py-2 " />

                        <select className="outline-none border-b-1 border-slate-400 bg-transparent w-full px-2 py-2">
                            <option className='text-slate-400 text-light' value="" disabled selected>
                                Select Subject
                            </option>
                            <option className='bg-amber-100' value="residential">Residential</option>
                            <option  className='bg-amber-100'value="commercial">Commercial</option>
                            <option  className='bg-amber-100'value="land">Land</option>
                        </select>
                    </div>

                    <textarea
                        placeholder="Message"
                        className="outline-none border-b-1 border-slate-400 w-full  px-2 py-2"
                        ></textarea>
                    <button className='bg-slate-400    text-white px-2 py-2 rounded-md hover:bg-gray-800 transition ease-in-out duration-300 flex gap-2'> <Send/> Submit</button>

                </form>
            </div>
        </div>

     </>
    )
}

export default ContactForm


