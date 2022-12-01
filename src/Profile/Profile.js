import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ProfileImg from './Photo'
import MynameAlert from './MynameAlert';

function Profile(props){
    
    
    const fullName = props.fullName;
    const bio = props.bio
    const profession = props.profession
    const imgURL =props.imgURL

     const myFunction=(props)=> {
      console.log('Cliqué',props.fullName);
     alert(`my Name is ${props.fullName},  😊`);
      
    }
    return(
<Card style={{ width: '500px',marginTop:"50px", backgroundImage: "linear-gradient(black,black)",
      color: "black",}}>
    
    <Card.Body>
        <Card.Title><h1 style={{color:"revert"}}>{fullName}</h1></Card.Title>
        <ProfileImg imgURL = {imgURL}/>
        <span><h5 style={{marginTop:"50px",color:"black"}}>{profession}</h5></span>
        <Card.Text>
        {bio}
        </Card.Text>
        <Button  onClick={()=>myFunction(props)}  variant="success"> More Information </Button>
    </Card.Body>
    </Card>
    )
}

export default Profile;