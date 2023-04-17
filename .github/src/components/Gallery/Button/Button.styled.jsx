import styled from 'styled-components';

export const Button = styled.div`
  padding: 8px 16px;
  border-radius: 2px;
  transition: all 250ms cubic-bezier(0.1, 0.8, 0.9, 0.15);
  text-align: center;
  display: inline-block;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  background: linear-gradient(
    145deg,
    rgba(220, 135, 15, 1) 0%,
    rgba(120, 20, 135, 1) 50%,
    rgba(0, 230, 255, 1) 100%
  );

  :hover {
    background: linear-gradient(
      290deg,
      rgba(179, 16, 60, 1) 0%,
      rgba(97, 18, 153, 1) 50%,
      rgba(69, 135, 33, 1) 100%
    );
  }
`;
