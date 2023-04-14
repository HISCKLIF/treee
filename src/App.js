import "./css/style.css";
import React, { useState } from 'react';
import { Button, Modal } from 'antd';
function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <body>
      

    <div class="container">
      <ul>
        <li>
          <input type="checkbox" id="frontend" />
          <label for="frontend" onClick={showModal()}>
            <div class="div">
              <img class="image"src="image/1.jpg" alt="" />
              ნანი ხაჩიძე
            </div>
          </label>
          <ul>
            <li>
              <input type="checkbox" id="css" onClick={showModal(5)}/>
              <label for="css">
                <div class="div">
                  <img class="image"src="image/5.jpg" alt="" />
                  თამაზი თიგიშვილი
                </div>
              </label>
              <ul>
                <li>
                  <label for="">
                    <div class="div">
                      <img class="image"src="./image/6.jpg" alt="" />
                      ნიკა თიგიშვილი
                    </div>
                  </label>
                </li>
                <li>
                  <label for="">
                    <div class="div">
                      <img class="image"src="image/7.jpg" alt="" />
                      ლექსო თიგიშვილი
                    </div>
                  </label>
                </li>
                <li>
                  <label for="">
                    <div class="div">
                      <img class="image"src="image/8.jpg" alt="" />
                      მარი <br /> თიგიშვილი
                    </div>
                  </label>
                </li>
                <li>
                  <label for="">
                    <div class="div">
                      <img class="image"src="image/9.jpg" alt="" />
                      ვიკა თიგიშვილი
                    </div>
                  </label>
                </li>
              </ul>
            </li>
            <li>
              <input type="checkbox" id="bs" />
              <label for="bs">
                <div class="div">
                  <img class="image"src="image/10.jpg" alt="" />
                  თამუნა თიგიშვილი
                </div>
              </label>
              <ul>
                <li>
                  <label for="">
                    <div class="div">
                      <img class="image"src="image/11.jpg" alt="" />
                      მარი კულუმბეგოვი
                    </div>
                  </label>
                </li>
                <li>
                  <label for="">
                    <div class="div">
                      <img class="image"src="image/12.jpg" alt="" />
                      ქეთი კულუმბეგოვი
                    </div>
                  </label>
                </li>
              </ul>
            </li>
            <li>
              <input type="checkbox" id="js" />
              <label for="js">
                <div class="div">
                  <img class="image"src="image/2.jpg" alt="" />
                  თეონა თიგიშვილი
                </div>
              </label>
              <ul>
                <li>
                  <label for="react">
                    <div class="div">
                      <img class="image"src="image/4.jpg" alt="" />
                      სანდრო ცენტერაძე
                    </div>
                  </label>
                </li>
                <li>
                  <label for="">
                    <div class="div">
                      <img class="image"src="image/3.jpg" alt="" />
                      ირაკლი ცენტერაძე
                    </div>
                  </label>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
      <Modal title="" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} className="modal">
             <img class="modal-image"src="image/1.jpg" alt="" />
      </Modal>
    </body>
  );
}

export default App;
