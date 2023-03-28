import React from "react";
import PropTypes from "prop-types";

function DropDown(props) {
    const { value, data, styleClass, onChange } = props;
    const handleChange = (event) => {
        console.log(event.target.value);
    };
    return (
        <div className={`mb-3 xl:w-96 ${styleClass}`}>
            <select value={value} className='' onChange={handleChange}>
                {data?.map((item, key) => (
                    <option key={key} value={item.value}>
                        {item.lable}
                    </option>
                ))}
            </select>
        </div>
    );
}

DropDown.propTypes = {
    value: PropTypes.string,
    data: PropTypes.array.isRequired,
    styleClass: PropTypes.srting,
    onChange: PropTypes.func.isRequired,
};

DropDown.defaultProps = {
    value: "",
    styleClass: "",
};

export default DropDown;
