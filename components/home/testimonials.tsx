import { motion } from "motion/react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

const testimonials = [
  {
    text: "Thank you so much for yesterday. I really appreciaite it! You did a great job and I felt so beautiful. ",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "",
  },
  {
    text: "Hey, I just wanted to say thank you again so much for coming to do my makeup. It lasted the entire night, all the way until literally 4 AM haha and I felt so beautiful!! It was so fun meeting you! ",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Bilal Ahmed",
  },
  {
    text: "Hi!! Summer was absolutely darling! We had a really hard time finding someone who was right to do our wedding party's makeup and wow she hit all of the marks!! So so sweet and had so much fun talking to her while she was doing my makeup. She did an amazing job on my makeup and all the girls makeup including doing an amazing job on the bride's makeup (my sisters)!! I definitely recommend Summer.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Avery Richardson",
  },
  {
    text: "Summer is the best! She came prepared with everything she needed and she listened to what I wanted. She explained what she was doing throughout the process and did well making great conversation. She created my perfect dream look! Totally book with her!",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Sage Keaton",
  },
  {
    text: "Summer is so kind. She's a fantastic makeup artist, she did my wedding makeup + my bridesmaids and my mom. We all felt so beautiful. She gave me excactly what I asked for and listened to me when I wanted to change things. I will recommend her always. {'<3'}",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Dakota Navarro",
  },
  {
    text: "Summer has such an artistic eye! She always creates the most stunning looks. She helped my mom and I get glammed up for some album cover shots and it was a blast! Thanks Summer!",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Ivana Young",
  },
  {
    text: "Our business functions improved with a user-friendly design and positive customer feedback.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Farhan Siddiqui",
  },
  {
    text: "They delivered a solution that exceeded expectations, understanding our needs and enhancing our operations.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Sana Sheikh",
  },
  {
    text: "Using this ERP, our online presence and conversions significantly improved, boosting business performance.",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Hassan Ali",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export default function Testimonial() {
  return (
    <section className="my-10 relative">
      {/* <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <h1
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-5 font-semibold"
            style={{ fontFamily: "DarlineScript, sans-serif" }}
          >
            The Reviews are In!
          </h1>
          <p className={`text-center mt-5 opacity-75 ${montserrat.className}`}>
            See why everyone&apos;s obsessed.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div> 
      </div> */}
    </section>
  );
}
