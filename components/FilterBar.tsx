interface Props {
  location: string;
  setLocation: (value: string) => void;

  rating: string;
  setRating: (value: string) => void;
}

export default function FilterBar({
  location,
  setLocation,
  rating,
  setRating,
}: Props) {

  return (
    <div className="grid md:grid-cols-2 gap-4 mb-6">

      <select
        value={location}
        onChange={(e) =>
          setLocation(e.target.value)
        }
        className="p-3 border rounded-xl bg-white"
      >

        <option value="">
          All Locations
        </option>

        <option value="Chennai">
          Chennai
        </option>

        <option value="Trichy">
          Trichy
        </option>

        <option value="Vellore">
          Vellore
        </option>
         <option value="Coimbatore">
          Coimbatore
        </option>
         <option value="Madurai">
          Madurai
        </option>
         <option value="Trichy">
          Trichy
        </option>

      </select>

      <select
        value={rating}
        onChange={(e) =>
          setRating(e.target.value)
        }
        className="p-3 border rounded-xl bg-white"
      >

        <option value="">
          All Ratings
        </option>

        <option value="4.5">
          4.5 & Above
        </option>

        <option value="4">
          4 & Above
        </option>

      </select>

    </div>
  );
}