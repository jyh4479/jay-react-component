import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import {COLOR} from "../../constants/colors";

const Button = (props) => {

    const {label = ''} = props;

    return (
        <ButtonStyle {...props}>{label}</ButtonStyle>
    )
};

export default Button;

Button.propTypes = {
    label: PropTypes.string
};

const ButtonStyle = styled.button`
  width: ${props => props.width ?? 100}px;
  height: ${props => props.height ?? 50}px;

  background-color: ${COLOR.PRIMARY};
  border: none;
  border-radius: 100px;
  cursor: pointer;

  &:active {
    transform: scale(0.98);
  }
`;