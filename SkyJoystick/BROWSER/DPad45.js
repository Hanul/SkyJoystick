SkyJoystick.DPad45 = CLASS({
	
	preset : () => {
		return DIV;
	},
	
	params : () => {
		return {
			style : {
				position : 'fixed',
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
					left : WIN_WIDTH() / 32,
					top : height - self.getHeight() - WIN_HEIGHT() / 18
				};
			}
		});
		
		self.on('touchstart', (e) => {
			
			let centerLeft = self.getLeft() + self.getWidth() / 2;
			let centerTop = self.getTop() + self.getHeight() / 2;
			
			let check = RAR(e, (e) => {
				
				EACH(e.getPositions(), (position) => {
					if (position.left < WIN_HEIGHT() / 2) {
						
						if (position.left > centerLeft) {
							if (position.top < centerTop) {
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
							if (position.top > centerTop) {
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
					}
				});
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
