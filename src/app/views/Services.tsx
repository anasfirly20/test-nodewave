// Components
import CustomHeader from "../components/CustomHeader";
import ServicesCard from "../components/ServicesCard";

// Constants
import { servicesData } from "../constants/constants";

export default function Services() {
  return (
    <section className="py-shorter">
      <CustomHeader
        label="Start Creating Websites or Mobile Apps For You Now"
        className="text-center"
      />
      <section className="grid grid-cols-2 gap-20">
        {servicesData?.map((data, i) => {
          return (
            <ServicesCard
              key={i}
              header={data?.header}
              startPrice={data?.startPrice}
              newPrice={data?.newPrice}
              src={data?.src}
              alt={data?.startPrice}
            />
          );
        })}
      </section>
    </section>
  );
}
