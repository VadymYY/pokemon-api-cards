import React from 'react';
import { BrowserRouter } from 'react-router-dom';

const withRouterProvider = (ComposedComponent) => {
    class hoc extends React.Component {
        render() {
            return (
                <BrowserRouter>
                    <ComposedComponent {...this.props} />
                </BrowserRouter>
            );
        }
    }

    return hoc;
};

export default withRouterProvider;
