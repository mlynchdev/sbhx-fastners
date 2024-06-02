import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

export const FastenerList = () => {
	return (
		<Table>
			<TableCaption>Fasteners</TableCaption>
			<TableHeader>
				<TableRow>
					<TableHead>Type</TableHead>
					<TableHead>Alloy</TableHead>
					<TableHead>Diameter</TableHead>
					<TableHead>Length</TableHead>
					<TableHead>Quantity</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{data.fasteners.map((fastener) => {
					return (
						<TableRow
							key={fastener.Index}
							className="text-stone-300">
							<TableCell>{fastener.Type}</TableCell>
							<TableCell>{fastener.Alloy}</TableCell>
							<TableCell>{fastener.Diameter}</TableCell>
							<TableCell>{fastener.Length}</TableCell>
							<TableCell>{fastener.Quantity}</TableCell>
							<TableCell>{fastener["Major Type"]}</TableCell>
						</TableRow>
					);
				})}
			</TableBody>
		</Table>
	);
};

let data = {
	fasteners: [
		{
			Index: 1,
			Type: "Bolt",
			Alloy: "Steel",
			Diameter: "M6",
			Length: 0.01,
			Quantity: 100.0,
			"Major Type": "Bolt",
			"Metric Diameter": "6mm",
			"Is Metric?": true,
			"Metric Length Equivalent": 0.01,
			"Imperial Length Equivalent": 0.394,
			"143,673.00": 0.394,
		},
		{
			Index: 2,
			Type: "Screw",
			Alloy: "Stainless Steel",
			Diameter: "M4",
			Length: 0.005,
			Quantity: 200.0,
			"Major Type": "Screw",
			"Metric Diameter": "4mm",
			"Is Metric?": true,
			"Metric Length Equivalent": 0.005,
			"Imperial Length Equivalent": 0.197,
			"143,673.00": 0.197,
		},
		{
			Index: 3,
			Type: "Nut",
			Alloy: "Brass",
			Diameter: "M8",
			Length: 0.002,
			Quantity: 300.0,
			"Major Type": "Nut",
			"Metric Diameter": "8mm",
			"Is Metric?": true,
			"Metric Length Equivalent": 0.002,
			"Imperial Length Equivalent": 0.079,
			"143,673.00": 0.079,
		},
		{
			Index: 4,
			Type: "Washer",
			Alloy: "Aluminum",
			Diameter: "M5",
			Length: 0.001,
			Quantity: 400.0,
			"Major Type": "Washer",
			"Metric Diameter": "5mm",
			"Is Metric?": true,
			"Metric Length Equivalent": 0.001,
			"Imperial Length Equivalent": 0.039,
			"143,673.00": 0.039,
		},
		{
			Index: 5,
			Type: "Rivet",
			Alloy: "Titanium",
			Diameter: "M3",
			Length: 0.007,
			Quantity: 500.0,
			"Major Type": "Rivet",
			"Metric Diameter": "3mm",
			"Is Metric?": true,
			"Metric Length Equivalent": 0.007,
			"Imperial Length Equivalent": 0.276,
			"143,673.00": 0.276,
		},
		{
			Index: 6,
			Type: "Anchor",
			Alloy: "Plastic",
			Diameter: "M12",
			Length: 0.008,
			Quantity: 600.0,
			"Major Type": "Anchor",
			"Metric Diameter": "12mm",
			"Is Metric?": true,
			"Metric Length Equivalent": 0.008,
			"Imperial Length Equivalent": 0.315,
			"143,673.00": 0.315,
		},
		{
			Index: 7,
			Type: "Clip",
			Alloy: "Carbon Steel",
			Diameter: "M7",
			Length: 0.004,
			Quantity: 700.0,
			"Major Type": "Clip",
			"Metric Diameter": "7mm",
			"Is Metric?": true,
			"Metric Length Equivalent": 0.004,
			"Imperial Length Equivalent": 0.157,
			"143,673.00": 0.157,
		},
		{
			Index: 8,
			Type: "Stud",
			Alloy: "Zinc",
			Diameter: "M9",
			Length: 0.003,
			Quantity: 800.0,
			"Major Type": "Stud",
			"Metric Diameter": "9mm",
			"Is Metric?": true,
			"Metric Length Equivalent": 0.003,
			"Imperial Length Equivalent": 0.118,
			"143,673.00": 0.118,
		},
		{
			Index: 9,
			Type: "Pin",
			Alloy: "Copper",
			Diameter: "M2",
			Length: 0.009,
			Quantity: 900.0,
			"Major Type": "Pin",
			"Metric Diameter": "2mm",
			"Is Metric?": true,
			"Metric Length Equivalent": 0.009,
			"Imperial Length Equivalent": 0.354,
			"143,673.00": 0.354,
		},
		{
			Index: 10,
			Type: "Latch",
			Alloy: "Bronze",
			Diameter: "M11",
			Length: 0.01,
			Quantity: 1000.0,
			"Major Type": "Latch",
			"Metric Diameter": "11mm",
			"Is Metric?": true,
			"Metric Length Equivalent": 0.01,
			"Imperial Length Equivalent": 0.394,
			"143,673.00": 0.394,
		},
		{
			Index: 11,
			Type: "Clip",
			Alloy: "Steel",
			Diameter: "M3",
			Length: 0.001,
			Quantity: 100.0,
			"Major Type": "Clip",
			"Metric Diameter": "3mm",
			"Is Metric?": true,
			"Metric Length Equivalent": 0.001,
			"Imperial Length Equivalent": 0.039,
			"143,673.00": 0.039,
		},
		{
			Index: 12,
			Type: "Screw",
			Alloy: "Nylon",
			Diameter: "M6",
			Length: 0.002,
			Quantity: 200.0,
			"Major Type": "Screw",
			"Metric Diameter": "6mm",
			"Is Metric?": true,
			"Metric Length Equivalent": 0.002,
			"Imperial Length Equivalent": 0.079,
			"143,673.00": 0.079,
		},
		{
			Index: 13,
			Type: "Bolt",
			Alloy: "Stainless Steel",
			Diameter: "M8",
			Length: 0.003,
			Quantity: 300.0,
			"Major Type": "Bolt",
			"Metric Diameter": "8mm",
			"Is Metric?": true,
			"Metric Length Equivalent": 0.003,
			"Imperial Length Equivalent": 0.118,
			"143,673.00": 0.118,
		},
		{
			Index: 14,
			Type: "Nut",
			Alloy: "Brass",
			Diameter: "M5",
			Length: 0.004,
			Quantity: 400.0,
			"Major Type": "Nut",
			"Metric Diameter": "5mm",
			"Is Metric?": true,
			"Metric Length Equivalent": 0.004,
			"Imperial Length Equivalent": 0.157,
			"143,673.00": 0.157,
		},
		{
			Index: 15,
			Type: "Washer",
			Alloy: "Aluminum",
			Diameter: "M2",
			Length: 0.005,
			Quantity: 500.0,
			"Major Type": "Washer",
			"Metric Diameter": "2mm",
			"Is Metric?": true,
			"Metric Length Equivalent": 0.005,
			"Imperial Length Equivalent": 0.197,
			"143,673.00": 0.197,
		},
		{
			Index: 16,
			Type: "Rivet",
			Alloy: "Titanium",
			Diameter: "M9",
			Length: 0.006,
			Quantity: 600.0,
			"Major Type": "Rivet",
			"Metric Diameter": "9mm",
			"Is Metric?": true,
			"Metric Length Equivalent": 0.006,
			"Imperial Length Equivalent": 0.236,
			"143,673.00": 0.236,
		},
		{
			Index: 17,
			Type: "Anchor",
			Alloy: "Plastic",
			Diameter: "M4",
			Length: 0.007,
			Quantity: 700.0,
			"Major Type": "Anchor",
			"Metric Diameter": "4mm",
			"Is Metric?": true,
			"Metric Length Equivalent": 0.007,
			"Imperial Length Equivalent": 0.276,
			"143,673.00": 0.276,
		},
		{
			Index: 18,
			Type: "Pin",
			Alloy: "Carbon Steel",
			Diameter: "M7",
			Length: 0.008,
			Quantity: 800.0,
			"Major Type": "Pin",
			"Metric Diameter": "7mm",
			"Is Metric?": true,
			"Metric Length Equivalent": 0.008,
			"Imperial Length Equivalent": 0.315,
			"143,673.00": 0.315,
		},
		{
			Index: 19,
			Type: "Latch",
			Alloy: "Zinc",
			Diameter: "M1",
			Length: 0.009,
			Quantity: 900.0,
			"Major Type": "Latch",
			"Metric Diameter": "1mm",
			"Is Metric?": true,
			"Metric Length Equivalent": 0.009,
			"Imperial Length Equivalent": 0.354,
			"143,673.00": 0.354,
		},
		{
			Index: 20,
			Type: "Stud",
			Alloy: "Copper",
			Diameter: "M12",
			Length: 0.01,
			Quantity: 1000.0,
			"Major Type": "Stud",
			"Metric Diameter": "12mm",
			"Is Metric?": true,
			"Metric Length Equivalent": 0.01,
			"Imperial Length Equivalent": 0.394,
			"143,673.00": 0.394,
		},
		{
			Index: 21,
			Type: "PHS",
			Alloy: "Steel",
			Diameter: "M10",
			Length: 0.006,
			Quantity: 150.0,
			"Major Type": "Bolt",
			"Metric Diameter": "",
			"Is Metric?": false,
			"Metric Length Equivalent": 0.15,
			"Imperial Length Equivalent": 0.006,
			"143,673.00": 0.9,
		},
		{
			Index: 22,
			Type: "",
			Alloy: "",
			Diameter: "M10-1",
			Length: 0.003,
			Quantity: 0.0,
			"Major Type": "#N/A",
			"Metric Diameter": "",
			"Is Metric?": false,
			"Metric Length Equivalent": 0.08,
			"Imperial Length Equivalent": 0.003,
			"143,673.00": 0.0,
		},
		{
			Index: 23,
			Type: "Standoff",
			Alloy: "AL",
			Diameter: "M10-1.5",
			Length: 0.001,
			Quantity: 100.0,
			"Major Type": "Bolt",
			"Metric Diameter": "",
			"Is Metric?": false,
			"Metric Length Equivalent": 0.03,
			"Imperial Length Equivalent": 0.001,
			"143,673.00": 0.1,
		},
		{
			Index: 24,
			Type: "Standoff",
			Alloy: "Brass",
			Diameter: "M10-1.5",
			Length: 0.032,
			Quantity: 100.0,
			"Major Type": "Bolt",
			"Metric Diameter": "",
			"Is Metric?": false,
			"Metric Length Equivalent": 0.81,
			"Imperial Length Equivalent": 0.032,
			"143,673.00": 3.2,
		},
		{
			Index: 25,
			Type: "PHS",
			Alloy: "BO",
			Diameter: "M10-1.5",
			Length: 0.0,
			Quantity: 60.0,
			"Major Type": "Bolt",
			"Metric Diameter": "",
			"Is Metric?": false,
			"Metric Length Equivalent": 0.0,
			"Imperial Length Equivalent": 0.0,
			"143,673.00": 0.0,
		},
		{
			Index: 26,
			Type: "Bolt",
			Alloy: "Steel",
			Diameter: "M6",
			Length: 0.02,
			Quantity: 100.0,
			"Major Type": "Bolt",
			"Metric Diameter": "6mm",
			"Is Metric?": true,
			"Metric Length Equivalent": 0.02,
			"Imperial Length Equivalent": 0.787,
			"143,673.00": 0.787,
		},
		{
			Index: 27,
			Type: "Screw",
			Alloy: "Stainless Steel",
			Diameter: "M4",
			Length: 0.004,
			Quantity: 200.0,
			"Major Type": "Screw",
			"Metric Diameter": "4mm",
			"Is Metric?": true,
			"Metric Length Equivalent": 0.004,
			"Imperial Length Equivalent": 0.157,
			"143,673.00": 0.157,
		},
		{
			Index: 28,
			Type: "Nut",
			Alloy: "Brass",
			Diameter: "M8",
			Length: 0.006,
			Quantity: 300.0,
			"Major Type": "Nut",
			"Metric Diameter": "8mm",
			"Is Metric?": true,
			"Metric Length Equivalent": 0.006,
			"Imperial Length Equivalent": 0.236,
			"143,673.00": 0.236,
		},
		{
			Index: 29,
			Type: "Washer",
			Alloy: "Aluminum",
			Diameter: "M5",
			Length: 0.008,
			Quantity: 400.0,
			"Major Type": "Washer",
			"Metric Diameter": "5mm",
			"Is Metric?": true,
			"Metric Length Equivalent": 0.008,
			"Imperial Length Equivalent": 0.315,
			"143,673.00": 0.315,
		},
		{
			Index: 30,
			Type: "Rivet",
			Alloy: "Titanium",
			Diameter: "M3",
			Length: 0.01,
			Quantity: 500.0,
			"Major Type": "Rivet",
			"Metric Diameter": "3mm",
			"Is Metric?": true,
			"Metric Length Equivalent": 0.01,
			"Imperial Length Equivalent": 0.394,
			"143,673.00": 0.394,
		},
		{
			Index: 31,
			Type: "Anchor",
			Alloy: "Plastic",
			Diameter: "M12",
			Length: 0.012,
			Quantity: 600.0,
			"Major Type": "Anchor",
			"Metric Diameter": "12mm",
			"Is Metric?": true,
			"Metric Length Equivalent": 0.012,
			"Imperial Length Equivalent": 0.472,
			"143,673.00": 0.472,
		},
		{
			Index: 32,
			Type: "Clip",
			Alloy: "Carbon Steel",
			Diameter: "M7",
			Length: 0.014,
			Quantity: 700.0,
			"Major Type": "Clip",
			"Metric Diameter": "7mm",
			"Is Metric?": true,
			"Metric Length Equivalent": 0.014,
			"Imperial Length Equivalent": 0.551,
			"143,673.00": 0.551,
		},
		{
			Index: 33,
			Type: "Stud",
			Alloy: "Zinc",
			Diameter: "M9",
			Length: 0.016,
			Quantity: 800.0,
			"Major Type": "Stud",
			"Metric Diameter": "9mm",
			"Is Metric?": true,
			"Metric Length Equivalent": 0.016,
			"Imperial Length Equivalent": 0.63,
			"143,673.00": 0.63,
		},
		{
			Index: 34,
			Type: "Pin",
			Alloy: "Copper",
			Diameter: "M2",
			Length: 0.018,
			Quantity: 900.0,
			"Major Type": "Pin",
			"Metric Diameter": "2mm",
			"Is Metric?": true,
			"Metric Length Equivalent": 0.018,
			"Imperial Length Equivalent": 0.709,
			"143,673.00": 0.709,
		},
		{
			Index: 35,
			Type: "Latch",
			Alloy: "Bronze",
			Diameter: "M11",
			Length: 0.02,
			Quantity: 1000.0,
			"Major Type": "Latch",
			"Metric Diameter": "11mm",
			"Is Metric?": true,
			"Metric Length Equivalent": 0.02,
			"Imperial Length Equivalent": 0.787,
			"143,673.00": 0.787,
		},
		{
			Index: 36,
			Type: "Clip",
			Alloy: "Steel",
			Diameter: "M3",
			Length: 0.022,
			Quantity: 100.0,
			"Major Type": "Clip",
			"Metric Diameter": "3mm",
			"Is Metric?": true,
			"Metric Length Equivalent": 0.022,
			"Imperial Length Equivalent": 0.866,
			"143,673.00": 0.866,
		},
		{
			Index: 37,
			Type: "Screw",
			Alloy: "Nylon",
			Diameter: "M6",
			Length: 0.024,
			Quantity: 200.0,
			"Major Type": "Screw",
			"Metric Diameter": "6mm",
			"Is Metric?": true,
			"Metric Length Equivalent": 0.024,
			"Imperial Length Equivalent": 0.945,
			"143,673.00": 0.945,
		},
		{
			Index: 38,
			Type: "Bolt",
			Alloy: "Stainless Steel",
			Diameter: "M8",
			Length: 0.026,
			Quantity: 300.0,
			"Major Type": "Bolt",
			"Metric Diameter": "8mm",
			"Is Metric?": true,
			"Metric Length Equivalent": 0.026,
			"Imperial Length Equivalent": 1.024,
			"143,673.00": 1.024,
		},
		{
			Index: 39,
			Type: "Nut",
			Alloy: "Brass",
			Diameter: "M5",
			Length: 0.028,
			Quantity: 400.0,
			"Major Type": "Nut",
			"Metric Diameter": "5mm",
			"Is Metric?": true,
			"Metric Length Equivalent": 0.028,
			"Imperial Length Equivalent": 1.102,
			"143,673.00": 1.102,
		},
		{
			Index: 40,
			Type: "Washer",
			Alloy: "Aluminum",
			Diameter: "M2",
			Length: 0.03,
			Quantity: 500.0,
			"Major Type": "Washer",
			"Metric Diameter": "2mm",
			"Is Metric?": true,
			"Metric Length Equivalent": 0.03,
			"Imperial Length Equivalent": 1.181,
			"143,673.00": 1.181,
		},
		{
			Index: 41,
			Type: "Rivet",
			Alloy: "Titanium",
			Diameter: "M9",
			Length: 0.032,
			Quantity: 600.0,
			"Major Type": "Rivet",
			"Metric Diameter": "9mm",
			"Is Metric?": true,
			"Metric Length Equivalent": 0.032,
			"Imperial Length Equivalent": 1.26,
			"143,673.00": 1.26,
		},
		{
			Index: 42,
			Type: "Anchor",
			Alloy: "Plastic",
			Diameter: "M4",
			Length: 0.034,
			Quantity: 700.0,
			"Major Type": "Anchor",
			"Metric Diameter": "4mm",
			"Is Metric?": true,
			"Metric Length Equivalent": 0.034,
			"Imperial Length Equivalent": 1.339,
			"143,673.00": 1.339,
		},
		{
			Index: 43,
			Type: "Pin",
			Alloy: "Carbon Steel",
			Diameter: "M7",
			Length: 0.036,
			Quantity: 800.0,
			"Major Type": "Pin",
			"Metric Diameter": "7mm",
			"Is Metric?": true,
			"Metric Length Equivalent": 0.036,
			"Imperial Length Equivalent": 1.417,
			"143,673.00": 1.417,
		},
		{
			Index: 44,
			Type: "Latch",
			Alloy: "Zinc",
			Diameter: "M1",
			Length: 0.038,
			Quantity: 900.0,
			"Major Type": "Latch",
			"Metric Diameter": "1mm",
			"Is Metric?": true,
			"Metric Length Equivalent": 0.038,
			"Imperial Length Equivalent": 1.496,
			"143,673.00": 1.496,
		},
		{
			Index: 45,
			Type: "Stud",
			Alloy: "Copper",
			Diameter: "M12",
			Length: 0.04,
			Quantity: 1000.0,
			"Major Type": "Stud",
			"Metric Diameter": "12mm",
			"Is Metric?": true,
			"Metric Length Equivalent": 0.04,
			"Imperial Length Equivalent": 1.575,
			"143,673.00": 1.575,
		},
	],
};