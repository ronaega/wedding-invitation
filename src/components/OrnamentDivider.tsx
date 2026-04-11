import ornamentImg from "@/assets/ornament-divider.png";

const OrnamentDivider = ({ className = "" }: { className?: string }) => (
  <div className={`flex justify-center py-4 ${className}`}>
    <img
      src={ornamentImg}
      alt=""
      loading="lazy"
      className="w-48 md:w-72 h-auto opacity-70"
      width={1920}
      height={512}
    />
  </div>
);

export default OrnamentDivider;
