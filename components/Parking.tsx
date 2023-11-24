"use client"
import * as React from 'react'
import { useState, useEffect } from 'react'
import ParkingSlot from './ParkingSlot'
import { VehicleUnit } from '@/props/vehicleProps'
import { useMutation, useQuery } from '@apollo/client'
import { GET_PARKING_SLOTS, GET_PARKING_SLOT } from 'graphql/queries'
import ParkingSpace from './ParkingSpace'
import ParkingSlotDetails from './ParkingSlotDetails'

type ParkingCoordinates = {
  x: string
  y: string
}

export default function Parking() {
  const [slotId, setSlotId] = useState("")

  const { data, loading, error } = useQuery(GET_PARKING_SLOTS, {
    variables: { id: "655f2e83b39d57c1549879c5" },
  });

  const handleClick = (event: React.MouseEvent<SVGPathElement>) => {
    const parkingSlotId = (event.target as Element).id
    setSlotId(parkingSlotId)
  }

  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-red-200 p-4 col-span-2 row-span-2">
          {data && (
            <ParkingSpace width="100%" height="100%" slots={data.slots} handleClick={handleClick} />
          )}
        </div>
        <div className="bg-green-200 p-4 col-span-1 row-span-1">
          <div className="...">
              <ParkingSlotDetails slotId={slotId} />
          </div>
        </div>
        <div className="bg-green-200 p-4 col-span-1 row-span-1">
          <div className="...">
              Test
          </div>
        </div>
      </div>
    </div>
  )

}