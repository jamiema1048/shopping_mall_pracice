import React from "react";
import { Outlet } from "react-router-dom";
import type { DefaultLayoutProps } from "@/types/DefaultLayout";
import Header from "./Header";
import Footer from "./Footer";
import styled, { css } from "styled-components";
import Container from "../common/Container";

const PageHeader = styled.div`
  ${(props) =>
    props.fixed &&
    css`
      position: fixed;
    `}
`;

const DefaultLayout = ({ fixedHeader }: DefaultLayoutProps) => {
  return (
    <div>
      <PageHeader fixed={fixedHeader}>
        <Header />
      </PageHeader>
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
