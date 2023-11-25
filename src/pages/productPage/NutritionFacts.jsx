import React from "react";

const NutritionFacts = ({nutritionalInfo}) => {
    return(
        <div className="performance-facts">
            <header className="performance-facts_header">
                <h1 className="performance-facts_title">Nutrition Facts</h1>
                <p>Serving size 1/2 cup (about 82g)</p>
                <p>Serving per Portion 3</p>
            </header>

            <table className="performance-facts_table">
                <thead>
                    <tr>
                        <th colSpan="3" className="small-info">
                            Amount Per Serving
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <th colSpan="2">
                            <p>Calories</p>
                        </th>
                        <td>200</td>
                    </tr>

                    <tr className="thick-row">
                        <td colSpan="3" className="small-info">
                            <b>% Daily value*</b>
                        </td>
                    </tr>

                    <tr>
                        <th colSpan="2">
                            <b>Total Fat</b> 14g
                        </th>
                        <td>
                            <b>22%</b>
                        </td>
                    </tr>

                    <tr>
                        <td className="blank-cell"></td>
                        <th>saturated Fat 9g</th>
                        <td>
                            <b>22%</b>
                        </td>
                    </tr>

                    <tr>
                        <td className="blank-cell"></td>
                        <th>Trans Fat 0g</th>
                        <td></td>
                    </tr>

                    <tr>
                        <th colSpan="2">
                            <b>Cholesterol</b> 55mg
                        </th>
                        <td>
                            <b>18%</b>
                        </td>
                    </tr>

                    <tr>
                        <th colSpan="2">
                            <b>Sodium</b> 40mg
                        </th>
                        <td>
                            <b>2%</b>
                        </td>
                    </tr>

                    <tr>
                        <th colSpan="2">
                            <b>Total carbohydrate</b> 17g
                        </th>
                        <td>
                            <b>6%</b>
                        </td>
                    </tr>

                    <tr>
                        <td className="blank-cell"></td>
                        <th>Dietary Fiber 1g</th>
                        <td>
                            <b>4%</b>
                        </td>
                    </tr>

                    <tr>
                        <td className="blank-cell"></td>
                        <th>Sugars 14g</th>
                        <td></td>
                    </tr>

                    <tr className="thick-end">
                        <th colSpan="2">
                            <b>Protein</b> 3g
                        </th>
                        <td></td> 
                    </tr>
                </tbody>
            </table>

            <table className="performance-facts_table--grid">
                <tbody>
                    <tr>
                        <td colSpan="2">Vitamin A 10%</td>
                        <td>Vitamin C 0%</td>
                    </tr>

                    <tr className="thin-end">
                        <td colSpan="2">Calcium 10%</td>
                        <td>Iron 6%</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default NutritionFacts;