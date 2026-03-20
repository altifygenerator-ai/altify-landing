"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="container">

      {/* HEADER */}
      <div className="header">
        <div className="logo">
          <Image src="/logo.png" width={32} height={32} alt="Altify logo" />
          Altify
        </div>

        <button
          className="btn btn-primary"
          onClick={() => {
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Get Free Preview
        </button>
      </div>

      {/* HERO */}
      <section className="hero">
        <div className="hero-text">
          <h1>Get More Customers From Google</h1>
          <p>
            Simple websites for local businesses that help people find you and call you.
          </p>

          <div className="btn-group">
            <button
              className="btn btn-primary"
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get Free Preview
            </button>

            <button
              className="btn btn-secondary"
              onClick={() => (window.location.href = "tel:+1234567890")}
            >
              Call Now
            </button>
          </div>
        </div>

        <Image
          src="/profile.jpg"
          width={400}
          height={500}
          alt="Profile"
          className="profile"
        />
      </section>

      {/* PROBLEM */}
      <section className="section">
        <h2>Most Businesses Are Invisible on Google</h2>
        <p className="muted">
          Many local businesses rely on Facebook. That works for people who already know you.
          But when someone searches on Google, they’re calling someone else.
        </p>
      </section>

      {/* SOLUTION */}
      <section className="section grid grid-2">
        <div className="card">Show up on Google</div>
        <div className="card">Make it easy to call</div>
        <div className="card">Look professional and trustworthy</div>
        <div className="card">Work perfectly on phones</div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section">
        <h2>How It Works</h2>
        <div className="grid grid-3">
          <div className="card">1. Free preview of your website</div>
          <div className="card">2. You decide if you want it live</div>
          <div className="card">3. I handle everything for you</div>
        </div>
      </section>

      {/* INCLUDED */}
      <section className="section">
        <h2>What’s Included</h2>
        <div className="grid grid-2">
          <div className="card">Custom website</div>
          <div className="card">Mobile-friendly design</div>
          <div className="card">Click-to-call button</div>
          <div className="card">Basic SEO setup</div>
          <div className="card">Hosting + maintenance</div>
        </div>
      </section>

      {/* PROJECT */}
      <section className="section project">
        <h2>Real Tools I’ve Built</h2>
        <div className="grid grid-2">
          <Image
            src="/cleantext.png"
            width={500}
            height={300}
            alt="CleanText"
            className="project-img"
          />
          <div>
            <h3>Altify CleanText</h3>
            <p className="muted">
              AI-powered tool that turns messy text into clean, structured, publish-ready content.
              Built with real API integration and backend logic.
            </p>
            <button className="btn btn-primary">View Tool</button>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section">
        <h2>About Me</h2>
        <p className="muted">
          I’m a self-taught developer focused on building practical tools and websites that solve real problems.
          I specialize in SEO, automation, and simple systems that actually help businesses grow.
        </p>
      </section>

      {/* SKILLS */}
      <section className="section grid grid-2">
        <div className="card">Improve how your business shows up on Google</div>
        <div className="card">Automate repetitive tasks</div>
        <div className="card">Make websites easier for customers to use</div>
        <div className="card">Build fast, functional web tools</div>
      </section>

      {/* LOCAL */}
      <section className="section">
        <h2>Who This Is For</h2>
        <p className="muted">
          Perfect for restaurants, barbershops, contractors, and small businesses in
          Glenwood, Amity, Arkadelphia, and surrounding areas.
        </p>
      </section>

      {/* PRICING */}
      <section className="section pricing card">
        <h2>Simple Pricing</h2>
        <p>Low upfront cost</p>
        <p>Low monthly cost for hosting and maintenance</p>
        <p>Cancel anytime</p>
      </section>

      {/* CTA */}
      <section className="section cta" id="contact">
        <h2>Get Your Free Website Preview</h2>

        <form
          className="contact-form"
          onSubmit={async (e) => {
            e.preventDefault();

            const formData = new FormData(e.target);

            const data = {
              name: formData.get("name"),
              phone: formData.get("phone"),
              message: formData.get("message"),
            };

            const res = await fetch("/api/contact", {
              method: "POST",
              body: JSON.stringify(data),
            });

            if (res.ok) {
              alert("Request sent. I’ll contact you soon.");
              e.target.reset();
            } else {
              alert("Something went wrong.");
            }
          }}
        >
          <input name="name" placeholder="Your Name" required />
          <input name="phone" placeholder="Phone Number" required />
          <textarea name="message" placeholder="What do you need?" />

          <button className="btn btn-primary large" type="submit">
            Get Free Preview
          </button>
        </form>
      </section>

    </main>
  );
}
