"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[79244],{78449:(t,e,i)=>{i.r(e),i.d(e,{data:()=>d});const d={key:"v-02a9d6ff",path:"/devices/T41W1Z.html",title:"ORVIBO T41W1Z control via MQTT",lang:"en-US",frontmatter:{title:"ORVIBO T41W1Z control via MQTT",description:"Integrate your ORVIBO T41W1Z via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2022-03-01T09:06:16.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Switch",slug:"switch",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/T41W1Z.md",git:{updatedTime:1648825489e3}}},66162:(t,e,i)=>{i.r(e),i.d(e,{default:()=>a});const d=(0,i(66252).uE)('<h1 id="orvibo-t41w1z" tabindex="-1"><a class="header-anchor" href="#orvibo-t41w1z" aria-hidden="true">#</a> ORVIBO T41W1Z</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>T41W1Z</td></tr><tr><td>Vendor</td><td>ORVIBO</td></tr><tr><td>Description</td><td>MixSwitch 1 gang (without neutral wire)</td></tr><tr><td>Exposes</td><td>switch (state), linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/T41W1Z.jpg" alt="ORVIBO T41W1Z"></td></tr></tbody></table><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',7),o={},a=(0,i(83744).Z)(o,[["render",function(t,e){return d}]])},83744:(t,e)=>{e.Z=(t,e)=>{for(const[i,d]of e)t[i]=d;return t}}}]);