SkyJoystick.DPad45 = CLASS({
	
	preset : () => {
		return DIV;
	},
	
	params : () => {
		return {
			style : {
				position : 'fixed',
				bottom : 10,
				left : 10,
				zIndex : 999
			}
		};
	},
	
	init : (inner, self, params) => {
		//REQUIRED: params
		//REQUIRED: params.img
		
		let img = params.img;
		
		let direction;
		
		self.append(img);
		
		self.on('touchstart', (e) => {
			
			let centerLeft = self.getLeft() + self.getWidth() / 2;
			let centerTop = self.getTop() + self.getHeight() / 2;
			
			let check = RAR(e, (e) => {
				
				let mouseLeft = e.getLeft();
				let mouseTop = e.getTop();
				
				if (mouseLeft < centerLeft) {
					if (mouseTop < centerTop) {
						
					} else {
						
					}
				} else {
					if (mouseTop < centerTop) {
						
					} else {
						
					}
				}
			});
			
			let touchmoveEvent = EVENT('touchmove', (e) => {
				check(e);
			});
			
			let touchendEvent = EVENT('touchend', () => {
				touchmoveEvent.remove();
				touchendEvent.remove();
			});
		});
	}
});
