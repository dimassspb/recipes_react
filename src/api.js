import { API_URL } from "./config";

const getMealById = async (mealId) => {
    const response = await fetch(API_URL + "lookup.php?i=" + mealId);
    const data = await response.json();
    console.log(data);
    return data;
};

const getAllCategories = async () => {
      const response = await fetch(API_URL + "categories.php");
      return await response.json();
}

const getFiltertedCategory = async (categoryName) => {
        const response = await fetch(API_URL + "filter.php?c=" + categoryName);
        const data = await response.json();
        return data;
}

export { getMealById, getAllCategories, getFiltertedCategory };
