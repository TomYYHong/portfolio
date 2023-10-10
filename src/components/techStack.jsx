import React from "react";
import Java from "../assets/javaIcon.png"
import SpringBoot from "../assets/Spring_Boot_icon.png"
import JS from "../assets/JS.png"
import TS from "../assets/TS.png"
import react from "../assets/react.svg"
import Mongo from "../assets/Mongodb.png"
import helm from "../assets/helm.png"
import docker from "../assets/docker.png"
import sql from "../assets/mysql.png"
import Kubernetes from "../assets/k8s.png"


export default function TechStack() {
    return ( 
      <div className="Main_container">
<div className="box-container">
  <div className="box">

    <div className="item">
        <div className="item_bg"></div>

        <div className="item_title">
          Java
          <img src={Java} className="techIcon"></img>
        </div>
    </div>

    <div className="item">
        <div className="item_bg"></div>

        <div className="item_title">
        Spring-boot
          <img src={SpringBoot} className="techIcon"></img>
        </div>
    </div>

    <div className="item">
        <div className="item_bg"></div>

        <div className="item_title">
        JavaScript
          <img src={JS} className="techIcon"></img>
        </div>
    </div>

    <div className="item">
        <div className="item_bg"></div>

        <div className="item_title">
        TypeScript
          <img src={TS} className="techIcon"></img>
        </div>
    </div>

    <div className="item">
        <div className="item_bg"></div>

        <div className="item_title">
        MySQL
          <img src={sql} className="techIcon"></img>
        </div>
    </div>

    
    <div className="item">
        <div className="item_bg"></div>

        <div className="item_title">
        MongoDB
          <img src={Mongo} className="techIcon"></img>
        </div>
    </div>

    <div className="item">
        <div className="item_bg"></div>

        <div className="item_title">
        Docker
          <img src={docker} className="techIcon"></img>
        </div>
    </div>
    
    <div className="item">
        <div className="item_bg"></div>

        <div className="item_title">
        Kubernetes
          <img src={Kubernetes} className="techIcon"></img>
        </div>
    </div>

    <div className="item">
        <div className="item_bg"></div>

        <div className="item_title">
        Helm
          <img src={helm} className="techIcon"></img>
        </div>
    </div>


  </div>
</div>
</div>
    );}