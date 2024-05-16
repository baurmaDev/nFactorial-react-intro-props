import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './Profile.css'

const Profile = ({ userData }) => {
    const { title, description } = userData;  
    return (
        <div className="home-container">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
export default Profile;