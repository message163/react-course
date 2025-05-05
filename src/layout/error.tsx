import { useRouteError } from 'react-router';

export default function Error() {
    const error = useRouteError();
    console.log(error);
    return (
        <div>
            <h1>Error</h1>
        </div>
    )
}
