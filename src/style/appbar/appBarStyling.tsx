import styled from 'styled-components';

const TopAppBar = styled.div`
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px,
    rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  flex-shrink: 0;
  position: fixed;
  z-index: 1100;
  top: 0px;
  left: auto;
  right: 0px;
  background-color: rgb(25, 118, 210);
  color: rgb(255, 255, 255);
`;

const TopAppBarContainer = styled.div`
  position: relative;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  min-height: 56px;

  @media (min-width: 600px) {
    min-height: 64px;
    padding-left: $media-padding;
    padding-right: $media-padding;
  }
`;

export { TopAppBar, TopAppBarContainer };