import { Link, useNavigate} from "react-router-dom";

const User = ({user}) => {
    const {id, name, website, email, phone} = user;

    const navigate = useNavigate();

    const showeBtn = () => {
        navigate(`/user/${id}`)
    }

    return (
        <div style={{
            border:'2px solid',
            padding:'10px',
            margin:'5px',
            borderRadius:'10px'

        }}>
            <h3>Name: {name}</h3>
            <h4>Website: {website}</h4>
            <h4>Email: {email}</h4>
            <h4>Phone: {phone}</h4>
            <Link to={`/user/${id}`}>Showe Info 1</Link>
            <br />
            <button onClick={showeBtn}>Showe Info 2</button>
        </div>
    );
};

export default User;