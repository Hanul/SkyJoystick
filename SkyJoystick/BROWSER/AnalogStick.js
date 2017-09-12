SkyJoystick.AnalogStick = CLASS({
	
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
		
		let angle;
		
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
			let centerTop = self.getTop() + self.getHeight() / 2;
			
			let check = RAR(e, (e) => {
				
				let mouseLeft = e.getLeft();
				let mouseTop = e.getTop();
				
				let _angle = Math.atan2(mouseTop - centerTop, mouseLeft - centerLeft) * 180 / Math.PI;
				
				if (angle !== _angle) {
					angle = _angle;
					self.fireEvent('change');
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
		
		let getAngle = self.getAngle = () => {
			return angle;
		};
	}
});
