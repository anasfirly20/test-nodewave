import CustomHeader from "../components/CustomHeader";

// Constants
import { dataAppMade, dataAppMade2 } from "../constants/constants";
import Image from "next/image";

export default function AppMade() {
  return (
    <>
      <CustomHeader
        label="Applications that can be made"
        className="text-center"
      />
      <section className="grid lg:grid-cols-3 gap-10 lg:gap-5">
        {dataAppMade?.map((data, index) => {
          return (
            <section key={index} className="space-y-5">
              <section className="flex gap-5 items-center">
                <Image src={data?.icon} alt="asd" width={30} height={30} />
                <h4 className="font-medium text-2xl">{data?.header}</h4>
              </section>
              <p>{data?.desc}</p>
              <ul className="list-disc list-inside">
                {data?.list?.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
              </ul>
            </section>
          );
        })}
      </section>
      <section className="grid lg:flex items-center gap-10 py-10">
        {dataAppMade2?.map((data, index) => {
          return (
            <section key={index} className="flex items-center gap-2">
              <Image src={data?.icon} alt="asd" width={25} height={25} />
              <h4 className="font-medium text-2xl">{data?.header}</h4>
            </section>
          );
        })}
        <h4 className="font-medium text-xl">and many others</h4>
      </section>
    </>
  );
}
