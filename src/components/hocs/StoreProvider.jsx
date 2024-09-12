import React from 'react';
import { Provider } from 'react-redux';

import { store } from '../../redux/store';

const withStoreProvider = (ComposedComponent) => {
    class hoc extends React.Component {
        render() {
            return (
                <Provider store={store}>
                    <ComposedComponent {...this.props} />
                </Provider>
            );
        }
    }

    return hoc;
};

export default withStoreProvider;
