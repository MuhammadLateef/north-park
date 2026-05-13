import Image from "next/image";
import Link from "next/link";
import { About1 } from "@/app/Index";
const AboutSection = () => {
  return (
    <div className="py-12">
      <div className="max-w-[80rem] mx-auto container px-4 sm:px-6">
        <h2 className=" md:text-6xl text-blue-400 text-4xl heading mb-4 text-center">
          About us
        </h2>
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-6 md:gap-12 md:mt-20 my-6">
          <div className=" grid-cols-1">
            <Image
              width={1000}
              height={1000}
              className="w-full"
              src={About1}
              alt="img"
            />
          </div>
          <div className=" grid-cols-1">
            <h3 className="md:text-4xl text-3xl text-blue-400 heading">
              Our Stroy
            </h3>
            <p className="md:text-xl text-base my-4 text-justify">
             Abdul Hadi The founder of Go North Pakistan Born in the serene village of Chorit, Astore, and raised in Gilgit, the heart of Gilgit-Baltistan, my life has been shaped by mountains, valleys, and timeless landscapes. What began as a love for my homeland has grown into a mission to share its beauty, culture, and adventure with others. Our travel agency is built on local knowledge, trust, and a genuine passion for creating memorable journeys. Born and raised in the Philippines, Vienna is an Accountant by profession. She enjoys wandering around, exploring places less traveled and meeting people from different walks of life. “When I first visited Pakistan as a solo female traveler in 2019, I didn’t expect I will fall in love with this country. For someone who loves hiking, mountains and photography, Gilgit Baltistan in the northern part of Pakistan.  <Link className="text-blue-400" href="/about "> Read more</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;