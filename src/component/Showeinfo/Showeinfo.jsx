import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const Showeinfo = () => {
    // api  ডাটা লোড করে 
    const user = useLoaderData();

    const {name, website, email, phone} = user;

    // এটা মাধমে পেজে থেকে বাইরে যাতে কাজ করে go back😂
    const navigat = useNavigate()

    const {userId} = useParams();
    console.log(userId)

    const goBack = () => {
        navigat(-1)
    }
    return (
        <div>
            <h1>Showe Info</h1>
            <div style={{
                width:'500px',
                border:'1px solid',
                padding:'5px',
                margin:'5px auto',
                borderRadius:'10px'
            }}>
                <h3>Name: {name}</h3>
                <h4>Website: {website}</h4>
                <h4>Email: {email}</h4>
                <h4>Phone {phone}</h4>
                <button onClick={goBack}>Go Back</button>
            </div>
        </div>
    );
};

export default Showeinfo;