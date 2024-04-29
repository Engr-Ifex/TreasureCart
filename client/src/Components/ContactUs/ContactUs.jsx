import React from "react";
// import { FaLocationPin, BsFillTelephoneFill, FaEnvelope } from "react-icons/fa";

function ContactUs() {
  return (
    <div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31717.758664841254!2d3.402287858174543!3d6.430026633852366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf52dc0328169%3A0x7885a1a33689a576!2sVictoria%20Island%2C%20Lagos%20106104%2C%20Lagos!5e0!3m2!1sen!2sng!4v1712413646402!5m2!1sen!2sng"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div>
        <div>
          <h1 className=" flex justify-center items centre">
            Get In Touch With Us
          </h1>
          <hr className="w-16 bg-blue-600" />
          <p className=" flex justify-center items centre">
            We are here to help. Want to learn more about our services? Please
            get in touch, we want to hear from you!
          </p>
        </div>
        <div className="flex flex-row">
          <div>
            <form>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-5">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    placeholder="Name"
                  />
                </div>

                <div className="sm:col-span-5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                </div>
                <div className="sm:col-span-5">
                  <input
                    type="number"
                    name="phone-number"
                    id="phone-number"
                    placeholder="Phone"
                  />
                </div>
                <div className="sm:col-span-7">
                  <input
                    className="w-100 h-20"
                    type="text"
                    name="message"
                    id="message"
                    placeholder="Message"
                  />
                </div>
                <button className=" w-45 h-15 bg-orange-400 text-white border-none">
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>

          <div>
            <h2>HEADQUATER</h2>
          </div>
        </div>
      </div>
      <div className="flex flex-row bg-orange-150 h-40">
        {" "}
        <div>
          {" "}
          <h2>Do You Like Treasure Cart? Download it Now</h2>
          <p>Available on playstore and AppStore</p>
        </div>
        <div>
          <button className=" w-45 h-17 bg-orange-400 text-white border-none">
            DOWNLOAD NOW! - FOREVER FREE
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;