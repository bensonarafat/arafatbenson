<template>
    <section id="experience">
        <h2 class="numbered-heading">Where I’ve Worked</h2>
        <TabGroup>
          <div class="inner">
            <TabList>
              <div class="inner__left">
                <Tab as="template" class="activeTab" v-slot="{ selected }"> 
                  <div :class="{'activeTab': selected, 'inActiveTab' : !selected }"> <img width="15" :style="{'padding-right': '5px'}" src="/images/scoresnap.jpeg"/> ScoreSnap</div>
                </Tab>
                <Tab as="template" class="activeTab" v-slot="{ selected }"> 
                  <div :class="{'activeTab': selected, 'inActiveTab' : !selected }"> <img width="15" :style="{'padding-right': '5px'}" src="/images/codepym.jpeg"/> Codepym</div>
                </Tab>
                <Tab as="template" class="activeTab" v-slot="{ selected }">
                  <div :class="{'activeTab': selected, 'inActiveTab' : !selected }"> <img width="15" :style="{'padding-right': '5px'}" src="/images/blueportal.jpeg"/> BluePortal</div>
                </Tab>
                <Tab as="template" class="activeTab" v-slot="{ selected }">
                  <div :class="{'activeTab': selected, 'inActiveTab' : !selected }"> <img width="15" :style="{'padding-right': '5px'}" src="/images/bemo.jpeg"/> Bemo Technologies</div>
                </Tab>
              </div>
            </TabList>
            <TabPanels>
              <TabPanel class="tabWrapper">
                <div class="tabContent">
                  <h3>
                    <span>Founder</span>
                    <span class="company">&nbsp;@&nbsp;
                      <a href="https://www.scoresnap.io/" class="inline-link" rel="noopener noreferrer" target="_blank">ScoreSnap</a></span>
                  </h3>
                  <p class="range">Dec 2022 - Present</p>
                  <div>
                    <ul>
                      <li>Leading and leading a new vision for how we experience football nationwide.</li>
                    </ul>
                  </div>
                </div>
              </TabPanel>
              <TabPanel class="tabWrapper">
                <div class="tabContent">
                  <h3>
                    <span>Software Engineer</span>
                    <span class="company">&nbsp;@&nbsp;
                      <a href="https://www.codepym.com/" class="inline-link" rel="noopener noreferrer" target="_blank">Codepym</a></span>
                  </h3>
                  <p class="range">May 2021 - Present</p>
                  <div>
                    <ul>
                      <li>​​Led a project to implement a new feature that allowed teachers to track student progress more effectively, resulting in a 25% increase in teacher satisfaction.</li>
                      <li>Worked with a team of developers to improve the platform's user interface and user experience, resulting in a 15% increase in customer retention.</li>
                      <li>Developed and implemented a new customer service strategy that reduced response times by 50% and increased customer satisfaction scores by 20%. </li>
                      <li>Successfully launched a new mobile app allowing students to access educational content offline, resulting in a 20% increase in active users.</li>
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
                  <p class="range">June 2022 - Present</p>
                  <div>
                    <ul>
                      <li>Developed and implemented novel software tools. Increased automation and efficiency level by 35%. </li>
                      <li>Developed and implemented a new customer service strategy that reduced response times by 50% and increased customer satisfaction scores by 20%.</li>
                      <li>Suggested advancement of data security and confidentiality by implementing key processes and protocols. </li>
                    </ul>
                  </div>

                </div>
              </TabPanel>
              <TabPanel class="tabWrapper">
                <div class="tabContent">
                  <h3>
                    <span>Software Engineer</span>
                    <span class="company">&nbsp;@&nbsp;
                      <a href="http://bemotechnologies.com/" class="inline-link" rel="noopener noreferrer" target="_blank">Bemo Technologies </a></span>
                  </h3>
                  <p class="range">June 2019 - Apr 2021</p>
                  <div>
                    <ul>
                      <li>Successfully led a team of engineers to implement a new surge pricing algorithm that improved pricing accuracy and reduced customer complaints by 25%.</li>
                      <li>Developed and implemented a new onboarding process for new drivers that reduced the time it took to get them on the road by 50%.</li>
                      <li>Successfully launched a new ride-sharing feature that allowed customers to share rides and split the cost, resulting in a 30% increase in daily rides.</li>
                      <li>Increased driver retention by 20% by implementing a new incentive program that rewarded drivers for consistently high ratings and low cancellation rates.</li>
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