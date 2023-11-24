import { VehicleProps } from "@/props/vehicleProps"
import { Vehicle1, Vehicle2 } from "../icons"

const iconTypes:{[x: number]: any} = {
  1: Vehicle1,
  2: Vehicle2
};

export default function Vehicle(props: VehicleProps) {
  let {type} = {...props}
  let VehicleIcon = iconTypes[type]

  return (
    <VehicleIcon {...props} />
  )

}