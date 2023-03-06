import { cardsDataArray } from "../utils/helper";
import FieldsCard from "./FieldsCard";

const FieldsOfChange = () => {
  return (
    <div className="w-full  bg-gray-300 px-10 py-15">
      <h2 className="text-center font-bold font-sans text-3xl py-10 ">
        FIELDS OF CHANGE
      </h2>
      <div className="flex justify-between pb-10">
        {cardsDataArray.map((card) => (
          <FieldsCard
            key={card.title}
            title={card.title}
            img={card.img}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default FieldsOfChange;
