import ParkingSlot from "./ParkingSlot" 

type ParkingProps = React.SVGProps<SVGSVGElement> & {
    slots: {
        id: string
        name: string
        area: string
        isFree: boolean
        isProcessing: boolean
    }[],
    handleClick: any
}

export default function ParkingSpace(props: ParkingProps) {

    return (
        <svg width={props.width} height={props.height} viewBox="0 0 6800 4000" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Parking_1" clipPath="url(#clip0_0_1)">
          <g id="Layer 1">
            <g id="Group">
              <path id="Path" d="M-38 -1956H6803V6044H-38V-1956Z" fill="#4F4F4F"/>
            </g>
            <g id="Group_2">
              <g id="Group_3">
                <path id="Path_2" d="M1143.5 3892.2H902.9" stroke="white" strokeWidth="42.2" strokeMiterlimit="10"/>
              </g>
              <path id="Path_3" d="M1019.3 3886.3V3619.6" stroke="white" strokeWidth="42.2" strokeMiterlimit="10"/>
              <path id="Path_4" d="M1019.3 3491.3V3358" stroke="white" strokeWidth="42.2" strokeMiterlimit="10"/>
              <path id="Path_5" d="M1019.3 3232V3100.9" stroke="white" strokeWidth="42.2" strokeMiterlimit="10"/>
              <path id="Path_6" d="M1019.3 2978.5V2837.4" stroke="white" strokeWidth="42.2" strokeMiterlimit="10"/>
              <path id="Path_7" d="M1019.3 2718.3V2585.4" stroke="white" strokeWidth="42.2" strokeMiterlimit="10"/>
              <path id="Path_8" d="M1019.3 2455.3V2285.4" stroke="white" strokeWidth="42.2" strokeMiterlimit="10"/>
              <g id="Group_4">
                <path id="Path_9" d="M2077.2 3892.2H1836.6" stroke="white" strokeWidth="42.2" strokeMiterlimit="10"/>
              </g>
              <path id="Path_10" d="M1953.1 3886.3V3619.6" stroke="white" strokeWidth="42.2" strokeMiterlimit="10"/>
              <path id="Path_11" d="M1953.1 3491.3V3358" stroke="white" strokeWidth="42.2" strokeMiterlimit="10"/>
              <path id="Path_12" d="M1953.1 3232V3100.9" stroke="white" strokeWidth="42.2" strokeMiterlimit="10"/>
              <path id="Path_13" d="M1953.1 2978.5V2837.4" stroke="white" strokeWidth="42.2" strokeMiterlimit="10"/>
              <path id="Path_14" d="M1953.1 2718.3V2585.4" stroke="white" strokeWidth="42.2" strokeMiterlimit="10"/>
              <path id="Path_15" d="M1953.1 2455.3V2285.4" stroke="white" strokeWidth="42.2" strokeMiterlimit="10"/>
              <g id="Group_5">
                <path id="Path_16" d="M3020.8 3892.2H2780.2" stroke="white" strokeWidth="42.2" strokeMiterlimit="10"/>
              </g>
              <path id="Path_17" d="M2896.7 3886.3V3619.6" stroke="white" strokeWidth="42.2" strokeMiterlimit="10"/>
              <path id="Path_18" d="M2896.7 3491.3V3358" stroke="white" strokeWidth="42.2" strokeMiterlimit="10"/>
              <path id="Path_19" d="M2896.7 3232V3100.9" stroke="white" strokeWidth="42.2" strokeMiterlimit="10"/>
              <path id="Path_20" d="M2896.7 2978.5V2837.4" stroke="white" strokeWidth="42.2" strokeMiterlimit="10"/>
              <path id="Path_21" d="M2896.7 2718.3V2585.4" stroke="white" strokeWidth="42.2" strokeMiterlimit="10"/>
              <path id="Path_22" d="M2896.7 2455.3V2285.4" stroke="white" strokeWidth="42.2" strokeMiterlimit="10"/>
            </g>
            <g id="Group_6">
              <g id="Group_7">
                <path id="Path_23" d="M1144.3 107.801H903.801" stroke="white" strokeWidth="42.2" strokeMiterlimit="10"/>
              </g>
              <path id="Path_24" d="M1020.2 113.701V380.401" stroke="white" strokeWidth="42.2" strokeMiterlimit="10"/>
              <path id="Path_25" d="M1020.2 508.701V642.001" stroke="white" strokeWidth="42.2" strokeMiterlimit="10"/>
              <path id="Path_26" d="M1020.2 768V899.1" stroke="white" strokeWidth="42.2" strokeMiterlimit="10"/>
              <path id="Path_27" d="M1020.2 1021.5V1162.6" stroke="white" strokeWidth="42.2" strokeMiterlimit="10"/>
              <path id="Path_28" d="M1020.2 1281.7V1414.6" stroke="white" strokeWidth="42.2" strokeMiterlimit="10"/>
              <path id="Path_29" d="M1020.2 1544.7V1714.6" stroke="white" strokeWidth="42.2" strokeMiterlimit="10"/>
              <g id="Group_8">
                <path id="Path_30" d="M2078.1 107.801H1837.5" stroke="white" strokeWidth="42.2" strokeMiterlimit="10"/>
              </g>
              <path id="Path_31" d="M1954 113.701V380.401" stroke="white" strokeWidth="42.2" strokeMiterlimit="10"/>
              <path id="Path_32" d="M1954 508.701V642.001" stroke="white" strokeWidth="42.2" strokeMiterlimit="10"/>
              <path id="Path_33" d="M1954 768V899.1" stroke="white" strokeWidth="42.2" strokeMiterlimit="10"/>
              <path id="Path_34" d="M1954 1021.5V1162.6" stroke="white" strokeWidth="42.2" strokeMiterlimit="10"/>
              <path id="Path_35" d="M1954 1281.7V1414.6" stroke="white" strokeWidth="42.2" strokeMiterlimit="10"/>
              <path id="Path_36" d="M1954 1544.7V1714.6" stroke="white" strokeWidth="42.2" strokeMiterlimit="10"/>
              <g id="Group_9">
                <path id="Path_37" d="M3021.7 107.801H2781.1" stroke="white" strokeWidth="42.2" strokeMiterlimit="10"/>
              </g>
              <path id="Path_38" d="M2897.6 113.701V380.401" stroke="white" strokeWidth="42.2" strokeMiterlimit="10"/>
              <path id="Path_39" d="M2897.6 508.701V642.001" stroke="white" strokeWidth="42.2" strokeMiterlimit="10"/>
              <path id="Path_40" d="M2897.6 768V899.1" stroke="white" strokeWidth="42.2" strokeMiterlimit="10"/>
              <path id="Path_41" d="M2897.6 1021.5V1162.6" stroke="white" strokeWidth="42.2" strokeMiterlimit="10"/>
              <path id="Path_42" d="M2897.6 1281.7V1414.6" stroke="white" strokeWidth="42.2" strokeMiterlimit="10"/>
              <path id="Path_43" d="M2897.6 1544.7V1714.6" stroke="white" strokeWidth="42.2" strokeMiterlimit="10"/>
            </g>
            <path id="Path_44" d="M287.301 1714.6H6486V2285.4H287.301V1714.6Z" stroke="white" strokeWidth="42.2" strokeMiterlimit="10"/>
            <g id="Group copy 83">
              <g id="Group_10">
                <path id="Path_45" d="M3999.5 3892.2H3758.9" stroke="white" strokeWidth="42.2" strokeMiterlimit="10"/>
              </g>
              <path id="Path_46" d="M3875.3 3886.3V3619.6" stroke="white" strokeWidth="42.2" strokeMiterlimit="10"/>
              <path id="Path_47" d="M3875.3 3491.3V3358" stroke="white" strokeWidth="42.2" strokeMiterlimit="10"/>
              <path id="Path_48" d="M3875.3 3232V3100.9" stroke="white" strokeWidth="42.2" strokeMiterlimit="10"/>
              <path id="Path_49" d="M3875.3 2978.5V2837.4" stroke="white" strokeWidth="42.2" strokeMiterlimit="10"/>
              <path id="Path_50" d="M3875.3 2718.3V2585.4" stroke="white" strokeWidth="42.2" strokeMiterlimit="10"/>
              <path id="Path_51" d="M3875.3 2455.3V2285.4" stroke="white" strokeWidth="42.2" strokeMiterlimit="10"/>
              <g id="Group_11">
                <path id="Path_52" d="M4933.2 3892.2H4692.6" stroke="white" strokeWidth="42.2" strokeMiterlimit="10"/>
              </g>
              <path id="Path_53" d="M4809.1 3886.3V3619.6" stroke="white" strokeWidth="42.2" strokeMiterlimit="10"/>
              <path id="Path_54" d="M4809.1 3491.3V3358" stroke="white" strokeWidth="42.2" strokeMiterlimit="10"/>
              <path id="Path_55" d="M4809.1 3232V3100.9" stroke="white" strokeWidth="42.2" strokeMiterlimit="10"/>
              <path id="Path_56" d="M4809.1 2978.5V2837.4" stroke="white" strokeWidth="42.2" strokeMiterlimit="10"/>
              <path id="Path_57" d="M4809.1 2718.3V2585.4" stroke="white" strokeWidth="42.2" strokeMiterlimit="10"/>
              <path id="Path_58" d="M4809.1 2455.3V2285.4" stroke="white" strokeWidth="42.2" strokeMiterlimit="10"/>
              <g id="Group_12">
                <path id="Path_59" d="M5876.8 3892.2H5636.2" stroke="white" strokeWidth="42.2" strokeMiterlimit="10"/>
              </g>
              <path id="Path_60" d="M5752.7 3886.3V3619.6" stroke="white" strokeWidth="42.2" strokeMiterlimit="10"/>
              <path id="Path_61" d="M5752.7 3491.3V3358" stroke="white" strokeWidth="42.2" strokeMiterlimit="10"/>
              <path id="Path_62" d="M5752.7 3232V3100.9" stroke="white" strokeWidth="42.2" strokeMiterlimit="10"/>
              <path id="Path_63" d="M5752.7 2978.5V2837.4" stroke="white" strokeWidth="42.2" strokeMiterlimit="10"/>
              <path id="Path_64" d="M5752.7 2718.3V2585.4" stroke="white" strokeWidth="42.2" strokeMiterlimit="10"/>
              <path id="Path_65" d="M5752.7 2455.3V2285.4" stroke="white" strokeWidth="42.2" strokeMiterlimit="10"/>
            </g>
            <g id="Group copy 87">
              <g id="Group_13">
                <path id="Path_66" d="M4000.3 107.801H3759.8" stroke="white" strokeWidth="42.2" strokeMiterlimit="10"/>
              </g>
              <path id="Path_67" d="M3876.2 113.701V380.401" stroke="white" strokeWidth="42.2" strokeMiterlimit="10"/>
              <path id="Path_68" d="M3876.2 508.701V642.001" stroke="white" strokeWidth="42.2" strokeMiterlimit="10"/>
              <path id="Path_69" d="M3876.2 768V899.1" stroke="white" strokeWidth="42.2" strokeMiterlimit="10"/>
              <path id="Path_70" d="M3876.2 1021.5V1162.6" stroke="white" strokeWidth="42.2" strokeMiterlimit="10"/>
              <path id="Path_71" d="M3876.2 1281.7V1414.6" stroke="white" strokeWidth="42.2" strokeMiterlimit="10"/>
              <path id="Path_72" d="M3876.2 1544.7V1714.6" stroke="white" strokeWidth="42.2" strokeMiterlimit="10"/>
              <g id="Group_14">
                <path id="Path_73" d="M4934.1 107.801H4693.5" stroke="white" strokeWidth="42.2" strokeMiterlimit="10"/>
              </g>
              <path id="Path_74" d="M4810 113.701V380.401" stroke="white" strokeWidth="42.2" strokeMiterlimit="10"/>
              <path id="Path_75" d="M4810 508.701V642.001" stroke="white" strokeWidth="42.2" strokeMiterlimit="10"/>
              <path id="Path_76" d="M4810 768V899.1" stroke="white" strokeWidth="42.2" strokeMiterlimit="10"/>
              <path id="Path_77" d="M4810 1021.5V1162.6" stroke="white" strokeWidth="42.2" strokeMiterlimit="10"/>
              <path id="Path_78" d="M4810 1281.7V1414.6" stroke="white" strokeWidth="42.2" strokeMiterlimit="10"/>
              <path id="Path_79" d="M4810 1544.7V1714.6" stroke="white" strokeWidth="42.2" strokeMiterlimit="10"/>
              <g id="Group_15">
                <path id="Path_80" d="M5877.7 107.801H5637.1" stroke="white" strokeWidth="42.2" strokeMiterlimit="10"/>
              </g>
              <path id="Path_81" d="M5753.6 113.701V380.401" stroke="white" strokeWidth="42.2" strokeMiterlimit="10"/>
              <path id="Path_82" d="M5753.6 508.701V642.001" stroke="white" strokeWidth="42.2" strokeMiterlimit="10"/>
              <path id="Path_83" d="M5753.6 768V899.1" stroke="white" strokeWidth="42.2" strokeMiterlimit="10"/>
              <path id="Path_84" d="M5753.6 1021.5V1162.6" stroke="white" strokeWidth="42.2" strokeMiterlimit="10"/>
              <path id="Path_85" d="M5753.6 1281.7V1414.6" stroke="white" strokeWidth="42.2" strokeMiterlimit="10"/>
              <path id="Path_86" d="M5753.6 1544.7V1714.6" stroke="white" strokeWidth="42.2" strokeMiterlimit="10"/>
            </g>

            {
              props.slots && props?.slots?.map((item) => {
                return (
                  <ParkingSlot key={item.id} handleClick={props.handleClick} id={item.id} name={item.name} area={item.area} isFree={item.isFree} isProcessing={item.isProcessing} />
                )
              })
            }

          </g>
        </g>
    </svg>
    )
}