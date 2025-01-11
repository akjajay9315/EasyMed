import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm">
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Welcome to MedOji, your trusted partner in managing healthcare
            effortlessly. We simplify doctor appointments and health record
            management, ensuring convenience and efficiency. Driven by
            excellence in healthcare technology, MedOji integrates advanced
            solutions for a superior user experience. From your first
            appointment to ongoing care, we’re here to support you. Our vision
            is to create a seamless connection between patients and providers,
            ensuring easy access to care whenever needed.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+91-8595575215</li>
            <li>akjajay9315@gmail.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2025 @ MedOji.com - All Right Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer
