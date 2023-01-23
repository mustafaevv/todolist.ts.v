import styled from "styled-components";

type Props = {
  children: any;
};

const Containers = styled.div`
  max-width: 1430px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
`;

const Container = ({ children }: Props) => {
  return <Containers>{children}</Containers>;
};

export default Container;
