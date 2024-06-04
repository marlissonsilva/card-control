export default function Title(props: any) {
  return (
    <div className="text-center py-2">
      <h1 className="px-5 py-4 text-3xl font-bold text-white">
        {props.children}
      </h1>
      {/* <hr className="border-2 border-purple-600" /> */}
    </div>
  );
}
