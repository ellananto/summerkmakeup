import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

const services = [
  {
    id: 1,
    title: "Bridal Makeup",
    description:
      "This package includes 1-1.5 hours of service, perfect for brides wanting a flawless wedding day look.",
    image: "/images/testim8.jpg",
    deposit: "50",
    price: "$115",
    link: "/contact",
  },
  {
    id: 2,
    title: "Bridal Package 1",
    description:
      "This package includes two makeup services, ideal for brides to have both a makeup trial and wedding day look.",
    image: "/images/brush-polaroids.jpg",
    deposit: "$100",
    price: "$220",
    link: "/contact",
  },
  {
    id: 3,
    title: "Bridal Package 2",
    description:
      "This package includes three makeup services, perfect for brides wanting a trial, wedding day look, and an additional event.",
    image: "/images/serviceb1.jpg",
    deposit: "$150",
    price: "$330",
    link: "/contact",
  },
  {
    id: 4,
    title: "Wedding Party",
    description:
      "This package includes a 50 minute service, perfect for bridesmaids, mothers of the bride/groom, or other guests.",
    image: "/images/testim10.jpg",
    deposit: "$50",
    price: "$95",
    link: "/contact",
  },
  {
    id: 5,
    title: "Junior Bridesmaid",
    description:
      "This package includes a 25 minute service of light makeup for girls between the ages 11-14.",
    image: "/images/brush-polaroids.jpg",
    deposit: "$20",
    price: "$45",
    link: "/contact",
  },
  {
    id: 6,
    title: "Flower Girls",
    description:
      "This package includes a makeup service for girls ages 10 and under- this service does not include false lashes.",
    image: "/images/makeups.jpg",
    deposit: "$0",
    price: "$15",
    link: "/contact",
  },
];

export default function ServiceCards() {
  return (
    <div className={`mt-30 ${montserrat.className}`}>
      {/* Page Heading */}
      <div className="text-left mb-12 ml-15">
        <h1 className="text-7xl font-light text-pink-600">Makeup Services</h1>
        <p className="text-gray-600 mt-2">
          From timeless bridal looks to bold photoshoot glam, find the service
          that fits your moment.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-10">
        {services.map((service) => (
          <Card
            key={service.id}
            className="bg-white drop-shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 w-[500] h-[520]"
          >
            {/* Image */}
            <div className="w-full h-56 relative">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <CardHeader className="p-6 flex flex-col gap-3">
              <CardTitle className="text-xl font-bold text-gray-800">
                {service.title}
              </CardTitle>
              <CardDescription className="text-gray-600">
                {service.description}
              </CardDescription>
              <p className="text-pink-600 font-semibold">
                Deposit: <span className="text-gray-600 font-medium">{service.price}</span>
              </p>
              <p className="text-pink-600 font-semibold">
                Full Price:{" "}
                <span className="text-gray-600 font-medium">{service.price}</span>
              </p>

              <a
                href={service.link}
                className="mt-4 bg-pink-600 text-white px-4 py-2 rounded-lg text-center hover:bg-pink-700 transition"
              >
                Book Now!
              </a>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
