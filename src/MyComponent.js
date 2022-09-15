import { Children } from "react";
import PropTypes from 'prop-types';

// const MyComponent = props =>{
//     const {name,favoriteNumber,children} = props;
//     return <div>나의 새롭고 멋진 {name}컴포넌트 <br /> 
//     Children값은 {children}입니다.
//     <br />
//     내가 좋아하는 숫자는 {favoriteNumber}
//     </div>
// }

// MyComponent.defaultProps = {
//     name : '바보'
// }

// MyComponent.propTypes = {
//     name : PropTypes.string,
//     favoriteNumber : PropTypes.number.isRequired
// }
// export default MyComponent;
import React, { Component } from 'react';

class MyComponent extends Component {
    render() {
        const { name, favoriteNumber, children } = this.props;
        return <div>나의 새롭고 멋진 {name}컴포넌트 <br />
            Children값은 {children}입니다.
            <br />
            내가 좋아하는 숫자는 {favoriteNumber}
        </div>
    }
}

MyComponent.defaultProps = {
    name: '바보',
    favoriteNumber : 400
}

MyComponent.propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
}

export default MyComponent;