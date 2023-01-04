const Card = ({ title, body }) => {
  return (
    <div className="bg-slate-100 p-4 my-4 w-full py-6 min-w-[600px] md:min-w-0 md:w-[30%] ">
      <h2 className="font-semibold text-2xl">{title}</h2>
      <p>{body}</p>
    </div>
  );
};

export default Card;
