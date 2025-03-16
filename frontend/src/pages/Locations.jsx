import { TopBanner, LocationsHeader, Location } from "../components"

import { locations } from "../data"

const Locations = () => {
    return (
        <>
            <TopBanner
                Key='Locations' 
                header='Locations & order online'
                subheader="Come close, we don't bite"
            />

            <div className="px-8 lg:px-16 py-8 lg:py-10 mb-20 flex flex-col gap-y-10">
                <LocationsHeader />

                <div className="grid lg:grid-cols-3 gap-8">
                    
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