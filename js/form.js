const phone = document.querySelectorAll('input[name="phone"]');
const maskOptions = {
	mask: '+7(000)000-00-00',
	lazy: true
};
for (var i = 0; i < phone.length; i++){
	var mask = new IMask(phone[i], maskOptions);
}
