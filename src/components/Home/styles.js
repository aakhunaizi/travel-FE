import styled from "styled-components";
import { Card, CardActions, CardHeader } from "@material-ui/core";
import { FaPlaneArrival, FaPlaneDeparture } from "react-icons/fa";

export const StyledSearch = styled.div`
  width: 50%;
  margin-top: 5%;
`;

export const StyledCardHeader = styled(CardHeader)`
  text-align: center;
`;

export const StyledCard = styled(Card)`
  padding-top: 2.5%;
  padding-right: 2.5%;
  padding-left: 2.5%;
  padding-bottom: 5%;
`;

export const StyledCardActions = styled(CardActions)`
  float: right;
`;

export const StyledFaPlaneDeparture = styled(FaPlaneDeparture)`
  margin: 2%;
`;

export const StyledFaPlaneArrival = styled(FaPlaneArrival)`
  margin: 2%;
`;
