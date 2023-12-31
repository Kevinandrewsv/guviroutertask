import { CourseCard } from "../components/courseCard";
import { useEffect,useState } from "react";

export default function Career() {

    const [allCourses,setAllCourses] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_MOCKS_COURSES_PATH}`)
        .then(respone => respone.json())
        .then((result) => {
            if(result.courses){
                setAllCourses(result.courses)
            }
        })
        .catch(error => console.log(error))
    },[]);

    return (
        <div>
            <div className="row g-5">
                {
                    allCourses.map((item,index) => {
                        if(item.category === "career"){
                            return <CourseCard key={index} details={item}/>
                        }
                    })
                }
            </div>
        </div>
    );
}