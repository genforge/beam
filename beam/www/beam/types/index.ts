export type Workstation = {
	creation: string
	modified_by: string
	modified: string
	name: string
	owner: string

	production_capacity: number
	workstation_name: string
	status?: string
}

export type Operation = {
	id: string
	maxOperations: string
	completedOperations: string
}
