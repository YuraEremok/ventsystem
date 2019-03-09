
										document.getElementById('feedback-form').addEventListener('submit', function(evt){
  										var http = new XMLHttpRequest(), f = this;
  										evt.preventDefault();
  										http.open("POST", " <?php bloginfo('template_directory');?>/contacts.php", true);
  												http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  										http.send("nameFF=" + f.nameFF.value + "&contactFF=" + f.contactFF.value + "&tel=" + f.tel.value + "&messageFF=" + f.messageFF.value);
  										http.onreadystatechange = function() {
  										  if (http.readyState == 4 && http.status == 200) {
   										   alert( Ваше сообщение получено.\nНаши специалисты ответят Вам в ближайшее время.\nБлагодарим за интерес к нашей фирме!');    
     										 // f.messageFF.removeAttribute('value'); // очистить поле сообщения (две строки)
     										 // f.messageFF.value='';
  										  }
 											 }
  												http.onerror = function() {
  										  alert('Извините, данные не были переданы');
								  }
										}, false);


                    




									