SkyJoystick.DPad = CLASS({
	
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
			let centerTop = self.getTop() + self.getHeight() / 2;
			
			let check = RAR(e, (e) => {
				
				EACH(e.getPositions(), (position) => {
					if (position.left < WIN_WIDTH() / 2) {
						
						let angle = Math.atan2(position.top - centerTop, position.left - centerLeft) * 180 / Math.PI;
						
						if (angle > -135 && angle <= -45) {
							if (direction !== 'up') {
								direction = 'up';
								self.fireEvent('up');
							}
						}
						
						else if (angle > -45 && angle <= 45) {
							if (direction !== 'right') {
								direction = 'right';
								self.fireEvent('right');
							}
						}
						
						else if (angle > 45 && angle <= 135) {
							if (direction !== 'down') {
								direction = 'down';
								self.fireEvent('down');
							}
						}
						
						else if ((angle > 135 && angle <= 180) || (angle >= -180 && angle <= -135)) {
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
			
			let touchendEvent = EVENT('touchend', (e) => {
				
				touchmoveEvent.remove();
				touchendEvent.remove();
				
				direction = undefined;
				
				self.fireEvent('touchend');
			});
			
			e.stop();
		});
	}
});
