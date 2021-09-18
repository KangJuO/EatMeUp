import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom'
const Card = ({ recipes }) => {
  return recipes.map((recipe, idx) => {
    return (
      <RecipeCard>
        <div className='recipe-card-tag'>Medium</div>
        <div className='recipe-img_box'>
          <img
            src={`${recipe.main_image}`}
            alt='recipe'
            className='recipe-img'
          />
        </div>
        <div className='recipe-dc_box'>
          <div className='recipe-dc-left_box'>
            <div className='recipe-title_box'>{recipe.title}</div>
            <div className='recipe-ingre_box'>
              <div className='recipe-ingre-label'>
                <span>주재료</span>
              </div>
              <div className='recipe-ingres'>
                <span>돼지전지</span>
                <span>양파</span>
                <span>대파</span>
              </div>
            </div>
          </div>
          <div className='recipe-dc-right_box'>
            <Link to="/user/myrecipe/edit"><i class='far fa-edit'></i></Link>
            <i class='far fa-trash-alt'></i>
          </div>
        </div>
      </RecipeCard>
     
    );
  });
};

const RecipeCard = styled.div`
  width: 90%;
  height: 320px;
  margin: 0.5rem auto;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.1);
  border-radius: 25px;
  position: relative;
  display: inline-block;

  .recipe-card-tag {
    position: absolute;
    top: 15px;
    left: 15px;
    width: 80px;
    height: 35px;
    background-color: rgba(229, 229, 229, 0.8);
    border-radius: 30px;
    text-align: center;
    line-height: 35px;
  }

  .recipe-dc-left_box {
    width: 80%;
    margin-left: 10px;
  }

  .recipe-dc-right_box {
    width: 20%;
    display: flex;
    justify-content: center;
    margin-top: 20px;
    margin-right: 20px;
  }

  .far {
    font-size: 20px;
    margin-right: 10px;
  }

  .fa-trash-alt {
    margin-top: 3px;
  }

  .recipe-img_box {
    width: 100%;
    height: 65%;
  }

  .recipe-img_box > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 25px 25px 0px 0px;
  }

  .recipe-dc_box {
    display: flex;
    justify-content: space-between;
  }

  .recipe-title_box {
    font-size: 20px;
    font-weight: 500;
    font-family: Noto Sans KR;
    text-indent: 20px;
    margin-top: 10px;
  }

  .recipe-ingre_box {
    margin-top: 8px;
  }

  .recipe-ingre-label {
    font-size: 12px;
    text-indent: 20px;
    margin-bottom: 5px;
  }

  .recipe-ingres {
    font-size: 10px;
    margin-left: 12px;
  }

  .recipe-ingres > span {
    padding: 3px 5px 3px 5px;
    margin: 3px;
    border-radius: 20px;
    background-color: #eaeaea;
  }
`;

export default Card;
