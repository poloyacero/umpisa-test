import * as React from 'react'
import parkingStyle from '../styles/parking.module.css'
import VehicleIcon from './Vehicle'
import { VehicleCoordinates, VehicleUnit } from '@/props/vehicleProps'

type ParkingSlotProps = {
    id: string
    name: string
    area: string
    isFree: boolean
    isProcessing: boolean
    //vehicle: VehicleUnit | null
    //coordinates: VehicleCoordinates
    //isInverse: boolean
    handleClick: (event: React.MouseEvent<SVGPathElement>) => void
}

export default function ParkingSlot(props: ParkingSlotProps) {
  return (
    <g>
      <path id={props.id} name={props.name} onClick={props.handleClick} className={`${parkingStyle.slot} ${props.isProcessing && parkingStyle.processing} ${props.isFree && parkingStyle.free} ${!props.isFree && parkingStyle.notFree}`} d={props.area} stroke="#4F4F4F" />
      {/*props.vehicle != null && !props.isProcessing ? <VehicleIcon width={props.vehicle.width} height={props.vehicle.height} type={props.vehicle.icon} x={props.coordinates.x} y={props.coordinates.y} /> : null*/}
    </g>
  )
}