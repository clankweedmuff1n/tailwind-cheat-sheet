import PropTypes from 'prop-types'
import React, {Component, Suspense} from 'react'

interface Props {
    element: React.ReactNode,
}

export default class LazyLoad extends Component<Props> {
    static propTypes = {
        element: PropTypes.element.isRequired,
    };

    render() {
        return (
            <Suspense fallback={<div>loading....</div>}>
                {this.props.element}
            </Suspense>
        )
    }
}
