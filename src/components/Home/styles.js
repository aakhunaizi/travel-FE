import styled from "styled-components";
import { Card, CardActions, CardHeader } from "@material-ui/core";
import { FaPlaneArrival, FaPlaneDeparture } from "react-icons/fa";

export const StyledSearch = styled.div`
  width: 50%;
`;

export const StyledCardHeader = styled(CardHeader)`
  text-align: center;
`;

export const StyledCard = styled(Card)`
  padding-top: 2.5%;
  padding-right: 2.5%;
  padding-left: 2.5%;
  padding-bottom: 5%;
  background-color: rgba(255, 255, 255, 0.9);
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

export const BackgroundContainer = styled.div`
  background-image: url("https://images.unsplash.com/photo-1552078083-9d75f4040f2d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80");
  background-size: cover;
`;

export const StyledCardContainer = styled.div`
  margin: 10% auto;
`;
