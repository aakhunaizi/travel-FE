import styled from "styled-components";
import { TableContainer } from "@material-ui/core";
import { Modal } from "react-bootstrap";

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  margin: 10% auto;
`;

export const StyledTableContainer = styled(TableContainer)`
  width: 85%;
  margin-top: 5%;
  margin-bottom: 2%;
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2%;
`;

export const StyledModal = styled(Modal)`
  margin-top: 5%;
`;
