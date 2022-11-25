import React, { useState, useEffect } from 'react';
import TestResult from './TestResult/TestResult';
import LikeBeer from './LikeBeer/LikeBeer';

const Mypage = () => {
  const [testResult, setTestResult] = useState([]);
  const [likeBeer, setLikeBeer] = useState([]);

  useEffect(() => {
    fetch('/data/mypagedata.json', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(data => {
        setTestResult(data.test_result);
        setLikeBeer(data.like_beerlist);
      });
  }, []);

  return (
    <div>
      <div>
        좋아하는 맥주
        {likeBeer.map(beer => {
          return <LikeBeer beer={beer} key={beer.id} />;
        })}
      </div>

      <div>
        테스트 결과 맥주
        {testResult.map(result => {
          return <TestResult result={result} key={result.id} />;
        })}
      </div>
    </div>
  );
};

export default Mypage;
