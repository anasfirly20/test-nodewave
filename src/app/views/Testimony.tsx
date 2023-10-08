// Components
import CustomHeader from "../components/CustomHeader";
import TestimonyCard from "../components/TestimonyCard";

// Constants
import { dataCarousel } from "../constants/constants";

export default function Testimony() {
  return (
    <section className="py-shorter">
      <CustomHeader label="Testimony" className="text-start" />
      <section className="flex gap-5 overflow-x-scroll hide-scrollbar">
        {dataCarousel?.map((data, index) => (
          <TestimonyCard key={index} desc={data?.desc} author={data?.author} />
        ))}
      </section>
    </section>
  );
}
