"use client";
import { Montserrat } from "next/font/google";
import Link from "next/link";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export default function Policy() {
  return (
    <div className="my-20 px-6 sm:px-10 lg:px-20">
      {/* Header */}
      <div className="flex flex-col items-center lg:items-center">
        <h1
          className="text-4xl sm:text-5xl lg:text-7xl text-center lg:text-center text-black font-bold tracking-wider"
          style={{ fontFamily: "DarlineSerif, sans-serif" }}
        >
          Privacy Policy
        </h1>
        <p className={`text-base sm:text-lg text-center lg:text-left text-black mt-5 mb-3 ${montserrat.className}`}>
          At Summer K Makeup, we respect your privacy. This policy explains what
          information is collected when you use our website and how it is handled.
        </p>
      </div>

      {/* Sections */}
      <div className="flex flex-col mt-10 space-y-10">
        {/* What We Collect */}
        <div className="flex flex-col">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl text-center lg:text-left text-black"
            style={{ fontFamily: "DarlineScript, sans-serif" }}
          >
            What We Collect
          </h2>
          <div className={`${montserrat.className} mt-3 space-y-2 max-w-full sm:max-w-3xl mx-auto lg:mx-0`}>
            <p>If you choose to fill out an inquiry form for contact, we may collect personal information you voluntarily provide, including:</p>
            <ul className="list-disc list-inside">
              <li>Name</li>
              <li>Email Address</li>
              <li>Phone Number</li>
              <li>Any other details you choose to share</li>
            </ul>
            <p>This information is collected and securely stored by Tally on our behalf.</p>
            <p>We may use the information you provide through the form to:</p>
            <ul className="list-disc list-inside">
              <li>Respond to your inquiries</li>
              <li>Provide information about our services</li>
              <li>Communicate with you regarding bookings or collaborations</li>
            </ul>
            <p>We do not sell or rent your personal information to third parties for marketing purposes.</p>
          </div>
        </div>

        {/* Sharing Your Information */}
        <div className="flex flex-col">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl text-center lg:text-left text-black"
            style={{ fontFamily: "DarlineScript, sans-serif" }}
          >
            Sharing Your Information
          </h2>
          <div className={`${montserrat.className} mt-3 space-y-2 max-w-full sm:max-w-3xl mx-auto lg:mx-0`}>
            <p>Your form submissions are processed by Tally, a trusted third-party service provider. Other than this, we do not share your information unless required by law.</p>
            <p>
              For details on how Tally handles data, please review{" "}
              <Link
                className="italic underline"
                href="https://tally.so/help/privacy-policy"
                target="_blank"
              >
                Tally’s Privacy Policy.
              </Link>
            </p>
          </div>
        </div>

        {/* Your Rights */}
        <div className="flex flex-col">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl text-center lg:text-left text-black"
            style={{ fontFamily: "DarlineScript, sans-serif" }}
          >
            Your Rights
          </h2>
          <div className={`${montserrat.className} mt-3 space-y-2 max-w-full sm:max-w-3xl mx-auto lg:mx-0`}>
            <p>You may request:</p>
            <ul className="list-disc list-inside">
              <li>Access to the personal information we hold about you</li>
              <li>Correction of inaccurate details</li>
              <li>Deletion of your information (subject to legal obligations)</li>
            </ul>
            <p>To make a request, please contact us using the information below.</p>
          </div>
        </div>

        {/* Contact Us */}
        <div className="flex flex-col">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl text-center lg:text-left text-black"
            style={{ fontFamily: "DarlineScript, sans-serif" }}
          >
            Contact Us
          </h2>
          <div className={`${montserrat.className} mt-3 space-y-1 max-w-full sm:max-w-3xl mx-auto lg:mx-0`}>
            <p>If you have any questions about this Privacy Policy, please reach out:</p>
            <p>Summer K Makeup</p>
            <p>Email: summerkmakeup.ut@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
