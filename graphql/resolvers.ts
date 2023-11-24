import { Context } from "@/pages/api/graphql";
import parser from '../utils/parser'

export const resolvers = {
	Query: {
		//get all parking spaces
		spaces: async (_parent: any, args: any, context: Context) => {
			return await context.prisma.parkingSpace.findMany();
		},

		// get parking slots
		slots: async (parent: any, args: any, context: Context) => {
			const slots =  await context.prisma.parkingSlot.aggregateRaw({
				pipeline: [
					{ $match: { parkingSpaceId: { $oid: args.id } } },
					{ $lookup: { 
						from: 'Parkings', 
						localField: '_id', 
						foreignField: 'parkingSlotId', 
						as: 'result' 
					  } 
					},
					{ $set: {
						isFree: {
						  $cond: {
							if: {
							  $gt: [
								{
								  $size: "$result"
								},
								0
							  ]
							},
							then: false,
							else: true
						  }
						}
					  }
					},
					{ $project: {
						_id: { $toString: "$_id" },
  						name: 1,
  						area: 1,
  						isFree: 1,
  						isProcessing: 1
					  }
					}
				]
			})
			
			const parsedSlots = await parser(slots)

			return parsedSlots
			/*return await context.prisma.parkingSlot.findMany({
				where: {
					parkingSpaceId: args.id,
				}
			});*/
		},

		//get individual slot
		slot: async (parent: any, args: any, context: Context) => {
			const slot =  await context.prisma.parkingSlot.aggregateRaw({
				pipeline: [
				{ $match: { _id: { $oid: args.id } } },
				{ $lookup: { 
					from: 'Parkings', 
					localField: '_id', 
					foreignField: 'parkingSlotId', 
					as: 'result' 
				  } 
				},
				{ $set: {
					isFree: {
					  $cond: {
						if: {
						  $gt: [
							{
							  $size: "$result"
							},
							0
						  ]
						},
						then: false,
						else: true
					  }
					}
				  }
				},
				{ $project: {
					_id: { $toString: "$_id" },
					  name: 1,
					  area: 1,
					  isFree: 1,
					  isProcessing: 1
				  }
				}
			]
			})

			const parsedSlot = await parser(slot)

			return parsedSlot[0]
			/*return await context.prisma.parkingSlot.findFirst({
				where: {
					id: args.id,
				}
			});*/
		},

		// get user
		user: async (_parent: any, args: any, context: Context) => {
			return await context.prisma.user.findFirst({
				where: {
					id: args.id,
				},
				include: { vehicles: true }
			});
		},

		// get parking
		parking: async (_parent: any, args: any, context: Context) => {
			return await context.prisma.parkings.findFirst({
				where: {
					parkingSlotId: args.parkingSlotId,
				},
				include: { unit: true, slot: true }
			});
		}
	},

	/*Parkings: {
		unit: async (parent: any, _args: any, context: Context) => {
			console.log("X", parent, _args)
			return await context.prisma.vehicle.findFirst({
				where: {
					id: parent.id,
				},
			});
		},
		slot: async (parent: any, _args: any, context: Context) => {
			console.log("Y", parent, _args)
			return await context.prisma.parkingSlot.findFirst({
				where: {
					id: parent.id,
				},
			});
		}
	},

	User: {
		vehicles: async (parent: any, _args: any, context: Context) => {
			return await context.prisma.vehicle.findMany({
				where: {
					userId: parent.id,
				},
			});
		}
	},*/

	Mutation: {
		// add parking space
		addParkingSpace: async (_parent: any, args: any, context: Context) => {
			return await context.prisma.parkingSpace.create({
				data: {
					name: args.name
				}
			})
		},

		// add parking slot
		addParkingSlot: async (_parent: any, args: any, context: Context) => {
			return await context.prisma.parkingSlot.create({
				data: {
					name: args.name,
					area: args.area,
					isFree: args.isFree,
					isProcessing: args.isProcessing,
					parkingSpaceId: args.parkingSpaceId
				}
			})
		},

		// add vehicle slot
		addVehicle: async (_parent: any, args: any, context: Context) => {
			return await context.prisma.vehicle.create({
				data: {
					plate_number: args.plate_number,
					model: args.model,
					brand: args.brand,
					type: args.Vehicle2,
					userId: args.userId
				}
			})
		},

		// add user
		addUser: async (_parent: any, args: any, context: Context) => {
			return await context.prisma.user.create({
				data: {
					email: args.email,
					name: args.name,
				},
			})
		},

		addParking: async (_parent: any, args: any, context: Context) => {
			return await context.prisma.parkings.create({
				data: {
					parkingSlotId: args.parkingSlotId,
					vehicleId: args.vehicleId,
				},
				include: { unit: true, slot: true }
			})
		}
	},
};
