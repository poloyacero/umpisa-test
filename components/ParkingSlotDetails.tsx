import { GET_PARKING_SLOT } from '@/graphql/queries';
import { ADD_PARK } from '@/graphql/mutations'
import { useMutation, useQuery } from '@apollo/client'
import styles from '../styles/parking.module.css'

type ParkingSlotProps = {
    slotId: String
}

export default function ParkingDetails(props: ParkingSlotProps) {
    const { data, loading, error } = useQuery(GET_PARKING_SLOT, {
        variables: { id: props.slotId },
    });

    const [addParking] = useMutation(ADD_PARK, {
        variables: { parkingSlotId: props.slotId, vehicleId: "655f3c00b39d57c1549879cc" },
        refetchQueries: [{ query: GET_PARKING_SLOT, variables: { id: props.slotId } }]
    })

    const handleAddParking = () => {
		addParking({ variables: { parkingSlotId: props.slotId, vehicleId: "655f3c00b39d57c1549879cc" } });
	};

    return (
        <div>
            {
                data &&
                <>
                    <p>{data?.slot.name}</p>
                    <button disabled={ !data?.slot.isFree ? true : false } className={`${styles.reserve} ${!data?.slot.isFree && styles.notAvailable}`} onClick={handleAddParking}>
                        Reserve
                    </button>
                </>
            }
        </div>
    )
}