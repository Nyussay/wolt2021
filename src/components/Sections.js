
import {woltData} from "../data"
import Section  from "./Section"

const Sections = () => {
    return (
        <>
            { woltData.map((section, index)=>{
                return  <Section section={section} key={index}/>
                })       
            }
        </>         
    )
}

export default Sections;