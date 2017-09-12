SkyJoystick.LeftAndRight = CLASS({
	
	preset : () => {
		return DIV;
	},
	
	params : () => {
		return {
			style : {
				position : 'fixed',
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
		
		img.on('load', () => {
			EVENT.fireAll('resize');
		});
		
		self.addStyle({
			onDisplayResize : (width, height) => {
				return {
					top : height - self.getHeight() - 10
				};
			}
		});
		
		self.on('touchstart', (e) => {
			
			let centerLeft = self.getLeft() + self.getWidth() / 2;
			
			let check = RAR(e, (e) => {
				
				let mouseLeft = e.getLeft();
				
				if (mouseLeft > centerLeft) {
					if (direction !== 'right') {
						direction = 'right';
						self.fireEvent('right');
					}
				} else {
					if (direction !== 'left') {
						direction = 'left';
						self.fireEvent('left');
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
			
			e.stop();
		});
	}
});
