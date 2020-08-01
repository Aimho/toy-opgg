import styled from 'styled-components';

const Container = styled.div`
  width: 416px;
  height: 240px;
  position: relative;
  padding: 12px 16px;
  background-color: #fff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.02);
  display: inline-flex;
  align-items: center;
  border-radius: 16px;
`;

const Type = styled.span`
  position: absolute;
  left: 16px;
  top: 12px;
  font-style: italic;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  color: #fb842d;
`;

const Emoji = styled.h4`
  width: 50%;
  font-weight: bold;
  font-size: 100px;
  line-height: 117px;
  text-align: center;
`;

const InfoContainer = styled.div`
  padding-top: 16px;
  width: 50%;
  margin-bottom: auto;
`;

const TypoP = styled.p`
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 8px;
  span.info-title {
    padding-right: 8px;
    font-weight: normal;
    color: #727585;
  }
`;

const Name = styled.h5`
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  margin-bottom: 19px;
`;

const Price = styled(TypoP)`
  margin-bottom: 13px;
`;

const Divider = styled.hr`
  width: calc(100% - 30px);
  background-color: #c8cad2;
  margin: 12px 0px;
`;

const Actions = styled.span`
  position: absolute;
  right: 16px;
  bottom: 16px;
  margin-top: 32px;
  text-align: right;
  button + button {
    margin-left: 12px;
  }
`;

export {
  Container,
  Type,
  Emoji,
  InfoContainer,
  TypoP,
  Name,
  Price,
  Divider,
  Actions
};
