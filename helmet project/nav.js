const navSubs = document.querySelectorAll(".nav-sub");
const navID = document.getElementById("nav-toggle");
const navBar = document.querySelector('.navigation');

navID.addEventListener("click", () => {
	navBar.classList.toggle("show-nav");
	if (navBar.classList.contains("show-nav")) {
		navSubs.forEach(navSub => {
			const long = navSub.querySelector(".long");
			const toggleIcon = navSub.querySelector(".short img");
			long.style.display = "none";
			toggleIcon.style.transform = "";
		});
	}
	});

navSubs.forEach((navSub) => {
	const short = navSub.querySelector(".short");
	const long = navSub.querySelector(".long");
	const toggleIcon = short.querySelector("img");

	short.addEventListener("click", () => {
		navSubs.forEach((otherNavSub) => {
			if (otherNavSub !== navSub) {
				otherNavSub.querySelector(".long").style.display = "none";
				otherNavSub.querySelector("img").style.transform = "";
			}
		});

		const isExpanded = long.style.display === "block";
		long.style.display = isExpanded ? "none" : "block";
		toggleIcon.style.transform = isExpanded ? "" : "rotate(180deg)";
	});
});

const darkToggle = document.getElementById('dark-mode-toggle');
const body = document.body;
darkToggle.addEventListener('click', () => {
	body.classList.toggle('dark-mode');
	const toggleOffIcon = document.getElementById('toggle-off');
	const toggleOnIcon = document.getElementById('toggle-on');
	const isDark = body.classList.contains('dark-mode');
	localStorage.setItem('darkMode', isDark);
	if (isDark) {
		toggleOffIcon.style.display = 'none';
		toggleOnIcon.style.display = 'inline-block';
	} else {
		toggleOffIcon.style.display = 'inline-block';
		toggleOnIcon.style.display = 'none';
	}
});
