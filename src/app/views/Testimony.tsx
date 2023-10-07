// Components
import TestimonyCard from "../components/TestimonyCard";

// Constants
import { dataCarousel } from "../constants/constants";

export default function Testimony() {
  return (
    <section>
      <h4 className="text-white font-medium text-2xl py-10">Testimony</h4>
      <section className="flex gap-5 overflow-x-scroll hide-scrollbar">
        {dataCarousel?.map((data, index) => (
          <TestimonyCard key={index} desc={data?.desc} author={data?.author} />
        ))}
      </section>
    </section>
  );
}
