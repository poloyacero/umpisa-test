import { gql } from "@apollo/client";

export const GET_PARKING_SPACES = gql`
	query ParkingSpace {
		parkingSpace {
			id
			name
		}
	}
`;

export const GET_PARKING_SPACE = gql`
	query ParkingSpace($id: ID!) {
		parkingSpace(id: $id) {
			id
			name
		}
	}
`;

export const GET_PARKING_SLOTS = gql`
	query ParkingSlots($id: ID!) {
		slots(id: $id) {
			id
			name
			area
			isFree
			isProcessing
		}
	}
`;

export const GET_PARKING_SLOT = gql`
	query ParkingSlot($id: ID!) {
		slot(id: $id) {
			id
			name
			area
			isFree
			isProcessing
		}
	}
`;

export const GET_USER = gql`
	query User($id: ID!) {
		user(id: $id) {
			id
			email
			name
			vehicles {
				id
				plate_number
				model
				brand
				userId
			}
		}
	}
`;