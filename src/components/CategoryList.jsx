import CategoryItem from "./CategoryItem.jsx";
// import { useHistory } from 'react-router-dom';

const CategoryList = ({ catalog = [] }) => {
    // const { catalog } = props;

    return (
        <div className='list'>
            {catalog.map((i) => (
                <>
                    <CategoryItem key={i.idCategory} {...i} />
                </>
            ))}
        </div>
    );
};

export default CategoryList;
