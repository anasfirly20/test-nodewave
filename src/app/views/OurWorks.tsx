import CustomHeader from "../components/CustomHeader";

// Assets
import bg1 from "../../../public/assets/ourWork/bg1.svg";
import bg2 from "../../../public/assets/ourWork/bg2.svg";
import img1 from "../../../public/assets/ourWork/ourwork1.webp";
import img2 from "../../../public/assets/ourWork/ourwork2.webp";

import CardOurWork from "../components/CardOurWork";

export default function OurWorks() {
  const sectionStyle = {
    backgroundImage: `url(${bg1.src})`, // Set the background image
    backgroundSize: "cover", // Adjust the background size as needed
    backgroundRepeat: "no-repeat", // Prevent the background image from repeating
    backgroundPosition: "center center", // Center the background image
    // minHeight: "520px", // Set a minimum height to cover the viewport
    // minWidth: "873px",
    backdropFilter: "blur(1000px)", // Apply the backdrop blur effect
  };

  const sectionStyle2 = {
    backgroundImage: `url(${bg2.src})`, // Set the background image
    backgroundSize: "cover", // Adjust the background size as needed
    backgroundRepeat: "no-repeat", // Prevent the background image from repeating
    backgroundPosition: "center center", // Center the background image
    // minHeight: "520px", // Set a minimum height to cover the viewport
    // minWidth: "873px",
    backdropFilter: "blur(1000px)", // Apply the backdrop blur effect
  };

  return (
    <section className="py-shorter2">
      <CustomHeader label="Our Works" />
      <section className="flex max-lg:flex-col gap-5 overflow-x-scroll hide-scrollbar">
        <CardOurWork
          sectionStyle={sectionStyle}
          src={img1}
          header="Rayu Motor"
          desc="  AC Service Workshop that has implemented online registration
        to make it easier for consumers, mechanics, and sales"
        />
        <CardOurWork
          sectionStyle={sectionStyle2}
          src={img2}
          header="Jasabung"
          desc="  AC Service Workshop that has implemented online registration
        to make it easier for consumers, mechanics, and sales"
        />
      </section>
    </section>
  );
}
