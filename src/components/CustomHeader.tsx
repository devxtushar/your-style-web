function CustomHeader(props: { title: string; subtitle: string }) {
  const { title, subtitle } = props;
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-black font-semibold"> {title}</h1>
      <h2 className="text-black font-semibold"> {subtitle}</h2>
    </div>
  );
}

export default CustomHeader;
