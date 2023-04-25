import PropTypes from 'prop-types'
import { Button } from '../Buttons/Button'

function ErrorFallback({ error, resetErrorBoundary }) {
    // Call resetErrorBoundary() to reset the error boundary and retry the render.

    return (
        <div role="alert">
            <h2>Something went wrong:</h2>
            <pre style={{ color: "red" }}>{error.message}</pre>
            <Button label="Try Again" onClick={resetErrorBoundary} primary size="small" />
        </div>
    )
}

ErrorFallback.propTypes = {
    resetErrorBoundary: PropTypes.func,
    error: PropTypes.object
}

export default ErrorFallback