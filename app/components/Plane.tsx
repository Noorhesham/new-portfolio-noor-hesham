"use client";
import React from "react";
import { Plane } from "react-curtains";

const basicVs = `
    precision mediump float;
    
    attribute vec3 aVertexPosition;
    attribute vec2 aTextureCoord;
    
    uniform mat4 uMVMatrix;
    uniform mat4 uPMatrix;
        
    varying vec3 vVertexPosition;
    varying vec2 vTextureCoord;
    
    void main() {
        gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
        
        // varyings
        vVertexPosition = aVertexPosition;
        vTextureCoord = aTextureCoord;
    }
`;

const basicFs = `
    precision mediump float;

    varying vec3 vVertexPosition;
    varying vec2 vTextureCoord;
    
    void main() {        
        gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
    }
`;

export default function BasicPlane({ children }) {
  return (
    <Plane
      className="BasicPlane"
      vertexShader={basicVs}
      fragmentShader={basicFs}
    >
      {children}
    </Plane>
  );
}
