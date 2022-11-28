import { FunctionComponent, ReactElement } from "react";
import { Feature } from "../../components";
import { featuresData } from "../../data";
import { IFeature } from "../../interfaces";
import "./features.style.css";

const Features: FunctionComponent = (): ReactElement => {
    return (
        <div className="gpt3__features section__padding" id="features">
            <div className="gpt3__features-heading">
                <h1 className="gradient__text">
                    The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.
                </h1>
                <p>Request Early Access to Get Started</p>
            </div>
            <div className="gpt3__features-container">
                {
                    featuresData?.map((item: IFeature, index: number) => {
                        return (<Feature 
                                    title={item.title}
                                    text={item?.text}
                                    key={item.title + index}
                                />)
                    })
                }
            </div>
        </div>
    )
};

export default Features;