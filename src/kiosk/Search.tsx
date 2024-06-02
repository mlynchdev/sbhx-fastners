import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";

export const Search = () => {
	return (
		<div className="w-1/3">
			<Label
				htmlFor="search-screws"
				className="flex my-2 text-stone-500 border-[#4fb94d]">
				Search fasteners
			</Label>
			<Input
				id="search-screws"
				placeholder="insert screw"
				className="bg-transparent border-stone-700"
			/>
		</div>
	);
};
