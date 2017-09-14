SkyJoystick.AnalogStick=CLASS({preset:()=>{return DIV},params:()=>{return{style:{position:"fixed",left:10,zIndex:999}}},init:(t,e,n)=>{let o,i=n.img;e.append(i),i.on("load",()=>{EVENT.fireAll("resize")}),e.addStyle({onDisplayResize:(t,n)=>{return{top:n-e.getHeight()-10}}}),e.on("touchstart",t=>{let n=e.getLeft()+e.getWidth()/2,i=e.getTop()+e.getHeight()/2,f=RAR(t,t=>{let f=t.getLeft(),u=t.getTop(),r=180*Math.atan2(u-i,f-n)/Math.PI;o!==r&&(o=r,e.fireEvent("change"))}),u=EVENT("touchmove",t=>{f(t)}),r=EVENT("touchend",()=>{u.remove(),r.remove()});t.stop()});e.getAngle=(()=>{return o})}}),SkyJoystick.DPad=CLASS({preset:()=>{return DIV},params:()=>{return{style:{position:"fixed",left:10,zIndex:999}}},init:(t,e,n)=>{let o,i=n.img;e.append(i),i.on("load",()=>{EVENT.fireAll("resize")}),e.addStyle({onDisplayResize:(t,n)=>{return{top:n-e.getHeight()-10}}}),e.on("touchstart",t=>{let n=e.getLeft()+e.getWidth()/2,i=e.getTop()+e.getHeight()/2,f=RAR(t,t=>{let f=t.getLeft(),u=t.getTop(),r=180*Math.atan2(u-i,f-n)/Math.PI;r>-135&&r<=-45?"up"!==o&&(o="up",e.fireEvent("up")):r>-45&&r<=45?"right"!==o&&(o="right",e.fireEvent("right")):r>45&&r<=135?"down"!==o&&(o="down",e.fireEvent("down")):(r>135&&r<=180||r>=-180&&r<=-135)&&"left"!==o&&(o="left",e.fireEvent("left"))}),u=EVENT("touchmove",t=>{f(t)}),r=EVENT("touchend",t=>{u.remove(),r.remove()});t.stop()})}}),SkyJoystick.DPad45=CLASS({preset:()=>{return DIV},params:()=>{return{style:{position:"fixed",left:10,zIndex:999}}},init:(t,e,n)=>{let o,i=n.img;e.append(i),i.on("load",()=>{EVENT.fireAll("resize")}),e.addStyle({onDisplayResize:(t,n)=>{return{top:n-e.getHeight()-10}}}),e.on("touchstart",t=>{let n=e.getLeft()+e.getWidth()/2,i=e.getTop()+e.getHeight()/2,f=RAR(t,t=>{let f=t.getLeft(),u=t.getTop();f>n?u<i?"up"!==o&&(o="up",e.fireEvent("up")):"right"!==o&&(o="right",e.fireEvent("right")):u>i?"down"!==o&&(o="down",e.fireEvent("down")):"left"!==o&&(o="left",e.fireEvent("left"))}),u=EVENT("touchmove",t=>{f(t)}),r=EVENT("touchend",()=>{u.remove(),r.remove()});t.stop()})}}),SkyJoystick.Key=CLASS({preset:()=>{return DIV},init:(t,e,n)=>{let o=n.img,i=n.value;e.append(o),o.on("load",()=>{EVENT.fireAll("resize")}),e.on("touchstart",t=>{t.stop()}),e.on("touchend",t=>{t.stop()});e.getValue=(()=>{return i})}}),SkyJoystick.KeySet=CLASS({preset:()=>{return DIV},params:()=>{return{style:{position:"fixed",right:10,zIndex:999}}},init:(t,e,n)=>{let o,i=n.keys;EACH(i,(t,n)=>{t.addStyle({marginLeft:10,marginTop:10,flt:"left"}),t.on("touchstart",n=>{o!==t.getValue()&&(o=t.getValue(),e.fireEvent("change"))}),t.on("touchend",t=>{o=void 0,e.fireEvent("touchend")}),e.append(t),3===i.length&&0===n&&(t.addStyle({flt:"right"}),e.append(CLEAR_BOTH())),4===i.length&&1===n&&e.append(CLEAR_BOTH())}),e.append(CLEAR_BOTH()),e.addStyle({onDisplayResize:(t,n)=>{return{top:n-e.getHeight()-10}}});let f=(e.getValue=(()=>{return o}),t=>{EACH(i,(n,i)=>{o!==n.getValue()&&t.getLeft()>=n.getLeft()&&t.getLeft()<=n.getLeft()+n.getWidth()&&t.getTop()>=n.getTop()&&t.getTop()<=n.getTop()+n.getHeight()&&(o=n.getValue(),e.fireEvent("change"))})});e.on("touchstart",f),e.on("touchmove",f)}}),SkyJoystick.LeftAndRight=CLASS({preset:()=>{return DIV},params:()=>{return{style:{position:"fixed",left:10,zIndex:999}}},init:(t,e,n)=>{let o,i=n.img;e.append(i),i.on("load",()=>{EVENT.fireAll("resize")}),e.addStyle({onDisplayResize:(t,n)=>{return{top:n-e.getHeight()-10}}}),e.on("touchstart",t=>{let n=e.getLeft()+e.getWidth()/2,i=RAR(t,t=>{let i=t.getLeft();i>n?"right"!==o&&(o="right",e.fireEvent("right")):"left"!==o&&(o="left",e.fireEvent("left"))}),f=EVENT("touchmove",t=>{i(t)}),u=EVENT("touchend",()=>{f.remove(),u.remove()});t.stop()})}});