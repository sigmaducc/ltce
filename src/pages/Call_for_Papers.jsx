import React from "react";
import "./index.css";
function Call_for_Papers() {
  return (
    <div className="p-4 text-gray-700 text-lg">
      <h1 className="text-4xl text-center pb-8 text-black">Call for Papers</h1>{" "}
      <div className="pb-6">
        <h3 className="text-2xl text-gray-900">
          Track 1: Smart Sensors and Applications
        </h3>
        <ul className="track pl-20 pt-2">
          <li>Internet of Things and its Applications</li>
          <li>Challenges in the sensor network</li>
          <li>Applications of sensors but not limited to</li>
          <ul className="subtrack pl-12 pt-2">
            <li>City</li>
            <li>Healthcare</li>
            <li>Industry</li>
            <li>Aerospace</li>
            <li>Vehicle</li>
            <li>Smart Grids</li>
          </ul>
        </ul>
      </div>
      <div className="py-6">
        <h3 className="text-2xl text-gray-900">
          Track 2: Advanced Data Analytics and Security
        </h3>
        <ul className="track pl-20 pt-2">
          <li>Data Mining</li>
          <li>Machine Learning</li>
          <li>Big Data Analysis</li>
          <li>Deep Learning</li>
          <li>Threats associated with data</li>
        </ul>
      </div>
      <div className="py-6">
        <h3 className="text-2xl text-gray-900">Track 3: Cognitive Computing</h3>
        <ul className="track pl-20 pt-2">
          <li>Natural language processing</li>
          <li>Speech</li>
          <li>Vision</li>
          <li>Human computer interaction</li>
          <li>Pattern Recognition</li>
        </ul>
      </div>
      <div className="py-6">
        <h3 className="text-2xl text-gray-900">
          Track 4: Technology for Innovative Industry Applications
        </h3>
        <ul className="track pl-20 pt-2">
          <li>Industry applications</li>
        </ul>
      </div>
      <div className="py-6">
        <h3 className="text-2xl text-gray-900">
          Track 5: Computational linguistics
        </h3>
        <ul className="track pl-20 pt-2">
          <li>Linguistic Synthesis</li>
          <li>Ontology & Phonology</li>
          <li>Recognition</li>
        </ul>
      </div>
    </div>
  );
}

export default Call_for_Papers;
