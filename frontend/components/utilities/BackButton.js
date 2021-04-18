import styled from "styled-components";

const Button = ({ className }) => {
  return (
    <button onClick={() => window.history.back()} className={className}>
      <i className="fas fa-arrow-left fa-2x" />
    </button>
  );
};

export const BackButton = styled(Button)`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 10rem;
  left: 10rem;
  width: 4rem;
  height: 4rem;
  border-radius: 100%;
  color: ${(props) => (props.color ? props.color : "black")};
  background: none;
  border: 3px solid ${(props) => (props.color ? props.color : "black")};
  transition: all 100ms;

  :hover {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  @media (max-width: 992px) {
    top: 4rem;
    left: 2rem;
    width: 3rem;
    height: 3rem;
  }
`;
