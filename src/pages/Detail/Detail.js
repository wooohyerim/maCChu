import React from 'react';
import styled from 'styled-components';

const Detail = () => {
  return (
    <Container>
      <BeerDetail>
        <img src="" alt="" />
        <div>
          <div>이름</div>
          <div>종류</div>
          <div>도수</div>
          <div>특징</div>
        </div>
        <button>좋아요</button>
      </BeerDetail>
      <ReviewWrap>
        <Rating>rating.map</Rating>
        <Review>리뷰.map</Review>
      </ReviewWrap>
    </Container>
  );
};

export default Detail;

const Container = styled.div``;

const BeerDetail = styled.div``;

const ReviewWrap = styled.div``;

const Rating = styled.div``;

const Review = styled.div``;
