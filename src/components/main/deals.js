import React from 'react';
import {
  UncontrolledCarousel,
  Carousel,
  CarouselIndicators,
  CarouselItem,
  CarouselCaption,
  CarouselControl,
} from 'reactstrap';

class Deals extends React.Component {
  constructor() {
    super();
    this.state = {
      someKey: 'someValue'
    };
  }

  render() {
    return   <div>
    <UncontrolledCarousel
      items={[
        {
          altText: 'Oferta 1',
          caption: 'Esta es la oferta 1',
          key: 1,
          src: 'https://picsum.photos/id/123/1200/600',
        },
        {
          altText: 'Oferta 2',
          caption: 'Esta es la oferta 2',
          key: 2,
          src: 'https://picsum.photos/id/456/1200/600',
        },
        {
          altText: 'Oferta 3',
          caption: 'Esta es la oferta 3',
          key: 3,
          src: 'https://picsum.photos/id/678/1200/600',
        },
        {
          altText: 'Oferta 4',
          caption: 'Esta es la oferta 4',
          key: 4,
          src: 'https://picsum.photos/id/671/1200/600',
        },
      ]}
    ></UncontrolledCarousel>
    <br></br>
  </div>
  }

  componentDidMount() {
    this.setState({
      someKey: 'otherValue'
    });
  }
}

export default Deals;

