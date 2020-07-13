import styled from 'styled-components';
import { defaultTheme, typeScale } from '../utils';
import { applyStyleModifiers } from 'styled-components-modifiers';

const BUTTON_MODIFIERS = {
  small: () => `
    font-size: ${typeScale.helperText};
    padding: 8px;
`,

  large: () => `
    font-size: ${typeScale.header5};
    padding: 16px 24px;
`,
  warning: ({ props }) => `
    background-color: ${props.status.warningColor};
    color: ${props.textColorInverted};

    &:hover, &:focus {
        background-color: ${props.status.warningColorHover};
        outline: 3px solid ${props.status.warningColorHover};
    }

    &:active {
        background-color: ${props.status.warningColorActive};
    }
`,

  secondaryButtonWarning: ({ props }) => `
    background: none;
    border: 2px solid ${props.status.warningColor};
    color: ${props.status.warningColor};
  `,

  tertiaryButtonWarning: ({ props }) => `
  background: none;
  color: ${props.status.warningColor};
`,
  error: ({ props }) => `
    background: none;
    color: ${props.status.errorColor};
    &:hover, &:focus {
      background-color: ${props.status.errorColorHover};
      outline: 3px solid ${props.status.errorColorHover};
      outline-offset: 2px;
      border: 2px solid transparent;
    }
    &:active {
      background-color: ${props.status.errorColorActive};
    }
  `,
  primaryButtonError: ({ props }) => `
    background-color: ${props.status.errorColor};
    color: ${props.textColorInverted};
  `,
  secondaryButtonError: ({ props }) => `
    border: 2px solid ${props.status.warningColor};
  `,
  success: ({ props }) => `
    background: none;
    color: ${props.status.successColor};
    &:hover, &:focus {
      background-color: ${props.status.successColorHover};
      outline: 3px solid ${props.status.successColorHover};
      outline-offset: 2px;
      border: 2px solid transparent;
    }
    &:active {
      background-color: ${defaultTheme.status.successColorActive};
    }
  `,
  primaryButtonSuccess: ({ props }) => `
    background-color: ${props.status.successColor};
    color: ${props.textColorInverted};
  `,
  secondaryButtonSuccess: ({ props }) => `
    border: 2px solid ${props.status.warningColor};
  `,
};

const Button = styled.button`
  padding: 12px 24px;
  font-size: ${typeScale.paragraph};
  min-width: 100px;
  cursor: pointer;
  font-family: 'Roboto Mono', monospace;
  transition: background-color 0.2s linear, color 0.2s linear;

  &:hover {
    background-color: ${(props) => props.primaryColorHover};
    color: ${(props) => props.textColorOnPrimary};
  }

  &:focus {
    outline: 3px solid ${(props) => props.primaryColorHover};
    outline-offset: 2px;
  }

  &:active {
    background-color: ${(props) => props.primaryColorActive};
    border-color: ${(props) => props.primaryColorActive};
    color: ${(props) => props.textColorOnPrimary};
  }
`;

const PrimaryButton = styled(Button)`
  background-color: ${(props) => props.primaryColor};
  border: none;
  color: white;

  &:disabled {
    background-color: ${(props) => props.disabled};
    color: ${(props) => props.textOnDisabled};
    cursor: not-allowed;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;

export const SecondaryButton = styled(Button)`
  background: none;
  border: 2px solid ${(props) => props.primaryColor};
  color: ${(props) => props.primaryColor};

  &:disabled {
    background: none;
    color: ${(props) => props.disabled};
    border-color: ${(props) => props.disabled};
    cursor: not-allowed;
  }

  &:hover {
    border: none;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;

export const TertiaryButton = styled(Button)`
  background: none;
  border: none;
  color: ${(props) => props.primaryColor};

  &:disabled {
    background: none;
    color: ${(props) => props.disabled};
    cursor: not-allowed;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;

export default PrimaryButton;
