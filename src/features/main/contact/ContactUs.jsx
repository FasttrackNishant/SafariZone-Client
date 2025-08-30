import Navbar from "../navbar/Navbar";

export default function ContactUs() {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-black to-gray-950 min-h-screen text-white">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative w-full h-[50vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-orange-400 drop-shadow-lg">
            Contact Us
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto">
            Have questions? We’d love to hear from you.  
            Let’s plan your safari adventure together!
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-10">
        {[
          {
            icon: "📞",
            title: "Phone",
            detail: "+91 98765 43210",
          },
          {
            icon: "✉️",
            title: "Email",
            detail: "support@safarizone.com",
          },
          {
            icon: "📍",
            title: "Location",
            detail: "Nagpur, Maharashtra, India",
          },
        ].map((info, i) => (
          <div
            key={i}
            className="bg-gray-800 p-8 rounded-xl shadow-lg text-center hover:-translate-y-2 hover:shadow-xl transition"
          >
            <div className="text-4xl mb-4">{info.icon}</div>
            <h3 className="text-2xl font-bold text-orange-400 mb-2">
              {info.title}
            </h3>
            <p className="text-gray-300">{info.detail}</p>
          </div>
        ))}
      </section>

      {/* Contact Form */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-orange-400 mb-10">
          Send us a Message
        </h2>
        <form className="grid gap-6 bg-gray-800 p-10 rounded-xl shadow-lg">
          <input
            type="text"
            placeholder="Your Name"
            className="px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-orange-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-orange-400"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-orange-400"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-lg hover:bg-orange-600 hover:scale-105 transition"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-10 text-center text-gray-400">
        &copy; {new Date().getFullYear()}{" "}
        <span className="text-orange-400 font-semibold">SafariZone</span>. All rights reserved.
      </footer>
    </div>
  );
}