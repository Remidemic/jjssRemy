import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function PicShow() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://cdn-images.farfetch-contents.com/15/57/20/59/15572059_28291127_600.jpg" />
      <Card.Body>
        <Card.Title>Pic Show</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default PicShow;