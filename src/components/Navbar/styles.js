import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { MenuItem } from "@material-ui/core";

export const StyledAppBar = styled(AppBar)`
`;

export const LogoLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: white;
  }
`;

export const StyledFaRegUserCircle = styled(FaRegUserCircle)`
  margin-right: 5px;
`;

export const MenuLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: black;
  }
`;

export const MenuLinkWhite = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: white;
  }
`;

export const StyledMenuItem = styled(MenuItem)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: black;
  }
`;
