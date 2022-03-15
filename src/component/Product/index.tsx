import { Container, TitleComponent, Row, Col } from '../../styles/abstracts/_globalStyles';
import Item from '../Item';

export interface IProductProps {
    items: {
        id: string,
        name: string,
        imageFront: string,
        imageBack: string,
        type: string,
        rate: number,
        discount: number,
        oldPrice: number,
        timeImported: string,
        timeSold: number
    }[]
}

export default function Product (props : IProductProps) {
    return (
        <main className='product'>
            <Container>
        <TitleComponent>SHOPPINGs</TitleComponent>
        <Row>
          {
            props.items && props.items.map((item, index) => (
              <Col col={4} key={item.id}>
                <Item itemData={item} />
              </Col>
            ))
          }
        </Row>
      </Container>
        </main>
      );
}