"use client"
import Parking from '../../components/Parking'
import parkingData from '../../data.json'
import { useMutation, useQuery } from '@apollo/client'
import { GET_PARKING_SLOTS } from 'graphql/queries'

export default function Page() {
  /*const { data, loading, error } = useQuery(GET_PARKING_SLOTS, {
    variables: { id: "655f2e83b39d57c1549879c5" },
  });*/
  
  return (
    <main className="flex min-h-screen flex-col items-left justify-between p-24">
      <div>
        <Parking />
      </div>
    </main>
  )
}