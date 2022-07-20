import React from "react";
import "./index.css";
function Call_for_Papers() {
  return (
    <div className="p-4 text-gray-700 text-xl">
      <h1 className="text-4xl text-center pb-10 text-black">Call for Papers</h1>{" "}
      <div className="pb-10">
        Authors are cordially invited to contribute their original and
        unpublished research papers in the International Conference on Recent
        Trends in Multidisciplinary Research and Innovation (ICRMIR-23).
        Contributions are solicited through online submission platform on the
        following (but not limited to) tracks –
      </div>
      <div className="flex flex-col md: items-center">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="w-72 mr-4 md:w-56 md: pb-10">
            <div className="p-2 border text-center rounded-t-lg text-xl text-gray-900 bg-[#013b75] font-bold text-[#f7c653]">
              <div>Smart Sensors </div>
              <div>and Applications</div>
            </div>
            <div className="pt-4 pb-2 px-4 border rounded-b-lg text-base">
              <div className="py-2">
                Internet of Things and its Applications
              </div>
              <div className="line" />
              <div className="py-2">Challenges in the sensor network</div>
              <div className="line" />
              <div className="py-2">
                Applications of sensors
                <div>
                  <ul className="subtrack text-base pl-12 pt-2">
                    <li>City</li>
                    <li>Healthcare</li>
                    <li>Industry</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="w-72 mr-4 md:w-56 md: pb-10">
            <div className="p-2 border text-center rounded-t-lg text-xl text-gray-900 bg-[#013b75] font-bold text-[#f7c653]">
              <div>Adv. Data Analytics</div>
              <div>and Security</div>
            </div>
            <div className="pt-4 pb-2 px-4 border rounded-b-lg text-base">
              <div className="py-2">Data Mining</div>
              <div className="line" />
              <div className="py-2">Machine Learning</div>
              <div className="line" />
              <div className="py-2">Big Data Analysis</div>
              <div className="line" />
              <div className="py-2">Deep Learning</div>
              <div className="line" />
              <div className="py-2">Threats associated with data</div>
            </div>
          </div>

          <div className="w-72 md:w-56 md: pb-10">
            <div className="p-2 border text-center rounded-t-lg text-xl text-gray-900 bg-[#013b75] font-bold text-[#f7c653]">
              <div>Cognitive</div>
              <div>Computing</div>
            </div>
            <div className="pt-4 pb-2 px-4 border rounded-b-lg text-base">
              <div className="py-2">Natural Language Processing</div>
              <div className="line" />
              <div className="py-2">Speech</div>
              <div className="line" />
              <div className="py-2">Vision</div>
              <div className="line" />
              <div className="py-2">Human Computer Interaction</div>
              <div className="line" />
              <div className="py-2">Pattern Recognition</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-evenly md:flex-row ">
          <div className="w-72 mr-4 md:w-56 md: pb-10">
            <div className="p-2 border text-center rounded-t-lg text-xl text-gray-900 bg-[#013b75] font-bold text-[#f7c653]">
              <div>Tech for Innovative </div>
              <div>Industry Applications</div>
            </div>
            <div className="pt-4 pb-2 px-4 border rounded-b-lg text-base">
              <div className="py-2">Industry applications</div>
            </div>
          </div>

          <div className="w-72 md:w-56">
            <div className="p-2 border text-center rounded-t-lg text-xl text-gray-900 bg-[#013b75] font-bold text-[#f7c653]">
              <div>Computational</div>
              <div>Linguistics</div>
            </div>
            <div className="pt-4 pb-2 px-4 border rounded-b-lg text-base">
              <div className="py-2">Linguistic Synthesis</div>
              <div className="line" />
              <div className="py-2">Ontology & Phonology</div>
              <div className="line" />
              <div className="py-2">Recognition</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Call_for_Papers;
