import { featuresContent } from "../../data.js"

import { Feature } from "../../components/index.js"

const Features = () => {




    return (
        <div id="Features" className="px-16 py-40 flex flex-col gap-y-20">
            {
                featuresContent.map((feature,i) => {
                    return (
                        <Feature
                            key={i}
                            index={i}
                            header={feature.header}
                            paragraph={feature.paragraph}
                            imageLink={feature.image}
                        />
                    )
                })
            }



        </div>
    )
}

export default Features