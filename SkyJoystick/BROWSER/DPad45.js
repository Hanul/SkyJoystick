SkyJoystick.DPad45 = CLASS({
	
	preset : () => {
		return DIV;
	},
	
	params : () => {
		return {
			style : {
				position : 'fixed',
				left : 20,
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
		
		img.on('load', () => {
			EVENT.fireAll('resize');
		});
		
		self.addStyle({
			onDisplayResize : (width, height) => {
				return {
					top : height - self.getHeight() - 20
				};
			}
		});
		
		self.on('touchstart', (e) => {
			
			let centerLeft = self.getLeft() + self.getWidth() / 2;
			let centerTop = self.getTop() + self.getHeight() / 2;
			
			let check = RAR(e, (e) => {
				
				let mouseLeft = e.getLeft();
				let mouseTop = e.getTop();
				
				if (mouseLeft > centerLeft) {
					if (mouseTop < centerTop) {
						if (direction !== 'up') {
							direction = 'up';
							self.fireEvent('up');
						}
					} else {
						if (direction !== 'right') {
							direction = 'right';
							self.fireEvent('right');
						}
					}
				} else {
					if (mouseTop > centerTop) {
						if (direction !== 'down') {
							direction = 'down';
							self.fireEvent('down');
						}
					} else {
						if (direction !== 'left') {
							direction = 'left';
							self.fireEvent('left');
						}
					}
				}
			});
			
			let touchmoveEvent = EVENT('touchmove', (e) => {
				check(e);
			});
			
			let touchendEvent = EVENT('touchend', () => {
				
				touchmoveEvent.remove();
				touchendEvent.remove();
				
				self.fireEvent('touchend');
			});
			
			e.stop();
		});
	}
});
