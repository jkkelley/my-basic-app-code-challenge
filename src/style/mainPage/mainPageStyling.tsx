import styled, { css } from 'styled-components';

interface Props {
  secondary?: boolean;
  image?: boolean;
  titleContainer?: boolean;
  body?: boolean;
  mainPage?: boolean;
  numberedList?: boolean;
  spanTitle?: boolean;
}

const Wrapper = styled.div`
  width: 95%;
  margin: 75px auto;
  display: flex;

  display: block;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 24px;

  @media (min-width: 600px) {
    padding-left: 24px;
    padding-right: 24px;
  }

  @media (min-width: 1200px) {
    max-width: 1200px;
  }
`;

const MainPageContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-flow: row wrap;
  margin-top: -24px;
  width: calc(100% + 24px);
  margin-left: -24px;
`;

const Section = styled.div`
  flex-basis: 100%;
  -webkit-box-flex: 0;
  flex-grow: 0;
  max-width: 100%;
  box-sizing: border-box;
  margin: 0px;
  flex-direction: row;

  @media (min-width: 900px) {
    flex-basis: 33.3333%;
    -webkit-box-flex: 0;
    flex-grow: 0;
    max-width: 33.3333%;
    padding-right: 24px;
    padding-top: 24px;
  }
`;

const ListItem = styled.ul<Props>`
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;

  ${(props) =>
    props.numberedList &&
    css`
      list-style: none;
      margin: 0px;
      padding: 8px 0px;
      position: relative;
    `}
`;

const Container = styled.div<Props>`
  box-sizing: border-box;
  margin: 0px;
  flex-direction: row;

  @media (min-width: 600px) {
    flex-basis: 100%;
    -webkit-box-flex: 0;
    flex-grow: 0;
    max-width: 100%;
  }

  @media (min-width: 900px) {
    flex-basis: 66.6667%;
    -webkit-box-flex: 0;
    flex-grow: 0;
    max-width: 66.6667%;
    padding-top: 24px;
  }

  ${(props) =>
    props.secondary &&
    css`
      background-color: rgb(255, 255, 255);
      color: rgba(0, 0, 0, 0.87);
      transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      border-radius: 4px;
      box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px,
        rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
      overflow: hidden;
      text-align: left;
    `}

  ${(props) =>
    props.body &&
    css`
      padding-bottom: 24px;
      padding: 16px;
    `}

    ${(props) =>
    props.mainPage &&
    css`
      box-sizing: border-box;
      display: flex;
      flex-flow: row wrap;
      margin-top: -24px;
      width: calc(100% + 24px);
      margin-left: -24px;
    `}
`;

const TitleContainer = styled.div<Props>`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding: 16px;

  ${(props) =>
    props.titleContainer &&
    css`
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      padding: 16px;
    `}
`;

const SpanDisplay = styled.span<Props>`
  margin: 0px;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.334;
  letter-spacing: 0em;
  display: block;

  ${(props) =>
    props.spanTitle &&
    css`
      margin: 0px;
      font-family: Roboto, Helvetica, Arial, sans-serif;
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.5;
      letter-spacing: 0.00938em;
      display: block;
    `}
`;

const Images = styled.img`
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: 100%;
  object-fit: cover;
`;

const NumberedList = styled.li`
  -webkit-tap-highlight-color: transparent;
  background-color: transparent;
  outline: 0px;
  border-width: 0px 0px 1px;
  border-top-style: initial;
  border-right-style: initial;
  border-left-style: initial;
  border-top-color: initial;
  border-right-color: initial;
  border-left-color: initial;
  border-image: initial;
  margin: 0px;
  border-radius: 0px;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  appearance: none;
  color: inherit;
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  text-decoration: none;
  width: 100%;
  box-sizing: border-box;
  text-align: left;
  padding: 8px 16px;
  border-bottom-style: solid;
  border-bottom-color: rgba(18, 15, 15, 0.12);
  background-clip: padding-box;
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;

const Numbers = styled.div`
  min-width: 56px;
  color: rgba(0, 0, 0, 0.54);
  flex-shrink: 0;
  display: inline-flex;
`;

const ListContainer = styled.div`
  flex: 1 1 auto;
  min-width: 0px;
  margin-top: 4px;
  margin-bottom: 4px;
`;

const Box = styled.div`
  background-color: rgb(255, 255, 255);
  color: rgba(0, 0, 0, 0.87);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px,
    rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
  overflow: hidden;
  text-align: left;
`;

const TextBody = styled.div`
  padding-bottom: 24px;
  padding: 16px;
`;

const HooverElement = styled.div`
  overflow: hidden;
  pointer-events: none;
  position: absolute;
  z-index: 0;
  inset: 0px;
  border-radius: inherit;
`;

export {
  Box,
  Container,
  HooverElement,
  Images,
  Section,
  ListItem,
  ListContainer,
  MainPageContainer,
  NumberedList,
  Numbers,
  SpanDisplay,
  TextBody,
  TitleContainer,
  Wrapper
};
