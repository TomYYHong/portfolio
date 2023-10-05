import React from "react";
import Java from "../assets/javaIcon.png"
import SpringBoot from "../assets/Spring_Boot_icon.png"
import JS from "../assets/JS.png"

export default function TechStack() {
    return ( 
<div class="ag-format-container">
  <div class="ag-courses_box">

    <div class="ag-courses_item">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
          Java
          <img src={Java} className="techIcon"></img>
        </div>
    </div>

    <div class="ag-courses_item">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
          Spring-boot
          <img src={SpringBoot} className="techIcon"></img>
        </div>
    </div>

    <div class="ag-courses_item">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
          JavaScript
          <img src={JS} className="techIcon"></img>
        </div>
    </div>

  </div>
</div>
    );}