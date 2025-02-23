import { TopBanner, LocationsHeader, Location } from "../components"

import { locations } from "../data"

const Locations = () => {
    return (
        <>
            <TopBanner
                key={'Locations'}
                header='Locations & order online'
                subheader="Come close, we don't bite"
            />

            <div className="px-18 py-16 mb-56 flex flex-col gap-y-10">
                <LocationsHeader />

                <div className="grid grid-cols-3 gap-8">
                    
                {
                    locations.map((location) => {
                        return (
                            <Location
                                state={location.state}
                                city={location.city}
                                address={location.address}
                                phoneNumber={location.number}                        
                            />
                        )
                    })
                }

                </div>


            </div>




        </>
    )
}

export default Locations