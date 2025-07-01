import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-zinc-900 text-gray-200 font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
          Fabrico
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-zinc-300">
          Redefining fashion with timeless designs and contemporary spirit.
        </p>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none"></div>
      </section>

      {/* Our Story */}
      <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 py-20 px-4 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-white">
            Our Story
          </h2>
          <p className="text-zinc-400">
            Founded with a passion for authenticity and creativity, Fabrico
            emerged as a response to fast fashion. We believe clothing is an
            expression of individuality, crafted responsibly.
          </p>
          <p className="text-zinc-400">
            From classic essentials to modern statement pieces, our collections
            are designed to inspire confidence and style.
          </p>
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&h=800"
            alt="Fabrico Story"
            className="rounded-xl shadow-2xl ring-1 ring-zinc-700"
          />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-zinc-800">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-semibold text-white mb-4">
            Why Shop with Fabrico?
          </h2>
          <p className="text-zinc-400">
            Experience the difference with our commitment to excellence.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Exceptional Quality",
              text: "Premium fabrics and meticulous craftsmanship in every stitch.",
              icon: "🧵",
            },
            {
              title: "Ethical Production",
              text: "Sustainable sourcing and fair labor practices are our priority.",
              icon: "🌱",
            },
            {
              title: "Fast, Secure Delivery",
              text: "Lightning-fast shipping and hassle-free returns worldwide.",
              icon: "🚚",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-zinc-900 p-6 rounded-xl border border-zinc-700 hover:border-purple-500 transition"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="font-bold text-xl mb-2 text-white">
                {item.title}
              </h3>
              <p className="text-zinc-400">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Values */}
      <section className="max-w-6xl mx-auto py-20 px-4">
        <h2 className="text-3xl font-semibold text-center mb-10 text-white">
          Our Core Values
        </h2>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          {[
            "Sustainability",
            "Innovation",
            "Integrity",
            "Customer-First"
          ].map((value, i) => (
            <div
              key={i}
              className="bg-zinc-800 border border-zinc-700 p-6 rounded-lg hover:border-purple-500 transition"
            >
              <h4 className="text-lg font-bold text-white mb-2">{value}</h4>
              <p className="text-zinc-400 text-sm">
                {value === "Sustainability" &&
                  "We reduce environmental impact in every step."}
                {value === "Innovation" &&
                  "Constantly evolving our designs to inspire."}
                {value === "Integrity" &&
                  "Honest practices and full transparency."}
                {value === "Customer-First" &&
                  "Your satisfaction is our top priority."}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 bg-zinc-800">
        <h2 className="text-3xl font-semibold text-center mb-10 text-white">
          Meet Our Team
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: "Aarohi Sharma",
              role: "Creative Director",
              img: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            {
              name: "Rohan Verma",
              role: "Operations Lead",
              img: "https://randomuser.me/api/portraits/men/32.jpg",
            },
            {
              name: "Sanya Kapoor",
              role: "Head Designer",
              img: "https://randomuser.me/api/portraits/women/68.jpg",
            },
          ].map((member, index) => (
            <div
              key={index}
              className="backdrop-blur-sm bg-zinc-900/70 border border-zinc-700 p-6 rounded-xl text-center shadow-xl hover:border-purple-500 transition"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover ring-2 ring-purple-500"
              />
              <h3 className="font-bold text-lg text-white">{member.name}</h3>
              <p className="text-zinc-400 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
