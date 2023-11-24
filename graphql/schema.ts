export const typeDefs = `#graphql
  type ParkingSpace {
    id: ID!
    name: String
  }

  type Parkings {
    id: ID!
    slot: ParkingSlot
    unit: Vehicle
    parkingSlotId: String
    vehicleId: String
  }

  type ParkingSlot {
    id: ID!
    name: String
    area: String
    isFree: Boolean
    isProcessing: Boolean
    parkingSpaceId: String
  }

  type User {
    id: ID!
    email: String
    name: String
    vehicles: [Vehicle]
    role: Role
  }

  type Vehicle {
    id: ID!
    plate_number: String
    model: String
    brand: String
    type: VehicleType
    userId: String
  }

  enum VehicleType {
    Vehicle1,
    Vehicle2
  }

  enum Role {
    USER
    ADMIN
  }

  type Query {
    spaces: [ParkingSpace]
    slots(id: ID!): [ParkingSlot]
    slot(id: ID!): ParkingSlot
    user(id: ID!): User
    parking(parkingSlotId: ID!): Parkings
  }

  type Mutation {
    addParking (parkingSlotId:ID!, vehicleId:ID!) : Parkings
    addUser (name:String, email:String) : User
    addParkingSpace (name:String) : ParkingSpace
    addParkingSlot (name:String, area:String, isFree:Boolean, isProcessing:Boolean, parkingSpaceId:ID!) : ParkingSlot
    addVehicle (plate_number:String, model: String, brand:String, type: VehicleType, userId: ID!) : Vehicle
  }
`;
