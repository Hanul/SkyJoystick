SkyJoystick.AnalogStick = CLASS({
	
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
		
		let angle;
		
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
					if (position.left < WIN_WIDTH() / 2) {
						
						let _angle = Math.atan2(position.top - centerTop, position.left - centerLeft) * 180 / Math.PI;
						
						if (angle !== _angle) {
							angle = _angle;
							self.fireEvent('change');
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
		
		let getAngle = self.getAngle = () => {
			return angle;
		};
	}
});
