import { cardsDataArray } from "../utils/helper";
import FieldsCard from "./FieldsCard";

const FieldsOfChange = () => {
  return (
    <div className="w-full  bg-gray-300 px-10 pt-10 pb-20">
      <h2 className="text-center font-bold font-sans text-3xl py-10 ">
        FIELDS OF CHANGE
      </h2>
      <div className="block sm:flex justify-between p-10">
        {cardsDataArray.map((card) => (
          <div className="p-2">
            <FieldsCard
              key={card.title}
              title={card.title}
              img={card.img}
              description={card.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FieldsOfChange;
