		function myMusic() {
			var x = document.getElementById("about-text");
			if (x.className === "hide") {
				$('.hide').hide().fadeIn(750);
				x.className += "show";
			} else {
				x.className = "hide";
				$('.hide').show().fadeOut(1000);
			}
		}