setInterval(() => {
	d = new Date();

	h = d.getHours();
	m = d.getMinutes();
	s = d.getSeconds();

	hour_rotation = 30 * h + m / 2;
	min_rotation = 6 * m;
	sec_rotation = 6 * s;

	hour.style.transform = `rotate(${hour_rotation}deg)`;
	minute.style.transform = `rotate(${min_rotation}deg)`;
	second.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);
