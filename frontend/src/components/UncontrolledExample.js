import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.supershoes.com/common/images/products/large/10001-4SN_QUARTER.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Men</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.supershoes.com/common/images/products/large/10001-6QQ_QUARTER.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Women</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/206810_730_ALT140/crocs"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Kids</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;