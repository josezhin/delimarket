import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";

const Filters = ({ changeFilters }) => {
  const handlehangeCategory = (event) => {
    console.log(event.target.value)
    changeFilters({      
      // hay que cambiarlo por categoria
      category: event.target.value,
    });
  };

  return (
    <div>
      <div className="flex gap-x-2">
        <EllipsisVerticalIcon className="h-5 w-5 text-red-600" />
        <div>
          <label htmlFor="category" className="text-sm">
            Categira
          </label>
          <select
            name="category"
            className="ml-2 text-sm"
            onChange={handlehangeCategory}
            id="category"
          >
            <option value="All">Todos</option>
            <option value="1">pizza</option>
            <option value="2">Alive</option>
            <option value="3">Alive</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filters;
