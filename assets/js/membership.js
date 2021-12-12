console.log("loaded");
(function (f) {
	document.getElementsByTagName("body")[0].addEventListener("mousemove", function (a) {
		(l.style.left = a.clientX + "px"), (l.style.top = a.clientY + "px"), (h.style.left = a.clientX + "px"), (h.style.top = a.clientY + "px"), (g.style.left = a.clientX + "px"), (g.style.top = a.clientY + "px")
	});
	var l = document.getElementById("cursor"),
		h = document.getElementById("cursor2"),
		g = document.getElementById("cursor3");

	function d(a) {
		h.classList.add("hover"), g.classList.add("hover")
	}

	function m(a) {
		h.classList.remove("hover"), g.classList.remove("hover")
	}
	m();
	for (var b = document.querySelectorAll(".hover-target"), k = b.length - 1; k >= 0; k--) {
		c(b[k])
	}

	function c(a) {
		a.addEventListener("mouseover", d), a.addEventListener("mouseout", m)
	}
	var j = 0;
	window.setInterval(function () {
		j++;
		document.getElementsByClassName("moving-image-bg")[0].style.backgroundPosition = j + "px 0px"
	}, 18);
	f(document).ready(function () {
		f(".case-study-name:nth-child(1)").on("mouseenter", function () {
			f(".case-study-name.active").removeClass("active");
			f(".case-study-images li.show").removeClass("show");
			f(".case-study-images li:nth-child(1)").addClass("show");
			f(".case-study-name:nth-child(1)").addClass("active")
		});
		f(".case-study-name:nth-child(2)").on("mouseenter", function () {
			f(".case-study-name.active").removeClass("active");
			f(".case-study-images li.show").removeClass("show");
			f(".case-study-images li:nth-child(2)").addClass("show");
			f(".case-study-name:nth-child(2)").addClass("active")
		});
		f(".case-study-name:nth-child(3)").on("mouseenter", function () {
			f(".case-study-name.active").removeClass("active");
			f(".case-study-images li.show").removeClass("show");
			f(".case-study-images li:nth-child(3)").addClass("show");
			f(".case-study-name:nth-child(3)").addClass("active")
		});
		f(".case-study-name:nth-child(4)").on("mouseenter", function () {
			f(".case-study-name.active").removeClass("active");
			f(".case-study-images li.show").removeClass("show");
			f(".case-study-images li:nth-child(4)").addClass("show");
			f(".case-study-name:nth-child(4)").addClass("active")
		});
		f(".case-study-name:nth-child(1)").trigger("mouseenter")
	})
})(jQuery);