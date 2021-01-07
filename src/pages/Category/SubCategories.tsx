import React from 'react'


// import lib
import { useHistory } from "react-router";
interface Props {
    subCategoryList: any;
}

const SubCategories = ({ subCategoryList }: Props) => {
    const history = useHistory();


    return (
        <div className="categoriesContainer">
            {subCategoryList.map(catItem => {
                return (
                    <div
                        onClick={() => catItem.url && history.push(`/e/${catItem.url.replace('/category/', '')}`)}
                        className="category">
                        <div className="category__imageContainer">
                            <img className="imag" src={catItem.icon ? catItem.icon : catItem.cover} alt="catImg" />
                        </div>
                        <div className="category__titleContainer">
                            <h4 className="title">
                                {catItem.name}
                            </h4>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}

export default SubCategories
