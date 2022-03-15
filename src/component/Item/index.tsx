/* eslint-disable react/no-array-index-key */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useMemo } from 'react';
import { Flex, Paragraph } from '../../styles/abstracts/_globalStyles';
import {
  ItemBox,
  ItemTag,
  ItemImageField,
  ItemContentField,
  ImageFront,
  ImageBack,
  RatingsStars,
  RatingPercent,
  ItemCurrentPrice,
  ItemOldPrice,
  CartButton,
  CartIcon,
  Ratings,
  ItemPrice,
  ItemCol,
  ItemName
} from './ItemStyle';

import { numberStar, numberStarRemain, sellPrice } from '../util';

export interface IItemProps {
  itemData?: any;
}

export default function Item({ itemData }: IItemProps) {
  const ratingsStars = useMemo(() => (
    [...Array(numberStar(itemData.rate))]
  ), [itemData.rate]);

  const remainStars = useMemo(() => (
    [...Array(numberStarRemain(numberStar(itemData.rate)))]
  ), [itemData.rate]);
  let dateNow = new Date();
  return (
    <ItemBox>
      <ItemImageField>
        {
          console.log(Math.ceil(Math.abs(dateNow.getTime() - new Date(itemData.timeImported).getTime()) / (1000 * 60 * 60 * 24)))
        }
        {
          Date.now() - new Date(itemData.timeImported).getTime() <= 7 ? <ItemTag type='new'>New</ItemTag> :
            (itemData.rate >= 90 && itemData.timeSold > 1000 ? <ItemTag type='best sell'>Best Sell</ItemTag> : 
            (itemData.rate >= 90 ? <ItemTag type='hot'>Hot</ItemTag> : 
            (itemData.discount > 0 && itemData.discount < 20 ? <ItemTag type='sale'>Sale</ItemTag> : 
            (itemData.discount > 0 && itemData.discount >= 20 ? <ItemTag type='sale'>-{itemData.discount}%</ItemTag> : <ItemTag type=''></ItemTag>))))
        }
        <ImageFront src={itemData.imageFront || ""} alt=""/>
        <ImageBack src={itemData.imageBack || ""} alt=""/>
      </ItemImageField>
      <ItemContentField>
        <Paragraph>{itemData.type || ""}</Paragraph>
        <ItemName>{itemData.name || ""}</ItemName>
        <Flex>
          <ItemCol>
            <Ratings>
              <RatingsStars>
                {
                  ratingsStars.map((star, index) => <FontAwesomeIcon icon={faStar} color="#FFCC00" key={index}/>)
                }
                {
                  numberStarRemain(numberStar(itemData.rate)) > 0 && 
                  remainStars.map((star, index) => <FontAwesomeIcon icon={faStar} color="#DDDDDD" key={index}/>)
                }
              </RatingsStars>
              <RatingPercent >{itemData.rate || '0'}%</RatingPercent>
            </Ratings>
            <ItemPrice>
              <ItemCurrentPrice>
                ${sellPrice(itemData.oldPrice, itemData.discount)}
              </ItemCurrentPrice>
              {
                itemData.discount ? <ItemOldPrice>${itemData.oldPrice || "0"}</ItemOldPrice> : ""
              }
            </ItemPrice>
          </ItemCol>
          <ItemCol>
            <CartButton>
              <CartIcon>
                <FontAwesomeIcon icon={faShoppingCart} color="#009933" />
              </CartIcon>
            </CartButton>
          </ItemCol>
        </Flex>
      </ItemContentField>
    </ItemBox>
  );
}
