'use client'

import logo from "@/assets/images/logo.svg"
import Image from "next/image"
import facebook from "@/assets/images/icon-facebook.svg"
import youtube from "@/assets/images/icon-youtube.svg"
import twitter from "@/assets/images/icon-twitter.svg"
import pinterest from "@/assets/images/icon-pinterest.svg"
import instagram from "@/assets/images/icon-instagram.svg"
import { useState } from "react"

function Footer() {

    const [email, setEmail] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const validateEmail = (event) => {   
        event.preventDefault()
        
        // Validate the email using a regular expression
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        const isValidEmail = emailRegex.test(email)
    
        // Display error message if the email is not valid
        let input = document.getElementById("email")
        if (!isValidEmail) {
            setErrorMessage('Please enter a valid email')
            input.classList.add("border-bright-red")
        } else {
            // Clear the error message if the email is valid
            setErrorMessage('')
            input.classList.remove("border-bright-red")
            setEmail("")
            console.log("your email => ", email)
        }
      }


  return (
    <>
    <footer className="bg-very-dark-blue py-16">

        {/* content */}
        <div className="container mx-auto px-4 flex flex-col md:flex-row flex-wrap justify-between gap-10">

            <div className="flex flex-col gap-5 justify-between">
                {/* logo */}
                <div>
                    <Image src={logo} alt="logo" />
                </div>

                {/* social icons */}
                <div className="">
                    <ul className="flex gap-2">
                        <li><Image src={facebook} alt="social-icon" /></li>
                        <li><Image src={youtube} alt="social-icon" /></li>
                        <li><Image src={twitter} alt="social-icon" /></li>
                        <li><Image src={pinterest} alt="social-icon" /></li>
                        <li><Image src={instagram} alt="social-icon" /></li>
                    </ul>
                </div>


            </div>

            {/* navbar */}
            <div>
                <ul>
                    <li className="text-very-pale-red hover:text-bright-red cursor-pointer font-bold mb-2">Home</li>
                    <li className="text-very-pale-red hover:text-bright-red cursor-pointer font-bold mb-2">Pricing</li>
                    <li className="text-very-pale-red hover:text-bright-red cursor-pointer font-bold mb-2">Products</li>
                    <li className="text-very-pale-red hover:text-bright-red cursor-pointer font-bold mb-2">About Us</li>
                </ul>
            </div>

            <div>
                <ul>
                    <li className="text-very-pale-red hover:text-bright-red cursor-pointer font-bold mb-2">Careers</li>
                    <li className="text-very-pale-red hover:text-bright-red cursor-pointer font-bold mb-2">Community</li>
                    <li className="text-very-pale-red hover:text-bright-red cursor-pointer font-bold mb-2">Privacy Policy</li>
                </ul>
            </div>

            {/* form */}
            <div className="flex flex-col justify-between">

                <form onSubmit={(event) => validateEmail(event)} className="flex gap-4">
                    <div>
                        <input className="rounded-full px-4 py-3 border-2" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Updates in your inbox..." type="email" name="email" id="email" />
                        <label className="text-bright-red mt-3 block" htmlFor="email">{errorMessage}</label>
                    </div>
                    <div>
                    <input className="text-very-pale-red rounded-full px-4 py-3 bg-bright-red cursor-pointer" type="submit" value={"Go"} name="submit" id="submit" />
                    </div>
                </form>

                <p className="text-dark-gray-blue">
                    Copyright 2020. All Rights Reserved 
                </p>

            </div>


        </div>

    </footer>
    </>
    )
}

export default Footer