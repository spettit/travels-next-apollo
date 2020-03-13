import { useRouter } from 'next/router'

const Trip = () => {
    const router = useRouter()
    const {trip} = router.query
    return (
        <div>
        <p>Trip</p>
        <p>{trip}</p>
        
        
        </div>

    )
}


export default Trip