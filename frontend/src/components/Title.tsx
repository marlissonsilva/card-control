export default function Title(props: any) {
  return (
    <div className="text-start py-2">
      <h1 className="py-4 text-5xl font-bold text-white">
        {props.children}
      </h1>
      {/* <hr className="border-2 border-purple-600" /> */}
    </div>
  );
}
