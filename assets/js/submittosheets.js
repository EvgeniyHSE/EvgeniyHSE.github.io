const scriptURL = 'https://script.google.com/macros/s/AKfycbwYblgZevI_2Ck5eTJsATe1YG03KcWt_J5KszLyaPLRKf4jUPmU/exec'
const form = document.forms['submit-to-google-sheet']
const $button = $("input:submit")

form.addEventListener('submit', e => {
	e.preventDefault()

	if (form.name.value == '' || form.message.value == ''){
		alert('Введите имя и сообщение')
		return
	}
	$button.addClass('sending')

	fetch(scriptURL, { method: 'POST', body: new FormData(form)})
	  .then(response => {
				console.log('Success!', response)
				form.name.value = form.subject.value = form.message.value = ''
				$button.removeClass('sending')
				alert('Сообщение отправлено.')
				})
	  .catch(error => {
				console.error('Error!', error.message)
				$button.removeClass('sending')
				window.alert('Ошибка при отправке.')
				})
})