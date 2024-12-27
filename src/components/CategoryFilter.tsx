import { clsx } from "clsx";
import { LinkCategory } from "../types";

type CategoryFilterProps = {
  selected: LinkCategory | null;
  onChange: (category: LinkCategory | null) => void;
};

const categories: { label: string; value: LinkCategory }[] = [
  { label: "Scholarships", value: "scholarships" },
  { label: "Study Materials", value: "study_materials" },
  { label: "Hackathons", value: "hackathons" },
  { label: "Software", value: "software" },
  { label: "Jobs", value: "jobs" },
];

export function CategoryFilter({ selected, onChange }: CategoryFilterProps) {
  return (
    <div className="flex space-x-2 overflow-x-auto pb-2">
      <button
        onClick={() => onChange(null)}
        className={clsx(
          "rounded-full px-4 py-2 text-sm font-medium",
          selected === null
            ? "bg-blue-600 text-white"
            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        )}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category.value}
          onClick={() => onChange(category.value)}
          className={clsx(
            "rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap",
            selected === category.value
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          )}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}
