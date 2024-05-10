import {useState, useEffect, React} from "react"

function ToolBar({
	users,
	filter,
	search,
	handleFilterChange,
	handleSearchChange
}) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="toolbar">
			<input
				type="text"
				placeholder="Search users..."
				value={search}
				onChange={(e) => handleSearchChange(e.target.value)}
				className="searchbar"
			/>
			<div
				className="dropdown relative w-full rounded-md border border-gray-300 bg-background-dark text-primary px-3 py-2 cursor-pointer focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent"
				onClick={() => {setIsOpen(!isOpen);}}
			>
				<span>{filter}</span>
				{isOpen && (
				<div className="dropdown-menu">
					<div
						className="dropdown-item"
						onClick={() => {
							handleFilterChange('All');
							setIsOpen(false);
						}
					}>
						All
					</div>
					<div
						className="dropdown-item"
						onClick={() => {
							handleFilterChange('Donor');
							setIsOpen(false);
						}
					}>
						Donor
					</div>
					<div
						className="dropdown-item"
						onClick={() => {
							handleFilterChange('Organisation');
							setIsOpen(false);
						}
					}>
						Organisation
					</div>
				</div>
				)}
			</div>
		</div>
	);
}

export default ToolBar;
