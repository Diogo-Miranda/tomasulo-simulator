import Styled from 'styled-components'

const Form = Styled.form`
  & > * + * {
    margin-top: 20px;
  }

  fieldset {
    padding: 0;
    margin-left: 0;
    margin-right: 0;
    border: none;
  }

  label {
    display: inline-block;
    font-size: 14px;
    padding-bottom: 8px;
  }

  input {
    width: 100%;
    border: 1px solid #c5c7d0;
    border-radius: 5px;
    padding: 11px 12px;
    transition: all 0.2s ease-out;
    font-size: 14px;

    &:hover {
      background-color: #fafafa;
      border-color: rgb(179, 179, 179);
    }

    &:focus {
      border-color: #2684ff;
      background-color: #fff;
      outline: none;
    }

    &:-webkit-autofill::first-line {
      font-family: $body-font;
      font-size: 14px;
    }
  }

  button {
    background-color: #2684ff;
    border-radius: 5px;
    color: #fff;
    width: 5.625rem;
    height: 2.5rem;
    transition: background-color 0.2s ease-out;

    position: relative;
    overflow: hidden;

    &:hover {
      background-color: #005bff;
    }
  }

  span.ripple {
    position: absolute;
    border-radius: 50%;
    transform: scale(0);
    animation: ripple 600ms ease-out;
    background-color: rgba(255, 255, 255, 0.7);
  }

  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;

export default Form;