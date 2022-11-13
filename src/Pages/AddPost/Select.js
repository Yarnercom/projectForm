import React from 'react';

const Select = ({title, list}) => {
    return (
        <div>
            <h3>
                {title}
            </h3>
            <select name="" id="">
                <option selected disabled>
                    Выберите
                </option>

                {
                    list.map(item => (
                        <option value="">{item}</option>
                    ))
                }
            </select>
        </div>
    );
};

export default Select;