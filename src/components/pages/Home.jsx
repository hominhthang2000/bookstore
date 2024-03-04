import React, { useEffect, useState } from "react";
import BaseHeader from "../Headers";
import MainLayout from "../Layouts/MainLayout";
import SlideFirst from "../Sliders/SlideFirst";
import Slidersecond from "../Sliders/Slidersecond";
import BoxFirst from "../BoxLabel/BoxFirst";
import Discount from "../Discount/Discount";
import Category from "./Category";
import ComboNewBook from "./ComboNewBook";
import ListNewBook from "./ListNewBook";
import ComboBook from "./ComboBook";
import Publisher from "./Puplisher";
import Footer from "../Footer";
import OutstandingNumbers from "./OutstandingNumbers";
import Products from "./Products";

const Home = () => {
  return (
    <MainLayout>
      <div className="grid grid-cols-12 gap-4 container mt-5">
        <div className="col-span-7 h-[635px] ">
          <SlideFirst />
        </div>
        <div className="col-span-5 h-[635px]">
          <div className="h-full w-full">
            <Slidersecond />
          </div>
        </div>
      </div>
      <div className="container">
        <BoxFirst />
      </div>
      <div className="mt-8 container">
        <Discount />
      </div>
      <div className="mt-11 container">
        <Category />
      </div>
      <div className="mt-11 container">
        <ListNewBook />
      </div>
      <div className="mt-11 container">
        <ComboNewBook />
      </div>
      <div className="mt-11 container">
        <ComboBook />
      </div>
      <div className="mt-11 container">
        <Publisher />
      </div>
      <div className="mt-11 container">
        <Products />
      </div>
      <div className="mt-11">
        <OutstandingNumbers />
      </div>
    </MainLayout>
  );
};

export default Home;
