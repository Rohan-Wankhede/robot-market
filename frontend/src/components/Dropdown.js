import React from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({value, data, placeholder, placeholderValue, styleClass, onChange}) => {
    const handleChange = (event) => {
        const {value} = event.target;
        onChange(value);
    };

    return (
        <div className={`form-group ${styleClass}`}>
            <select
                value={value}
                className="form-control"
                onChange={handleChange}>
                <option value={placeholderValue}>{placeholder}</option>
                {data.map((item, key) => (
                    <option
                        key={key}
                        value={item.value}>
                        {item.label}
                    </option>
                ))}
            </select>
        </div>
    )
};

Dropdown.propTypes = {
    value: PropTypes.string,
    placeholder: PropTypes.string,
    placeholderValue: PropTypes.string,
    data: PropTypes.array.isRequired,
    styleClass: PropTypes.string,
    onChange: PropTypes.func.isRequired
};

Dropdown.defaultProps = {
    value: '',
    styleClass: '',
    placeholder: '',
    placeholderValue:''
};

export default Dropdown;

