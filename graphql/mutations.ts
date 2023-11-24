import { gql } from "@apollo/client";

export const REGISTER = gql`
	mutation Register($email: String!, $password: String!) {
		register(email: $email, password: $password) {
			id
			name
			email
			password
		}
	}
`;

export const LOGIN = gql`
	mutation Login($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			id
			name
			email
		}
	}
`;

export const ADD_PARKING_SPACE = gql`
	mutation AddParkingSpace($name: String) {
		addParkingSpace(name: $name) {
			id
			name
		}
	}
`;

export const ADD_PARKING_SLOT = gql`
	mutation AddParkingSlot($name: String, $area: String, $isFree: Boolean, $isProcessing: Boolean, $parkingSpaceId: ID!) {
		addParkingSlot(name: $name, area: $area, isFree: $isFree, isProcessing: $isProcessing, parkingSpaceId: $parkingSpaceId) {
			id
			name
			area
			isFree
			isProcessing
			parkingSpaceId
		}
	}
`;

export const ADD_USER = gql`
	mutation Mutation($email: String, $name: String) {
		addUser(email: $email, name: $name) {
			id
			email
			name
		}
	}
`;

export const ADD_VEHICLE = gql`
	mutation Mutation($plate_number: String, $model: String, $brand: String, $type: VehicleType, $userId: ID!) {
		addVehicle(plate_number: $plate_number, model: $model, brand: $brand, type: $type, userId: $userId) {
			id
			platenumber
			model
			brand
			type
			userId
		}
	}
`;

export const ADD_PARK = gql`
	mutation Mutation($parkingSlotId: ID!, $vehicleId: ID!) {
		addParking(parkingSlotId: $parkingSlotId, vehicleId: $vehicleId) {
			id
			parkingSlotId
			vehicleId
		}
	}
`;