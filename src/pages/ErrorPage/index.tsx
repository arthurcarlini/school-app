import './styles.css'

import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error:any = useRouteError()
    console.error(error)

    return (
        <div id="error-page">
            <h1>🤔</h1>
            <p>Something is wrong here.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}

export default ErrorPage