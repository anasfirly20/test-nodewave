type TProps = {
  desc: string;
  author: string;
};

export default function TestimonyCard({ desc, author }: TProps) {
  return (
    <section className="flex flex-col justify-between p-4 bg-white rounded-md w-full lg:w-[35%] max-lg:gap-5">
      <p className="text-black">{desc}</p>
      <p className="text-[#00AD98]">{author}</p>
    </section>
  );
}
