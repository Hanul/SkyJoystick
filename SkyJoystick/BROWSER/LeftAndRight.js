SkyJoystick.LeftAndRight = CLASS({
	
	preset : () => {
		return DIV;
	},
	
	params : () => {
		return {
			style : {
				position : 'fixed',
				left : 20,
				bottom : 20,
				zIndex : 999
			}
		};
	},
	
	init : (inner, self, params) => {
		//REQUIRED: params
		//REQUIRED: params.img
		
		let img = params.img;
		
		self.append(img);
		
		let direction;
		
		self.on('touchstart', (e) => {
			
			let centerLeft = self.getLeft() + self.getWidth() / 2;
			
			let check = RAR(e, (e) => {
				
				EACH(e.getPositions(), (position) => {
					if (position.left < WIN_WIDTH() / 2) {
						
						if (position.left > centerLeft) {
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
					}
				});
			});
			
			let touchmoveEvent = EVENT('touchmove', (e) => {
				check(e);
			});
			
			let touchendEvent = EVENT('touchend', () => {
				
				touchmoveEvent.remove();
				touchendEvent.remove();
				
				direction = undefined;
				
				self.fireEvent('touchend');
			});
			
			e.stop();
		});
	}
});
