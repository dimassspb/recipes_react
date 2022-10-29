import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getFiltertedCategory } from "../api";
import Preloader from "../components/Preloader";
import MealsList from "../components/MealsList";

const Category = () => {
    const { name } = useParams();
    // const { goBack } = useHistory();
    const navigate = useNavigate();

    const [meals, setMeals] = useState([]);

    useEffect(() => {
        getFiltertedCategory(name).then((data) => {
            setMeals(data.meals);
        });
    }, [name]);
    return (
        <>
            <button className='btn' onClick={() => navigate(-1)}>
                Go back
            </button>
            {!meals.length ? <Preloader /> : <MealsList meals={meals} />}
        </>
    );
};

export default Category;
