import { useNavigate, useRouteError } from "react-router-dom";

const Errorpage = () => {
    //এটার মাধমে ডাটা খুজে না পেলে  কিছু এরর দেখাতে কাজ করে
    const error = useRouteError();
    console.log(error)

    const navigate = useNavigate();
    const backBtn = () => {
        navigate(-1);
    }
    return (
        <div>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <h1>
                <i>{error.status || error.message}</i>
            </h1>

            <button onClick={backBtn}>Go Back</button>
        </div>
    );
};

export default Errorpage;