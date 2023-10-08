import Image from "next/image";

// Assets
import CustomHeader from "../components/CustomHeader";
import background from "../../../public/assets/howWeWork/Background.svg";
import cardBg from "../../../public/assets/howWeWork/cardBg.svg";
import chat from "../../../public/assets/howWeWork/chat.svg";

export default function HowWeWork() {
  const sectionStyle = {
    backgroundImage: `url(${background.src})`, // Set the background image
    backgroundSize: "cover", // Adjust the background size as needed
    backgroundRepeat: "no-repeat", // Prevent the background image from repeating
    backgroundPosition: "center center", // Center the background image
    minHeight: "665px", // Set a minimum height to cover the viewport
  };

  const cardSectionStyle = {
    backgroundImage: `url(${cardBg.src})`, // Set the card background image
    backgroundSize: "cover", // Adjust the background size as needed
    backgroundRepeat: "no-repeat", // Prevent the background image from repeating
    backgroundPosition: "center center", // Center the background image
    padding: "2rem", // Adjust the padding as needed
    backdropFilter: "blur(1000px)", // Apply the backdrop blur effect
  };

  return (
    <section className="my-shorter2 py-shorter3" style={sectionStyle}>
      <CustomHeader label="How We Work" />
      <section
        className="p- w-[773px] h-[502px] mx-auto flex justify-between relative rounded-lg overflow-hidden"
        style={cardSectionStyle}
      >
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm -z-10" />
        <Image
          src={chat}
          alt="chat image"
          className="w-[40%] h-full object-cover"
        />
        <section className="flex flex-col gap-5 w-[53%]">
          <h6 className="font-medium text-xl">Estimate</h6>
          <p className="text-lg">
            Estimate the cost of creating your application with us. Pricing is
            transparent at the start with a gradual payment method.
          </p>
        </section>
      </section>
    </section>
  );
}
