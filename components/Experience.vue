<template>
    <section id="experience">
        <h2 class="numbered-heading">Where I’ve Worked</h2>
        <TabGroup>
          <div class="inner">
            <TabList>
              <div class="inner__left">
                <Tab as="template" class="activeTab" v-slot="{ selected }"> 
                  <div :class="{'activeTab': selected, 'inActiveTab' : !selected }">Jubilee System Ltd</div>
                </Tab>
                <Tab as="template" class="activeTab" v-slot="{ selected }">
                  <div :class="{'activeTab': selected, 'inActiveTab' : !selected }">BluePortal</div>
                </Tab>
                <Tab as="template" class="activeTab" v-slot="{ selected }">
                  <div :class="{'activeTab': selected, 'inActiveTab' : !selected }">Bemo Groceries</div>
                </Tab>
                <Tab as="template" class="activeTab" v-slot="{ selected }">
                  <div :class="{'activeTab': selected, 'inActiveTab' : !selected }"> Bemo Ride</div>
                </Tab>
              </div>
            </TabList>
            <TabPanels>
              <TabPanel class="tabWrapper">
                <div class="tabContent">
                  <h3>
                    <span>Software Engineer</span>
                    <span class="company">&nbsp;@&nbsp;
                      <a href="https://www.jubileesys.com/" class="inline-link" rel="noopener noreferrer" target="_blank">Juilee Systems Ltd</a></span>
                  </h3>
                  <p class="range">Dec 2021 - Present</p>
                  <div>
                    <ul>
                      <li>Reduce the time required to debug the first iteration of a new program by 50% using agile methodology in our software development process to identify and correct errors at each stage of the process instead at the end. </li>
                      <li>Planned high-end software, improving the overall efficiency of company processes by 25% </li>
                      <li>Led the development of Sleek Nigeria. Write 80% of the code, and review the rest. Achieved excellent system stability. </li>
                      <li>Successfully modified numerous software applications that increased user-friendliness by 20%.</li>
                      <li>Obtained “Employee of the Month” 3 times in a row, owing to exceptional software design and support to all departments.</li>
                    </ul>
                  </div>
                </div>
              </TabPanel>
              <TabPanel class="tabWrapper">
                <div class="tabContent">
                  
                  <h3>
                    <span>Software Engineer</span>
                    <span class="company">&nbsp;@&nbsp;
                      <a href="https://blueportalcompany.com/" class="inline-link" rel="noopener noreferrer" target="_blank">Blueportal Company</a></span>
                  </h3>
                  <p class="range">Nov 2022 - Present</p>
                  <div>
                    <ul>
                      <li>Developed and implemented novel software tools. Increased automation and efficiency level by 35%.</li>
                      <li>Wrote the Backend for SMS using the SaaS model which optimizes school day-to-day operations. Delivered a working version in four weeks, which led to Company’s first Contact with Lagos Secondary School. </li>
                      <li>Suggested advancement of security and confidentiality of data through the implementation of key processes and protocols.  </li>
                    </ul>
                  </div>

                </div>
              </TabPanel>
              <TabPanel class="tabWrapper">
                <div class="tabContent">
                  
                  <h3>
                    <span>Software Engineer</span>
                    <span class="company">&nbsp;@&nbsp;
                      <a href="https://bemogroceries.com/" class="inline-link" rel="noopener noreferrer" target="_blank">Bemo Groceries </a></span>
                  </h3>
                  <p class="range">Feb 2021 - Dec 2021</p>
                  <div>
                    <ul>
                      <li>​​Developed a business intelligence dashboard that gave the front desk real-time visibility into inventory and procurement. </li>
                      <li>Removed bugs from CRM software, making it 50% more efficient than before. </li>
                      <li>Refactored the software structure for online chat services, reducing overhead costs by $2500 per month.</li>
                      <li>Created a data analysis pipeline that increased program efficiency.  </li>
                      <li>Singlehandedly designed and developed a processing platform, which resulted in improved general performance. </li>
                    </ul>
                  </div>

                </div>
              </TabPanel>
              <TabPanel class="tabWrapper">
                <div class="tabContent">
                  <h3>
                    <span>Software Engineer</span>
                    <span class="company">&nbsp;@&nbsp;
                      <a href="https://bemoride.com/" class="inline-link" rel="noopener noreferrer" target="_blank">Bemo Ride </a></span>
                  </h3>
                  <p class="range">Apr 2019 - Feb 2021</p>
                  <div>
                    <ul>
                      <li>Chosen as one of the employees representing the company at the Annual Software Engineers’ Forum</li>
                      <li>Trained 20+ individuals in handling software development cycles, as part of the induction processes.</li>
                      <li>Identified areas for modification and improvements within a short span of time. </li>
                      <li>Redesigned the company’s web-based application, providing information technology support throughout the tenure.  </li>
                    </ul>
                  </div>
                </div>
              </TabPanel>
            </TabPanels>
          </div>
        </TabGroup>
    </section>
</template>
<style scoped>
.tabContent h3 {
    margin-bottom: 2px;
    font-size: 22px;
    font-weight: 500;
    line-height: 1.3;
}
.tabContent ul {
    padding: 0px;
    margin: 0px;
    list-style: none;
    font-size: 16px;
}
.tabContent ul li {
    position: relative;
    padding-left: 30px;
    margin-bottom: 10px;
}
.tabContent ul li::before {
    content: "▹";
    position: absolute;
    left: 0px;
    color: #ff5277;
}
.tabContent .range {
    margin-bottom: 25px;
    color: #a8b2d1;
    font-size: 13px;
}
.tabContent h3 .company {
    color: #ff5277;
}
@media (min-width: 700px){
.inner {
    min-height: 340px;
}
} 
.inner__left{
  display:flex;
  flex-direction:column;
  position:relative;
  z-index:3;
  width: max-content;
  padding: 0px;
  margin: 0px;
}
.tabWrapper {
    position: relative;
    width: 100%;
    margin-left: 20px;
}
.tabContent {
    width: 100%;
    height: auto;
    padding: 10px 5px;
}
.activeTab {
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
    transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    width: 100%;
    height: 42px;
    padding: 0px 20px 2px;
    border-left: 2px solid #233554;
    background-color: transparent;
    color: #ff5277;
    font-size: 13px;
    text-align: left;
    white-space: nowrap;
}
.inActiveTab {
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
    transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    width: 100%;
    height: 42px;
    padding: 0px 20px 2px;
    border-left: 2px solid #233554;
    background-color: transparent;
    color: #8892b0;
    font-size: 13px;
    text-align: left;
    white-space: nowrap;
    outline: none;
}
.activeTab:hover, .activeTab:focus {
    background-color: #112240;
}
.activeTab:hover, .activeTab:active, .activeTab:focus {
    color: #ff5277;
    outline: 0px;
}
.inner {
    display: flex;
}
.numbered-heading {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    margin: 10px 0px 40px;
    width: 100%;
    font-size: clamp(26px,5vw,32px);
    white-space: nowrap;
}
.numbered-heading::after {
    content: "";
    display: block;
    position: relative;
    top: -5px;
    width: 300px;
    height: 1px;
    margin-left: 20px;
    background-color: #233554;
}
</style>
<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
</script>