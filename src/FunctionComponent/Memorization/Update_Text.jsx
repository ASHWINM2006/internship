import { memo } from "react";
import PropTypes from 'prop-types';

const Update_Number2 = ({ value }) => {
    console.log("number 2");
    return (
        <div>
            <h2>This is number {value}</h2>
        </div>
    );
};

Update_Number2.propTypes = {
    value: PropTypes.number.isRequired,
};

export default memo(Update_Number2);