import { Search } from "lucide-react";
import { Input } from "./ui/Input";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
      <Input
        type="text"
        placeholder="Search links..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-10"
      />
    </div>
  );
}
