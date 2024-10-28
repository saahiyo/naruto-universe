import React, { useState } from "react";

const Cards = ({ data }) => {

  const [classification] = useState(
    data.personal && data.personal.classification
      ? data.personal.classification
      : ""
  );
  const [affiliation] = useState(() =>
    data.personal && data.personal.affiliation
      ? Array.isArray(data.personal.affiliation)
        ? data.personal.affiliation.join(", ")
        : data.personal.affiliation
      : ""
  );

  const [rank] = useState(() =>
    data.rank && data.rank.ninjaRank
      ? typeof data.rank.ninjaRank === "object"
        ? Object.values(data.rank.ninjaRank).join(", ")
        : data.rank.ninjaRank
      : ""
  );

  // console.log(
  //   data.rank && data.rank.ninjaRank
  //     ? typeof data.rank.ninjaRank === "object"
  //       ? Object.values(data.rank.ninjaRank).join(", ")
  //       : data.rank.ninjaRank
  //     : "No rank"
  // );

  // useEffect(() => {
  //   if (data.personal.affiliation) {
  //     setAffiliation(
  //       Array.isArray(data.personal.affiliation)
  //         ? data.personal.affiliation.join(", ")
  //         : data.personal.affiliation
  //     );
  //   }
  // }, [data.personal.affiliation]);

  return (
    <div className="card-container w-56 h-96 flex-grow border border-gray-600 rounded-md overflow-hidden flex flex-col justify-between">
      <div className="image-card w-full h-2/5 bg-zinc-500">
        <img src={data.images} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="info-card border-t border-zinc-600 w-full h-2/3 p-2">
        <div className="names border-b pb-3 border-zinc-600 flex gap-4">
          <p className="text-zinc-600 font-bold">{data.id + 1}</p>
          <h1 className="text-gray-400">{data.name}</h1>
        </div>
        <div className="info p-2  flex flex-col gap-1 text-xs">
          <p className="text-zinc-600">
            Appears in:{" "}
            <span className="text-zinc-400">
              {" "}
              {data.debut ? data.debut.appearsIn : "unknown"}
            </span>
          </p>
         
          <p className="text-zinc-600">
            Status:{" "}
            <span className="text-zinc-400">
              {" "}
              {data.personal.status ? data.personal.status : "unknown"}
            </span>
          </p>
          <p className="text-zinc-600">
            {affiliation && <span>Affiliation : {affiliation}</span>}
          </p>
          <p className="text-zinc-600 ">{rank && <span>Rank : {rank}</span>}</p>
          <p className="text-zinc-600"> {classification && <span>Classification: {classification}</span>} </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
